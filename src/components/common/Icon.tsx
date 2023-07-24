import React from "react";
import { PropsWithChildren, SVGProps } from "react";

interface ISvg extends SVGProps<SVGSVGElement> {
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  viewBox?: string;
}

const Svg = ({
  size,
  width,
  height,
  color,
  viewBox = "0 0 30 30",
  children,
  ...rest
}: PropsWithChildren<ISvg>) => {
  return (
    <svg
      width={width ?? size ?? 30}
      height={height ?? size ?? 30}
      viewBox={viewBox}
      fill={color ? color : "none"}
      {...rest}
    >
      {children}
    </svg>
  );
};

const PinIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      style={{ display: "inline-block" }}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <line x1="4" y1="20" x2="9.5" y2="14.5" />
      <path d="M6 11l7 7l1 -1l1 -4l4 -4m-4 -4l-4 4l-4 1l-1 1" />
      <line x1="14" y1="4" x2="20" y2="10" />
    </Svg>
  );
};

export { PinIcon };
