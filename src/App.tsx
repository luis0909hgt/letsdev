import Titulo from "./componentes/Titulo";

function MeuSite() {
  const disparaAlert = (label: string) => {
    alert(label);
  }

  function MeuBotao(props: any) {
    const { label } = props;

    return <button onClick={() => disparaAlert(label)}>{label}</button>
  }

  return (
    <div>
      <Titulo titulo ="Home"/>
      <MeuBotao label="Botao 1"/>
      <MeuBotao label="Botao 2"/>
    </div>
  );
}

export default MeuSite;
