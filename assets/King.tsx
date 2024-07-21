import { PlayerColor } from "@/store/types";

export function King({ color }: { color: PlayerColor }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 130 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M65.9702 22.8529L80.9389 49.5587L80.9389 49.5588C83.3438 53.8493 89.2899 54.7152 92.7754 51.0268L123 19.0423L123 93L7 93L7.00002 16.989L39.165 51.0268C42.6503 54.7151 48.5965 53.8495 51.0015 49.5587L65.9702 22.8529Z"
        fill={color == "red" ? "#FF2727" : "#FDBF1C"}
        stroke="#1F1F1F"
        strokeWidth="14"
      />
    </svg>
  );
}
