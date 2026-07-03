import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos]         = useState({ x: -100, y: -100 });
  const [outline, setOutline] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });

    let outlineX = -100, outlineY = -100;
    const animateOutline = () => {
      outlineX += (pos.x - outlineX) * 0.12;
      outlineY += (pos.y - outlineY) * 0.12;
      setOutline({ x: outlineX, y: outlineY });
      requestAnimationFrame(animateOutline);
    };

    const handleMouseEnter = (e) => {
      if (e.target.closest('a, button, [data-cursor]')) setHovered(true);
    };
    const handleMouseLeave = () => setHovered(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover',  handleMouseEnter);
    document.addEventListener('mouseout',   handleMouseLeave);
    const id = requestAnimationFrame(animateOutline);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover',  handleMouseEnter);
      document.removeEventListener('mouseout',   handleMouseLeave);
      cancelAnimationFrame(id);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos.x, pos.y]);

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`cursor-outline ${hovered ? 'hovered' : ''}`}
        style={{ left: outline.x, top: outline.y }}
      />
    </>
  );
}
