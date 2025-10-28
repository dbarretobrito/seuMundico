import { BreadcrumbContainer, MainContainer, ProductGrid } from "./styles";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";

export function InternationalShirts() {
  const [internationalProducts, setInternationalProducts] = useState([]);

  useEffect(() => {
    // Filtra produtos com "Internacional" nas tags (case insensitive)
    const filtered = products.filter((product) =>
      product.tags?.toLowerCase().includes("internacional")
    );
    setInternationalProducts(filtered);
  }, []);

  return (
    <div>
      <BreadcrumbContainer>
        <Link to="/">Home</Link> <span> / Camisas Internacionais</span>
      </BreadcrumbContainer>

      <MainContainer>
        <h2>Camisas Internacionais</h2>

        <ProductGrid>
          {internationalProducts.length > 0 ? (
            internationalProducts.map((product) => (
              <div key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <Card
                    image={product.front_image || ""}
                    name={product.name}
                    price={product.price}
                  />
                </Link>
              </div>
            ))
          ) : (
            <div>Não há camisas internacionais disponíveis.</div>
          )}
        </ProductGrid>
      </MainContainer>
    </div>
  );
}
