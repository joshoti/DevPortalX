import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollToElementOptions: ScrollIntoViewOptions = {
  behavior: "smooth",
  block: "center",
};

export const scrollToElement = (elementId: string, scrollBehavior=scrollToElementOptions) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView(scrollBehavior);
};

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}