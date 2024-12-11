// HexagonGrid.tsx
import React, { useEffect, useState } from "react";

interface HexagonProps {
  size: number;
}

const Hexagon: React.FC<HexagonProps> = ({ size }) => {
  const width = size * Math.sqrt(3);
  const height = size * 2;

  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xOffset = (e.clientX - window.innerWidth / 2) / 10;
      setOffset({
        x: xOffset,
        y: 0,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `translateX(${offset.x}px)`,
        transition: "transform 0.3s ease-out",
      }}
      className="relative"
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="relative z-10"
      >
        <polygon
          points={`
            ${width / 2},0 
            ${width},${height / 4} 
            ${width},${(height * 3) / 4} 
            ${width / 2},${height} 
            0,${(height * 3) / 4} 
            0,${height / 4}
          `}
          fill="transparent"
          stroke="#ff9902"
          strokeWidth="1"
          className="transition-all duration-300 opacity-20 hover:opacity-100 hover:stroke-[3px] cursor-pointer"
        />
      </svg>
    </div>
  );
};

const HexagonGrid: React.FC<{ columnCount: number; size: number }> = ({
  columnCount,
  size,
}) => {
  const width = size * Math.sqrt(3);
  const height = size * 2;

  return (
    <div
      className="absolute top-1/2 left-1/2 w-[250%] -translate-x-1/2 -translate-y-1/2 -rotate-12"
      style={{ pointerEvents: "all" }}
    >
      {[0, 1, 2].map((rowIndex) => (
        <div
          key={rowIndex}
          className="flex relative"
          style={{
            marginLeft: rowIndex % 2 ? `${width / 2}px` : "0",
            marginTop: rowIndex ? `-${height / 4}px` : "0",
          }}
        >
          {Array.from({ length: columnCount }).map((_, colIndex) => (
            <Hexagon key={`${rowIndex}-${colIndex}`} size={size} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default HexagonGrid;
