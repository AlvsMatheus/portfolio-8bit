import { useState } from 'react';

export default function FlipCard({
  frontContent,
  backContent,
  width = 'w-30',
  height = 'h-90',
  className = ''
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card perspective me-10 cursor-pointer hover:w-60 hover:transition hover:duration-500 hover:ease-in ${width} ${height} ${className}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-gray-200 rounded-xl shadow-md flex items-center justify-center">
          {frontContent}
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-600 text-white rounded-xl shadow-md flex items-center justify-center">
          {backContent}
        </div>
      </div>
    </div>
  );
}
