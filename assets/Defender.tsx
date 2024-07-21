import { PlayerColor } from "@/store/types";

export function Defender({ color }: { color: PlayerColor }) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 130 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.25 -1.69179e-07L113.75 -4.01745e-06L113.75 103.135C113.75 103.493 113.459 103.784 113.1 103.784L16.9 103.784C16.541 103.784 16.25 103.493 16.25 103.135L16.25 -1.69179e-07Z"
        fill={color == "red" ? "#FF2727" : "#FDBF1C"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M113.1 120C122.434 120 130 112.449 130 103.135L130 -2.59683e-06L113.75 -4.01745e-06L113.75 103.135C113.75 103.493 113.459 103.784 113.1 103.784L16.9 103.784C16.541 103.784 16.25 103.493 16.25 103.135L16.25 -1.69179e-07L7.62971e-06 -1.5898e-06L1.10111e-05 103.135C1.10128e-05 112.449 7.5664 120 16.9 120L113.1 120Z"
        fill="#1F1F1F"
      />
    </svg>
  );
}
