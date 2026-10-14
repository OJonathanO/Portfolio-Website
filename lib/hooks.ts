import { useActiveSectionContext } from "@/contexts/active-session-context";
import { SectionName } from "./types";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function useSectionInView(
  sectionName: SectionName,
  threshold = 0.75,
) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);

  return { ref };
}
