import Header from "../components/Header";
import Footer from "../components/Footer";
import {
    PageContainer,
    Content,
    LeftSection,
    ActionButton,
    RightSection,
    Card,
    CardTitle,
    CardText,
    Highlight,
    ContinueButton,
} from "./Estrategia.style";

export default function Estrategia() {
    return (
        <PageContainer>
            <Header />

            <Content>
                <LeftSection>
                    <h1>Conheça nossa Estratégia</h1>
                    <p>
                        Acreditamos que mudanças reais começam com pessoas engajadas e bem
                        informadas. Nossa estratégia une tecnologia, colaboração e impacto
                        social.
                    </p>
                    <ActionButton>Saiba mais</ActionButton>
                </LeftSection>

                <RightSection>
                    <Card>
                        <CardTitle>Como funciona</CardTitle>
                        <CardText>
                            Você pode participar de diversas ações e campanhas voltadas à
                            transformação social. Cada passo que você dá, ajuda a construir um{" "}
                            <Highlight>Brasil mais justo e consciente</Highlight>.
                        </CardText>

                        <ContinueButton>Continuar</ContinueButton>
                    </Card>
                </RightSection>
            </Content>

            <Footer />
        </PageContainer>
    );
}
