import { useEffect, useRef } from "react";

export default function ReviewsMarquee({
  items = [],
  speed = 45, // px/seg
  direction = "left", // "left" | "right"
  gap = 22,
  pauseOnHover = true,
  className = "",
  renderItem,
}) {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    // Accesibilidad: reduce motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let isPaused = false;
    let last = performance.now();
    let x = 0;

    // Aplicar gap por CSS variable
    track.style.setProperty("--marquee-gap", `${gap}px`);

    // Necesitamos el ancho de la primera mitad (porque duplicamos items 2 veces)
    const getHalfWidth = () => {
      const half = track.querySelector(".marquee__half");
      return half ? half.getBoundingClientRect().width : 0;
    };

    let halfWidth = getHalfWidth();

    const onResize = () => {
      // Recalcula ancho (cuando cambie viewport / fuentes / etc)
      halfWidth = getHalfWidth();
      // normaliza x para evitar saltos
      if (halfWidth > 0) x = ((x % halfWidth) + halfWidth) % halfWidth;
    };

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!isPaused && halfWidth > 0) {
        const dir = direction === "left" ? 1 : -1;
        x += dir * speed * dt;

        // wrap perfecto
        x = ((x % halfWidth) + halfWidth) % halfWidth;

        track.style.transform = `translate3d(${-x}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    window.addEventListener("resize", onResize);

    // Pausa al hover (si quieres)
    const onEnter = () => pauseOnHover && (isPaused = true);
    const onLeave = () => pauseOnHover && (isPaused = false);

    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);

    // Recalc inicial (por si fonts tardan)
    const t = setTimeout(onResize, 150);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
      wrap.removeEventListener("mouseenter", onEnter);
      wrap.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed, direction, gap, pauseOnHover, items]);

  return (
    <div ref={wrapRef} className={`marquee ${className}`}>
      <div className="marquee__track" ref={trackRef}>
        {/* primera mitad */}
        <div className="marquee__half">
          {items.map((it, idx) => (
            <div className="marquee__item" key={`a-${idx}`}>
              {renderItem ? renderItem(it) : null}
            </div>
          ))}
        </div>

        {/* segunda mitad (duplicado) */}
        <div className="marquee__half" aria-hidden="true">
          {items.map((it, idx) => (
            <div className="marquee__item" key={`b-${idx}`}>
              {renderItem ? renderItem(it) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
