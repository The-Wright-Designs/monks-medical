"use client";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useCallback, useRef } from "react";

interface Props {
  cssClasses?: string;
}

const libraries: "marker"[] = ["marker"];

const ContactMap = ({ cssClasses }: Props) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null,
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    libraries,
  });

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
    if (window.google?.maps?.marker?.AdvancedMarkerElement) {
      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: { lat: -34.05339098196614, lng: 23.371045623888755 },
      });
    }
  }, []);

  const onUnmount = useCallback(() => {
    if (markerRef.current) {
      markerRef.current.map = null;
      markerRef.current = null;
    }
    mapRef.current = null;
  }, []);

  if (!isLoaded)
    return (
      <div
        className={`border rounded-xl bg-white border-black grid place-items-center py-16 w-full h-full ${cssClasses}`}
      >
        <p className="text-[30px] font-light text-black">Map loading...</p>
      </div>
    );

  return (
    <GoogleMap
      zoom={16}
      center={{ lat: -34.05339098196614, lng: 23.371045623888755 }}
      mapContainerClassName={cssClasses}
      onLoad={onMapLoad}
      onUnmount={onUnmount}
      options={{ mapId: "monks-medical-map" }}
    />
  );
};

export default ContactMap;
