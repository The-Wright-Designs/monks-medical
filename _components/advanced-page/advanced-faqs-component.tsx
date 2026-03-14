"use client";

import { useState, useRef } from "react";
import classNames from "classnames";

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
  clinicalNote?: string;
  cssClasses?: string;
}

const AdvancedFaqsComponent = ({ items, clinicalNote, cssClasses }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={classNames("flex flex-col gap-10", cssClasses)}>
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div key={index} className="border-t border-black/25">
            <button
              onClick={() => toggle(index)}
              className="flex items-center gap-[18px] py-4 w-full text-left desktop:hover:cursor-pointer"
            >
              <p className="flex-1 font-bold">{item.question}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className={classNames("shrink-0 transition-transform duration-300", {
                  "rotate-180": openIndex === index,
                })}
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#2D2C33"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              ref={(el) => { answerRefs.current[index] = el; }}
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{
                maxHeight: openIndex === index
                  ? `${answerRefs.current[index]?.scrollHeight ?? 200}px`
                  : "0px",
              }}
            >
              <p className="pb-4">{item.answer}</p>
            </div>
          </div>
        ))}
        <div className="border-t border-black/25" />
      </div>
      {clinicalNote && (
        <div className="flex flex-col gap-3">
          <p className="font-bold italic">Clinical Note:</p>
          <p className="italic">{clinicalNote}</p>
        </div>
      )}
    </div>
  );
};

export default AdvancedFaqsComponent;
