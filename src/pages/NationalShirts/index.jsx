import { BreadcrumbContainer, MainContainer, ProductGrid } from "./styles";
import { Card } from "../../components/Card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";

export function NationalShirts() {
  const [nationalProducts, setNationalProducts] = useState([]);

  useEffect(() => {
    // Filtra produtos com "Nacional" nas tags
    const filtered = products.filter((product) =>
      product.tags?.toLowerCase().includes("nacional")
    );
    setNationalProducts(filtered);
  }, []);

  return (
    <div>
      <BreadcrumbContainer>
        <Link to="/">Home</Link> <span> / Camisas Nacionais</span>
      </BreadcrumbContainer>

      <MainContainer>
        <h2>Camisas Nacionais</h2>

        <ProductGrid>
          {nationalProducts.length > 0 ? (
            nationalProducts.map((product) => (
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
            <div>Não há camisas nacionais disponíveis.</div>
          )}
        </ProductGrid>
      </MainContainer>
    </div>
  );
}
