import { ContactContainer } from "./styles";

export function ContactPage() {
  return (
    <ContactContainer>
      <h2>Contato</h2>

      <div className="links">
        <a
          href="https://wa.me/5581999847081"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>

        <a
          href="https://instagram.com/seumundicorecords"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </ContactContainer>
  );
}
