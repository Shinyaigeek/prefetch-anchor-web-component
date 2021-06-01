const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const entry = entries[entries.length - 1];
        const prefetchLink = document.createElement("link");
        prefetchLink.rel = "prefetch";
        prefetchLink.as = "document";
        prefetchLink.href = entry.target.getAttribute("href") ?? "";
        document.head.appendChild(prefetchLink);
        observer.unobserve(entry.target);
      }
    }
  },
  { root: null, rootMargin: "0px", threshold: 0 }
);

class PrefetchAnchor extends HTMLAnchorElement {
  constructor() {
    super();
  }

  connectedCallback() {
    observer.observe(this);
  }

  disconnectedCallback() {
    observer.unobserve(this);
  }
}

customElements.define("prefetch-anchor", PrefetchAnchor, {
  extends: "a",
});
