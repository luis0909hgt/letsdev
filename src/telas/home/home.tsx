import * as s from "./styled-home";
import {
  Footer,
  Header,
  TituloSecao,
  Card,
  InputButton,
} from "../../componentes";
import { EuPaiper, Logo } from "../../imagens";
import { useContext } from "react";
import { MyContext } from "../../context";

const Home = () => {

  const { setNomeUsuario, nomeUsuario } = useContext(MyContext);

  const telas = [
    {
      titulo: "Formulário em HTML e CSS",
      link: "/form-basico",
      descricao: (
        <p>
          O primeiro <i>“Hello World”</i> a gente nunca esquece. O primeiro
          formulário feito na aula de Introdução ao HTML e CSS.
        </p>
      ),
    },
    {
      titulo: "Formulário 2.0",
      link: "/form-completo",
      descricao: (
        <p>
          O primeiro <i>“console.log”</i> a gente também não esquece. O
          formulário funcional e agora com React JS + HTML + CSS.
        </p>
      ),
    },
    {
      titulo: "Consumindo API's",
      link: "/consumindo-apis",
      descricao:
        "Brincando com a API viaCEP, informando um CEP, salvando os valores digitados no estado e mostrando os dados na tela.",
    },
    {
      titulo: "A PAIPE e os Paipers",
      link: "/sobre-paipers",
      descricao:
        "Uma página bônus de presente para deixar o seu projeto ainda mais completo. E de quebra ficar por dentro do que acontece na Paipe.",
    },
  ];

  return (
    <s.Container>
      <Header />
      <s.Banner>
        <h1>Que prazer te ver aqui, {nomeUsuario}!</h1>
        <img src={Logo} />
        <h2>
          Seja bem-vindo(a) ao Let’s Dev! O evento que vai transformar sua
          carreira.
        </h2>
        <p>
          Você está no módulo Front-end e vai aprender a criar um site básico do
          zero.
        </p>
      </s.Banner>
      <s.Content>
        <TituloSecao titulo="O que fizemos até agora..." />

        <s.GroupCards>
          {telas.map((card) => (
            <Card
            key={card.titulo}
              titulo={card.titulo}
              link={card.link}
              descricao={card.descricao}
            />
          ))}
        </s.GroupCards>

        <TituloSecao titulo="Um pouco sobre mim..." />

        <s.Row>
          <s.Banner>
          <img src={EuPaiper} />
          </s.Banner>
          <s.Column>
            <h3>Aqui vai o nome do(a) Dev</h3>
            <p>
              Este espaço é destinado à sua descrição de perfil. Conta aqui quem
              você é, gostos, hobbies e o que achar interessante. Descreve
              também as características profissionais e o que te motivou a
              ingressar na área do desenvolviemento de software.
            </p>
            <p>
              Você pode substituir a foto a lado pela sua melhor foto e colocar
              suas redes nos botões abaixo!
            </p>
            <s.ButtonGroup>
              <InputButton
                outlined
                type="button"
                value="LinkedIn"
                onClick={() => {
                  //Aqui vai o seu perfil do linkedIn
                  window.open("https://www.linkedin.com/in/lu%C3%ADs-henrique-garafini-teixeira-a3a289201/", "_blank");
                }}
                title="Vai para o perfil no Linkedin"
              />
              <InputButton
                type="submit"
                value="Ver perfil"
                onClick={() => {
                  //Aqui vai o seu perfil do GitHub
                  window.open("https://github.com/luis0909hgt", "_blank");
                }}
                title="Vai para o perfil no GitHub"
              />
            </s.ButtonGroup>
          </s.Column>
        </s.Row>
      </s.Content>
      <Footer />
    </s.Container>
  );
};

export default Home;
