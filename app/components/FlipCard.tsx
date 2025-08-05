"use client";

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>{front}</div>
        <div>{back}</div>
      </ReactCardFlip>
    </div>
  );
};

export default FlipCard;
