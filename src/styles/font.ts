import localFont from "@next/font/local";
const DEFAUT_FONT = localFont({
  variable: "--DEFAUT_FONT",
  src: [
    {
      path: "../../public/font/SCDream1.otf",
      weight: "100",
    },
    {
      path: "../../public/font/SCDream2.otf",
      weight: "200",
    },
    {
      path: "../../public/font/SCDream3.otf",
      weight: "300",
    },
    {
      path: "../../public/font/SCDream4.otf",
      weight: "400",
    },
    {
      path: "../../public/font/SCDream5.otf",
      weight: "500",
    },
    {
      path: "../../public/font/SCDream6.otf",
      weight: "600",
    },
    {
      path: "../../public/font/SCDream7.otf",
      weight: "700",
    },
    {
      path: "../../public/font/SCDream8.otf",
      weight: "800",
    },
    {
      path: "../../public/font/SCDream9.otf",
      weight: "900",
    },
  ],
});

export { DEFAUT_FONT };
