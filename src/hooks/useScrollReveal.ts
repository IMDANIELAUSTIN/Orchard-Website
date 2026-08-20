import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

/**
 * Native IntersectionObserver hook to trigger smooth Apple-style fade-up animations
 * on elements with the `.reveal` class as they scroll into the viewport.
 * Automatically re-scans whenever the route location changes or new DOM nodes mount.
 */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    function revealVisibleElements() {
      const elements = document.querySelectorAll(".reveal:not(.is-visible)");
      if (!("IntersectionObserver" in window)) {
        elements.forEach((el) => el.classList.add("is-visible"));
        return null;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.01,
          rootMargin: "100px 0px -10px 0px",
        }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already anywhere near the viewport or above it, reveal immediately
        if (rect.top < window.innerHeight + 100) {
          el.classList.add("is-visible");
        } else {
          observer.observe(el);
        }
      });

      return observer;
    }

    // Run immediately and after paint
    const observer = revealVisibleElements();
    const timer = setTimeout(revealVisibleElements, 50);
    const timer2 = setTimeout(revealVisibleElements, 200);

    // Watch for DOM mutations (new components mounting)
    const mutationObserver = new MutationObserver(() => {
      revealVisibleElements();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);
}
