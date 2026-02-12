import ContactForm from "../components/ContactForm";
import { Body, Container, Title, Card } from "./Contact.style";

export default function Contact() {
  return (
    <Body>
      <Container>
        <Title>Fale Conosco</Title>

        <Card>
          <ContactForm />
        </Card>
      </Container>
    </Body>
  );
}
