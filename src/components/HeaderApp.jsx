import Dialog from "./Dialog";

const HeaderApp = ({onShowModal}) => {
  return (
     <header className="headerApp">
        <h1>Projetos</h1>
        <button onClick={() => onShowModal()}><i>+</i> Criar Projeto</button>
        <Dialog onShowModal={onShowModal}/>
      </header>
  )
}

export default HeaderApp;