// ImageLabel.tsx (ou .jsx)

import React from "react";

/**
 * Propriedades que o Recharts passa para o label
 * (em JavaScript puro, você pode omitir os tipos do TypeScript)
 */
interface ImageLabelProps {
  x?: number; // posição X do label
  y?: number; // posição Y do label
  width?: number; // largura da barra
  height?: number; // altura da barra
  value?: number; // valor do dataKey
  payload?: any; // dados do item (onde está avatar, name, etc.)
}

const Avatar: React.FC<ImageLabelProps> = ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  payload,
}) => {
  // Coordenadas para posicionar o label no meio (horizontal)
  const centerX = x + width / 2;
  // Um pouco acima do topo da barra:
  const topY = y - 35;
  // Ajuste conforme seu layout (mais/menos "y").

  return (
    // foreignObject permite renderizar HTML dentro de SVG
    <foreignObject
      x={centerX - 15} // desloca para centralizar
      y={topY - 15} // desloca para cima
      width={30}
      height={30}
      style={{ overflow: "visible" }}>
      <img
        src={payload?.avatar}
        alt='Avatar'
        width='30'
        height='30'
        style={{ borderRadius: "50%" }}
      />
    </foreignObject>
  );
};

export default Avatar;
