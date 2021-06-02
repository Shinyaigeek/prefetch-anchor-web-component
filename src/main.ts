(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const entry = entries[entries.length - 1];
          const href = entry.target.getAttribute("href");
          if (!!href) {
            prefetch(href);
          }
          observer.unobserve(entry.target);
        }
      }
    },
    { root: null, rootMargin: "0px", threshold: 0 }
  );

  const isInViewPort: (el: HTMLElement) => boolean = function (el) {
    const bounding = el.getBoundingClientRect();
    return (
      bounding.x >= 0 &&
      bounding.y >= 0 &&
      bounding.x <= window.innerWidth &&
      bounding.y <= window.innerHeight
    );
  };

  const prefetch: (href: string) => void = function (href) {
    const prefetchLink = document.createElement("link");
    prefetchLink.rel = "prefetch";
    prefetchLink.as = "document";
    prefetchLink.href = href;
    document.head.appendChild(prefetchLink);
  };

  class PrefetchAnchor extends HTMLAnchorElement {
    constructor() {
      super();
    }

    connectedCallback() {
      if (isInViewPort(this)) {
        const href = this.getAttribute("href");
        if (!!href) {
          prefetch(href);
        }
      } else {
        observer.observe(this);
      }
    }

    disconnectedCallback() {
      observer.unobserve(this);
    }
  }

  customElements.define("prefetch-anchor", PrefetchAnchor, {
    extends: "a",
  });
})();
