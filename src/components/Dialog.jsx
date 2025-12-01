const Dialog = () => {

  return (
     <dialog>
        <header>
          <h2>Crie um projeto</h2>
        </header>

        <form>
          <label>Nome do Projeto</label>
          <input type="text" name="nomeProjeto" placeholder='Digite o nome do projeto' />
          <br />

          <label>Descrição</label>
          <textarea name="descricaoProjeto" placeholder='Descreva o projeto' ></textarea>
          <br />

          <label>Tags (separadas por vírgulas)</label>
          <input type="text" name='tags' placeholder='design, frontend, api' />
          <br />

          <label>Status</label>
          <select name="statusProjeto">
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>

          <footer>
            <button onClick={() => closeDialog()}>Cancelar</button>
            <button type="submit" onClick={() => createProject()}>Criar Projeto</button>
          </footer>
        </form>

      </dialog>
  )
}

export default Dialog;