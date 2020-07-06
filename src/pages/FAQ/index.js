import React from 'react'
import { Container, Content, Accordion} from "native-base";

export default function FAQ() {
    
    // Array com as informações
    const dataArray = [
    { title: "Home", content: "Página de boas vindas" },
    { title: "Diário", content: "Usado para anotações do dia a dia e de emoções vividas" },
    { title: "Meditação", content: "Vídeos para aprender a meditar e orientação para ansiedade" },
    { title: "Chat", content: "Tirar dúvidas sobre horários e funcionamento" },
    { title: "Mapa", content: "Pesquisar clínicas e locais para consultas e ajuda" },
    { title: "Explicação", content: "O que foi usado em termos técnicos no desenvolvimento do app" },
    { title: "Arquitetura", content: "Organização do projeto" },
    { title: "Sobre", content: "Informações sobre o desenvolvedor do app" }
    ];


    return (
        <Container>
          
            {/* Botoes com efeito de esconder */}
            <Content padder>
                <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
            </Content>

        </Container>
    )
}