import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import { Card } from "../../components/Card";
import {
  SearchContainer,
  SearchInput,
  ResultsGrid,
  BreadcrumbContainer,
} from "./styles";

export function SearchPage() {
  const [query, setQuery] = useState("");

  // Filtra produtos de acordo com o nome ou tags
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.tags?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <BreadcrumbContainer>
        <Link to="/">Home</Link> <span> / Buscar</span>
      </BreadcrumbContainer>

      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Digite o nome ou artista..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <ResultsGrid>
          {query ? (
            filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
              <p>Nenhum resultado encontrado.</p>
            )
          ) : (
            <p>Digite algo para iniciar a busca.</p>
          )}
        </ResultsGrid>
      </SearchContainer>
    </div>
  );
}
