import { useState } from "react";
import * as s from "./styled-consumindo-apis";
import { ColumnInput, Footer, Header, InputButton } from "../../componentes";
import axios from "axios";

interface Localidade {
  localidade?: string,
  uf?: string
}

const ConsumindoApis = () => {
  const [CEP, setCEP] = useState("");
  const [localidade, setLocalidade] = useState<Localidade>({});

  function pesquisarCep(cep: string) {
    const baseUrl = "https://viacep.com.br/ws";

    axios
      .get(`${baseUrl}/${cep}/json`)
      .then((resposta) => setLocalidade(resposta.data))
      .catch((erro) => console.log("Erro", erro));
  }

  return (
    <s.Container>
      <Header />
      <s.Content>
        <h1>Consumindo API's</h1>
        <h2>Que tal sair da teoria e meter a mão no código?</h2>
        <p id="desc">
          Agora é sua vez de consumir uma API e mostrar os dados em tela.
        </p>

        <hr />

        <s.Objetivo>
          <strong>Objetivo:</strong> Fazer a conexão com a API do Via CEP usando
          o Axios.
        </s.Objetivo>

        <h3>Instruções:</h3>

        <ul>
          <li>Criar a função que faz a requisição;</li>
          <li>Utilizar a seguinte baseURL: “https://viacep.com.br/ws/”;</li>
          <li>
            No GET, utilizar o caminho `cep/json` (ex.: `93700000/json`), onde o
            CEP vai só com números;
          </li>
          <li>Salvar no estado o valor digitado no input;</li>
          <li>Quando clicar no botão, chama a requisição no onClick;</li>
          <li>
            Mostrar em tela o nome da cidade, seguido do estado (ex.: Campo Bom
            - Rio Grande do Sul);
          </li>
          <li>
            Na dúvida, sempre acesse a documentação:{" "}
            <a href="https://viacep.com.br/" target="_blank">
              https://viacep.com.br/
            </a>
          </li>
        </ul>

        <hr />

        <s.Row>
          <ColumnInput style={{ width: "40%", margin: 0 }}>
            <label>CEP:</label>
            <input
              type="text"
              placeholder="Digite o um CEP (somente números)"
              value={CEP}
              onChange={(evento) => setCEP(evento.target.value)}
              maxLength={8}
            />
          </ColumnInput>
          <InputButton 
            type="submit" 
            value="Buscar"
            onClick={() => pesquisarCep(CEP)} 
          />
        </s.Row>

        <span>
          <strong>Cidade pesquisada: </strong> {localidade.localidade} -
           {localidade.uf}
        </span>
      </s.Content>
      <Footer />
    </s.Container>
  );
};

export default ConsumindoApis;
