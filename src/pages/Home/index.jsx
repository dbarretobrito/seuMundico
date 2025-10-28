import { Link } from 'react-router-dom';
import { MainContainer, ProductGrid } from './styles';
import { Card } from '../../components/Card';
import { ProductCarousel } from '../../components/ProductCarousel';
import { products } from '../../data/products'; // versão JS

export function Home() {
  return (
    <MainContainer>
      <ProductCarousel />

      <ProductGrid>
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <Card
                image={product.front_image}
                name={product.name}
                price={product.price}
              />
            </Link>
          </div>
        ))}
      </ProductGrid>
    </MainContainer>
  );
}
