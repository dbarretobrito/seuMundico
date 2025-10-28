import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../context/useCart";
import {
  ProductContainer,
  ProductImage,
  BreadcrumbContainer,
  ErrorMessage,
  SizeSelector,
  SizeButton,
  ConfirmationMessage,
  ThumbnailsContainer,
  Thumbnail,
  ModalOverlay,
  ModalContent,
  ModalImage,
  BuyButton,
  CloseButton,
} from "./styles";
import ReactSlick from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRulerHorizontal } from "@fortawesome/free-solid-svg-icons";
import { products } from "../../data/products";

export function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [error, setError] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMeasuresModalOpen, setIsMeasuresModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (id) {
      const fetchedProduct = products.find((p) => p.id === Number(id));
      setProduct(fetchedProduct || null);
    }
  }, [id]);

  if (!product) return <div>✷</div>;

  const images = [
    product.front_image,
    product.back_image,
    product.detail_image,
    product.detail2_image,
  ].filter(Boolean); // remove null/undefined

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("O campo Tamanho é obrigatório.");
      return;
    }

    addToCart({
      id: product.id || 0,
      name: product.name,
      image: product.front_image,
      description: product.description || "Sem descrição",
      price: product.price || 0,
      size: selectedSize,
      quantity: 1,
    });

    setError(null);
    setConfirmationMessage(true);

    setTimeout(() => {
      setConfirmationMessage(false);
      navigate("/cart");
    }, 1500);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setError(null);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  const handleOpenMeasuresModal = () => setIsMeasuresModalOpen(true);
  const closeMeasuresModal = () => setIsMeasuresModalOpen(false);

  return (
    <div>
      <BreadcrumbContainer>
        <Link to="/">Home</Link> <span> / {product.name}</span>
      </BreadcrumbContainer>

      {confirmationMessage && (
        <ConfirmationMessage>
          Produto adicionado ao carrinho!
        </ConfirmationMessage>
      )}

      <ProductContainer>
        <ThumbnailsContainer>
          {images.slice(1).map((imgSrc, index) => (
            <Thumbnail
              key={index}
              src={imgSrc}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(index + 1)}
            />
          ))}
        </ThumbnailsContainer>

        <ProductImage src={product.front_image} alt={product.name} />

        <div className="product-info">
          <h2>{product.name}</h2>
          <p>R$ {product.price}</p>

          <SizeSelector>
            <label>Selecione o Tamanho:</label>
            <div>
              {["P", "M", "G", "GG", "3G"].map((size) => (
                <SizeButton
                  key={size}
                  $isSelected={selectedSize === size}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </SizeButton>
              ))}
            </div>
            <span
              onClick={handleOpenMeasuresModal}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon
                icon={faRulerHorizontal}
                style={{ marginRight: "4px", fontSize: "14px" }}
              />
              Ver Medidas
            </span>
          </SizeSelector>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <BuyButton $isSelected={false} onClick={handleAddToCart}>
            COMPRAR
          </BuyButton>
        </div>
      </ProductContainer>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ReactSlick initialSlide={currentImageIndex}>
              {images.map((imgSrc, index) => (
                <div key={index}>
                  <ModalImage src={imgSrc} alt={`Imagem ${index + 1}`} />
                </div>
              ))}
            </ReactSlick>
          </ModalContent>
        </ModalOverlay>
      )}

      {isMeasuresModalOpen && (
        <ModalOverlay
          onClick={closeMeasuresModal}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          }}
        >
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://res.cloudinary.com/dt31tve3m/image/upload/v1730916196/medidasseumundicorecords_djyiln.jpg"
              alt="Guia de Medidas"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                display: "block",
              }}
            />
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
}
