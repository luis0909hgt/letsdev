import React, { FormEvent } from 'react';
import { Logo } from '../../imagens';

function enviarFormulario(event: FormEvent) {
    event.preventDefault();

//     const mensagem = `${nome}, tem ${idade} anos e atualmente é ${ocupacao}. Se ingressar no mundo do desenvolvimento, tem preferência por atuar como ${areaPreferencia}.

//         Em sua descrição de perfil consta: "${descricaoPerfil}".

//         Deseja receber e-mail: ${receberEmail ? "Sim" : "Não"}
//         Currículo: ${curriculo ? curriculo.files[0].name : "Não informado"}
//         `;

//     alert(mensagem);
    }

  const cancelar = (event: FormEvent) => {
    event.preventDefault();
    alert("Cancelando...");
  };

const FormCompleto: React.FC = () => {
  return (
        <div id="container">
            <h1>Formulário 2ª Edição</h1>
            <h2>
             Seja bem-vindo(a) ao primeiro desafio da sua jornada de aprendizado!
            </h2>
            <p id="instrucao">
                Preencha corretamente os campos abaixo para ingressar nessa SUPER JORNADA com o time Paipe!
            </p>
            <img src={Logo} alt="Imagem Let's DEv" />
    
            <hr />
            <form onSubmit={enviarFormulario}>
                <p id="aviso"> 
                    <strong>ATENÇÃO:</strong> os campos contendo o asterisco(*) são de preenchiento obrigatório!
                    </p>
                
                    <div className="row">
                        <div className="column-input input-text">
                            <label>Nome completo: *</label>
                            <input
                                type="text"
                                name="nome"
                                placeholder="Digite seu nome aqui"
                                required 
                            />
                        </div>
    
                        <div className="column-input">
                            <label>Idade:</label>
                            <input type="number" name="idade" placeholder="Digite sua idade"/>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="column-input select">
                            <label>Ocupação:</label>
                            <select name="ocupacao">
                                <option>Selecione sua ocupação</option>
                                <option>Estudante</option>
                                <option>Empregado CLT</option>
                                <option>Empregado PJ</option>
                                <option>Autônomo</option>
                                <option>Outros</option>
                            </select>
                        </div>
    
                        <div className="column-input">
                            <label>Área de preferência:</label>
                            <div className="row" style={{gap: '25px'}}>
                                <div className="row-selectors">
                                    <input id="front-end" name="area-preferencia" type="radio" value="front-end"/> 
                                    <label htmlFor="front-end">Front-End</label>
                                    <input id="back-end" name="area-preferencia" type="radio" value="Back-End"/> 
                                    <label htmlFor="back-end">Back-End</label>
                                    <input id="full-stack" name="area-preferencia" type="radio" value="Full-Stack"/> 
                                    <label htmlFor="full-stack">Full-Stack</label>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="column-input">
                    <label id="curriculum">Anexar currículo:</label>
                    <input id="curriculum" type="file"/>
                </div>
    
                <div className="column-input" style={{marginBottom: '50px'}}>
                    <label id="description">Descrição do perfil do candidato:</label>
                    <textarea
                        name="descricao-perfil"
                        placeholder="Nos fale um pouco sobre o seu perfil pessoal e profissional"
                        >
                    </textarea>
                </div>
    
                <div className="column-input" style={{marginBottom: '115px'}}>
                    <div className="row-selectors">
                        <input type="checkbox" id="receber-email" name="receber-email"/>
                        <label htmlFor="receber-email">Deseja receber notificações sobre vagas por e-mail.</label>
                    </div>
                </div>
                <div className="row" style={{justifyContent: 'space-between'}}>
                    <button onClick={cancelar}>Cancelar</button>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
  );
}

export default FormCompleto;