import ContactForm from "../components/ContactForm";
import { Body, Container, Title, Card, WhatsAppFloat } from "./Contact.style";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";

export default function Contact() {
  return (
    <Body>
      <Header />
      <Container>
        <Title>Fale Conosco</Title>

        <Card>
          <ContactForm />

          <WhatsAppFloat
            href="https://wa.me/5561991124457"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappLogo size={32} weight="fill" color="#fff" />
          </WhatsAppFloat>

        </Card>
      </Container>
      <Footer />
    </Body>
  );
}
