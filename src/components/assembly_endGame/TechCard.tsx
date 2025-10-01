import { useEffect, useRef } from "react";
import type { LanguageData } from "../../data/languagesData";
import gsap from "gsap";

interface TechCardProps {
  languageData: LanguageData;
  isDead: boolean;
}

const TechCard = ({ languageData, isDead }: TechCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        duration: 0.6,
        rotationY: isDead ? 180 : 0,
        ease: "power2.inOut",
      });
    }
  }, [isDead]);

  return (
    <div className="w-28 h-6 perspective-[1000px]">
      <div className="relative w-full h-full preserve-3d" ref={cardRef}>
        {/* Front side (language name) */}
        <div
          className="absolute w-full h-full flex items-center justify-center font-semibold 
          font-roboto backface-hidden"
          style={{
            backgroundColor: languageData.backgroundColor,
            color: languageData.color,
          }}
        >
          {languageData.name}
        </div>
        {/* Back side (skull) */}
        <div className="absolute w-full h-full flex items-center justify-center bg-gray-800 text-white text-xl backface-hidden rotate-y-180">
          <img src="skull.svg" alt="skull" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default TechCard;
