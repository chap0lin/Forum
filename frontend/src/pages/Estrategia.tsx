
    import styled from "@emotion/styled";
    import Header from "../components/Header";
    import Footer from "../components/Footer";

    // ======= CONTAINERS GERAIS ======= //
    const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    font-family: "Inter", sans-serif;
    background-color: #f0f2f5; ;
    `;

    const Content = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    background-color: #3b91cf;
    `;

    const LeftSection = styled.div`
    flex: 1;
    color: white;
    padding-right: 2rem;

    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        line-height: 1.3;
        margin-bottom: 1rem;
        max-width: 480px;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        opacity: 0.95;
        margin-bottom: 2rem;
        max-width: 450px;
    }
    `;

    const ActionButton = styled.button`
    background-color: white;
    border: none;
    color: #3b91cf;
    padding: 0.9rem 2rem;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
        background-color: #009739;
        color: white;
    }
    `;

    const RightSection = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

    const Card = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    padding: 2rem;
    width: 80%;
    max-width: 420px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    text-align: left;
    `;

    const CardTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #333;
    `;

    const CardText = styled.p`
    font-size: 0.95rem;
    color: #555;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    `;

    const Highlight = styled.span`
    color: #009739;
    font-weight: bold;
    `;

    const ContinueButton = styled.button`
    width: 100%;
    background-color: #3b91cf;
    color: white;
    font-weight: bold;
    padding: 0.8rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #2f7fb7;
    }
    `;

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
