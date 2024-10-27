import React, { useEffect, useState } from 'react'

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: any) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    },[])
  return mousePosition
}
