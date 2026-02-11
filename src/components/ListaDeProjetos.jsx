import { Link } from "react-router-dom";
import { EyeIcon, PenIcon } from "lucide-react";

const ListaDeProjetos = ({ projetos }) => {
  return (
    <ul>
      {projetos.map((projeto) => (
        <li key={projeto.id}>
          <section>
            <h2>{projeto.nome}</h2>
            <p>{projeto.descricao}</p>

            <p>
              <span>
                <i className='issues'>{projeto.issues}</i> Issues 
              </span>
              <span>
                <i className='abertas'>{projeto.abertas}</i> Abertas
              </span>
              <span>
                <i className='bloqueadas'>{projeto.bloqueadas}</i> Bloqueadas
              </span>
            </p>
          </section>

          <section className="opcoes">
            <button className="pen"><PenIcon /></button>

            <Link to={`/projeto/${projeto.id}`}>
              <button className="ver-mais">
                <EyeIcon /> Ver Issues
              </button>
            </Link>
          </section>
        </li>

      ))}
    </ul>
  );
};

export default ListaDeProjetos;
