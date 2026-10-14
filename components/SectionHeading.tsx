import { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 text-center text-2xl font-black capitalize sm:text-3xl">
      {children}
    </h2>
  );
}
