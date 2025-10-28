import { useState } from 'react';
import { useCart } from '../../context/useCart'; // Usando o hook JS
import {
    CartContainer,
    CartContent,
    CartHeader,
    CartItemContainer,
    ProductImage,
    ProductName,
    ProductSize,
    QuantityInput,
    ProductPrice,
    RemoveButton,
    TotalAmount,
    AddMoreButton,
    FinishButton,
    CepInput
} from './styles';
import { FaWhatsapp } from 'react-icons/fa';

// Função para gerar a mensagem do WhatsApp
const generateWhatsAppMessage = ({ cartItems, totalAmount, cep }) => {
    const itemDetails = cartItems.map(item =>
        `- ${item.quantity}x ${item.name} (Tamanho ${item.size})`
    ).join('\n');

    return `✷ Olá! Quero concluir minha compra:\n\n${itemDetails}\n\nTotal: R$ ${totalAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n\nMeu CEP é: ${cep}.`;
};

export function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, totalAmount } = useCart();
    const [cep, setCep] = useState('');

    const message = generateWhatsAppMessage({ cartItems, totalAmount, cep });
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5581999847081';

    const isDesktop = () => !/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

    const whatsappLink = isDesktop()
        ? `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
        : `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <CartContainer>
            <CartContent>
                <CartHeader>
                    <span>Imagem</span>
                    <span>Produto</span>
                    <span>Tamanho</span>
                    <span>Quantidade</span>
                    <span>Preço</span>
                    <span></span>
                </CartHeader>

                {cartItems.map(item => (
                    <CartItemContainer key={`${item.id}-${item.size}`}>
                        <ProductImage src={item.image} alt={item.name} />
                        <ProductName>{item.name}</ProductName>
                        <ProductSize>{item.size}</ProductSize>
                        <QuantityInput
                            type="number"
                            value={item.quantity}
                            onChange={e => updateQuantity(item.id, item.size, parseInt(e.target.value))}
                        />
                        <ProductPrice>
                            R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </ProductPrice>
                        <RemoveButton onClick={() => removeFromCart(item.id, item.size)}>X</RemoveButton>
                    </CartItemContainer>
                ))}
            </CartContent>

            {cartItems.length > 0 && (
                <TotalAmount>
                    <div className="amount-total">
                        <span>Total:</span>
                        <p>R$ {totalAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                    </div>
                </TotalAmount>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
                <CepInput
                    type="text"
                    placeholder="Digite seu CEP"
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                />
                <FinishButton>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        COMPRAR <FaWhatsapp size={20} />
                    </a>
                </FinishButton>
            </div>

            <AddMoreButton onClick={() => window.location.href = '/'}>
                ADICIONAR MAIS PRODUTOS
            </AddMoreButton>
        </CartContainer>
    );
}
