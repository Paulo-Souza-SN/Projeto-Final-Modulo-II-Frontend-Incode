import { useEffect, useRef } from "react";

const Dialog = ({
  isOpen = false,
  closeDialog = () => {},
  createProject = () => {},
  novoProjeto = {},
  handleChange = () => {}
}) => {

  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} style={{ padding: "20px", borderRadius: "8px" }}>
      <header>
        <h2>Crie um projeto</h2>
      </header>

      <form onSubmit={createProject}>
        <label>Nome do Projeto</label>
        <input
          type="text"
          name="nome"
          value={novoProjeto.nome || ""}
          onChange={handleChange}
          placeholder="Nome do projeto"
        />

        <label>Descrição</label>
        <textarea
          name="descricao"
          value={novoProjeto.descricao || ""}
          onChange={handleChange}
          placeholder="Descreva o projeto"
        />

        <label>Tags</label>
        <input
          type="text"
          name="tags"
          value={novoProjeto.tags || ""}
          onChange={handleChange}
          placeholder="design, frontend, api"
        />

        <label>Status</label>
        <select
          name="status"
          value={novoProjeto.status || "ativo"}
          onChange={handleChange}
        >
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </select>

        <footer>
          <button type="button" onClick={closeDialog}>Cancelar</button>
          <button type="submit">Criar Projeto</button>
        </footer>
      </form>
    </dialog>
  );
};

export default Dialog;