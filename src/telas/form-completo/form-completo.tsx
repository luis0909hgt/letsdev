import React, { FormEvent, useState, useEffect } from 'react';
import * as s from "./styled-form-completo";
import { Banner } from '../../imagens';
import Titulo from '../../componentes/Titulo';
import { Row, ColumnInput, Label, RowSelectors, InputButton, Footer  } from '../../componentes';

const FormCompleto: React.FC = () => {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [ocupacao, setOcupacao] = useState("");
    const [areaPreferencia, setAreaPreferencia] = useState("Front-end");
    const [curriculo, setCurriculo] = useState<any>();
    const [descricaoPerfil, setDescricaoPerfil] = useState("");
    const [receberEmail, setReceberEmail] = useState(false);



function enviarFormulario(event: FormEvent) {
    event.preventDefault();

    const mensagem = `${nome}, tem ${idade} anos e atualmente é ${ocupacao}. Se ingressar no mundo do desenvolvimento, tem preferência por atuar como ${areaPreferencia}.

        Em sua descrição de perfil consta: "${descricaoPerfil}".

        Deseja receber e-mail: ${receberEmail ? "Sim" : "Não"}
        Currículo: ${curriculo ? curriculo ?.name : "Não informado"}
        `;

    alert(mensagem);
    }

  const cancelar = (event: FormEvent) => {
    event.preventDefault();
    window.location.href = "/";
  };

    useEffect(() => {
        console.log('OK');
    }, []);

  return (
    <>
        <s.Image src={Banner} alt="Imagem Let's DEv" />
        <s.Container id="container">
            <Titulo titulo='Formulário 2ª Edição' />
            <s.H2>
             Seja bem-vindo(a) ao primeiro desafio da sua jornada de aprendizado!
            </s.H2>
            <s.Instrucao>
                Preencha corretamente os campos abaixo para ingressar nessa SUPER JORNADA com o time Paipe!
            </s.Instrucao>
    
            <s.Divisor />
            <s.Formulario onSubmit={enviarFormulario}>
                <s.Aviso> 
                    <strong>ATENÇÃO:</strong> os campos contendo o asterisco(*) são de preenchiento obrigatório!
                    </s.Aviso>
                
                    <Row>
                        <ColumnInput className= "input-text">
                            <Label>Nome completo: *</Label>
                            <input
                                type="text"
                                name="nome"
                                placeholder="Digite seu nome aqui"
                                required 
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                />
                        </ColumnInput>
    
                        <ColumnInput>
                            <Label>Idade:</Label>
                            <input
                                type="number"
                                name="idade"
                                placeholder="Digite sua idade"
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                            />
                        </ColumnInput>
                    </Row>
    
                    <Row>
                        <ColumnInput className="select">
                            <Label>Ocupação:</Label>
                            <select 
                                name="ocupacao"
                                value={ocupacao}
                                onChange={(e) => setOcupacao(e.target.value)}
                            >
                                <option>Selecione sua ocupação</option>
                                <option>Estudante</option>
                                <option>Empregado CLT</option>
                                <option>Empregado PJ</option>
                                <option>Autônomo</option>
                                <option>Outros</option>
                            </select>
                        </ColumnInput>
    
                        <ColumnInput>
                            <Label>Área de preferência:</Label>
                            <Row style={{gap: '25px'}}>
                                <RowSelectors>
                                    <input 
                                        id="front-end" 
                                        name="area-preferencia" 
                                        type="radio" 
                                        value="Front-end"
                                        checked={areaPreferencia == "Front-end"}
                                        onChange={(e) => setAreaPreferencia(e.target.value)}
                                        /> 
                                    <Label htmlFor="front-end">Front-End</Label>
                                    <input 
                                        id="back-end" 
                                        name="area-preferencia" 
                                        type="radio" 
                                        value="Back-end"
                                        checked={areaPreferencia == "Back-end"}
                                        onChange={(e) => setAreaPreferencia(e.target.value)}
                                    /> 
                                    <Label htmlFor="back-end">Back-End</Label>
                                    <input 
                                        id="full-stack" 
                                        name="area-preferencia" 
                                        type="radio" 
                                        value="Full-stack"
                                        checked={areaPreferencia == "Full-stack"}
                                        onChange={(e) => setAreaPreferencia(e.target.value)}
                                    /> 
                                    <Label htmlFor="full-stack">Full-Stack</Label>
                                </RowSelectors>
                            </Row>
                        </ColumnInput>
                    </Row>
                <ColumnInput>
                    <Label>Anexar currículo:</Label>
                    <InputButton 
                        type="file" 
                        name="curriculo"
                        onChange={(e) => setCurriculo(e.target?.files[0])}
                    />
                </ColumnInput>
    
                <ColumnInput style={{marginBottom: '50px'}}>
                    <Label>Descrição do perfil do candidato:</Label>
                    <textarea
                        name="descricao-perfil"
                        placeholder="Nos fale um pouco sobre o seu perfil pessoal e profissional"
                        value={descricaoPerfil}
                        onChange={(e) => setDescricaoPerfil(e.target.value)}
                        >
                    </textarea>
                </ColumnInput>
    
                <ColumnInput style={{marginBottom: '115px'}}>
                    <RowSelectors>
                        <input 
                            type="checkbox" 
                            id="receber-email" 
                            name="receber-email"
                            checked={receberEmail}
                            onChange={() => setReceberEmail(!receberEmail)}
                        />
                        <Label htmlFor="receber-email">Deseja receber notificações sobre vagas por e-mail.</Label>
                    </RowSelectors>
                </ColumnInput>
                <Row style={{justifyContent: 'space-between'}}>
                    <InputButton type="button" onClick={cancelar} value="Cancelar" outlined/>
                    <InputButton type="submit" value="Enviar" />
                </Row>
            </s.Formulario>
        </s.Container>
        <Footer/>
    </>
  );
}

export default FormCompleto;