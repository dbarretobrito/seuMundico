import { useState } from 'react';
import { CardContainer, CardImage, CardContent } from './styles';

export function Card({ image, name, price }) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Garante que o preço é um número antes de formatar
  const formattedPrice = !isNaN(price)
    ? parseFloat(price).toFixed(2)
    : '0.00';

  return (
    <CardContainer>
      <CardImage
        src={image}
        alt={`Imagem de ${name}`}
        loading="lazy"
        className={isLoaded ? 'loaded' : 'loading'}
        onLoad={() => setIsLoaded(true)}
      />
      <CardContent>
        <h3>{name}</h3>
        <p>R$ {formattedPrice}</p>
      </CardContent>
    </CardContainer>
  );
}
