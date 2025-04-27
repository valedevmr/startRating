import React, { useEffect, useState } from "react";
import { StartProps } from "../types/StarProps";
import { Star } from "@mui/icons-material";

export const StartComponent = ({ props }: StartProps) => {
  const [selectedStars, setSelectedStars] = useState<number>(0);
  const [hoveredStars, setHoveredStars] = useState<number | null>(null);

  const handleClick = (starValue: number) => {
    setSelectedStars(starValue);
    // Aquí podrías agregar una función para guardar la calificación
    // Ej: props.onRatingChange(starValue);
  };

  return (
    <div style={{ display: "flex" }}>
      {Array.from({ length: props.total }).map((_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={index}
            sx={{
              color:
                hoveredStars !== null
                  ? starValue <= hoveredStars
                    ? "#f9e307" // Solo pinta hasta el hover actual
                    : "white" // El resto (incluida selección) se oculta
                  : starValue <= selectedStars
                  ? "#f9e307" // Al salir: muestra selección permanente
                  : "white",
              stroke: "#e0bb00",
              fontSize: "2em",
              transition: "color 0.2s",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onMouseEnter={() => setHoveredStars(starValue)}
            onMouseLeave={() => setHoveredStars(null)}
            onClick={() => setSelectedStars(starValue)}
          />
        );
      })}
    </div>
  );
};

// export deStartComponent;
