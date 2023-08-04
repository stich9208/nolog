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

export default Svg;
