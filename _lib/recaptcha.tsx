import ReCAPTCHA from "react-google-recaptcha";

interface Props {
  onChange: (value: string | null) => void;
}

const Recaptcha = ({ onChange }: Props) => {
  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
      onChange={onChange}
      className="recaptcha"
    />
  );
};

export default Recaptcha;
