import { useParams, Link } from "react-router-dom";
import './DetalhesProjeto.css'
import { ArrowLeftIcon} from "lucide-react";
import { useState } from "react";

const DetalhesProjeto = ({ projetos, }) => {
  const { id } = useParams();

  // encontra o projeto pelo id
  const projeto = projetos.find(p => p.id === Number(id));

  if (!projeto) {
    return <h2>Projeto não encontrado.</h2>;
  }

  const [issues, setIssues] = useState([
    {
      id: 1,
      nome: "Criar nova homepage",
      descricao: "Desenvolver a nova pagina inicial com design moderno",
      tags: ["design"],
      status: true,
      atualizadoHa: 10
    },
    {
      id: 2,
      nome: "Otimizar Imagens",
      descricao: "Comprimir e otimizar todas as imagens do site",
      tags: ["performance"],
      status: false,
      atualizadoHa: 10
    }
  ])

  return (
    <div>
      <Link to="/">
        <button className="btn-voltar-detalhes"><ArrowLeftIcon/> Voltar para Projetos</button>
      </Link>
      <header className="header-descricao">
        <h1>{projeto.nome}</h1>

        <button className="criar-issue-detalhes">
            <i>+</i> Criar Issue
        </button>
        
      </header>
      <p>{projeto.descricao}</p>

      <ul>
        {issues.map((issue) =>{
          return(
            <li key={issue.id}>
              <header>
                <h2>{issue.nome}</h2>
                <span className={issue.status && "status-ativo" || "status-inativo"}>{issue.status && "Em andamento" || !issue.status && "Aberta"}</span>
              </header>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default DetalhesProjeto;
