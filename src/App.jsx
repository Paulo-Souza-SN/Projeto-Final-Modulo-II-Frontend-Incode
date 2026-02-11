import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HeaderApp from "./components/HeaderApp.jsx";
import ListaDeProjetos from "./components/ListaDeProjetos.jsx";
import Dialog from "./components/Dialog.jsx";
import DetalhesProjeto from "./components/DetalhesProjeto.jsx";
import './App.css'

const App = () => {
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      nome: "Website redesign",
      descricao: "Renovação completa do website corporativo",
      tags: ["design", "frontend"],
      status: true,
      issues: 2,
      abertas: 2,
      bloqueadas: 0,
    },
    {
      id: 2,
      nome: "API REST v2",
      descricao: "Nova versão da API REST com melhor performance",
      tags: ["backend", "api"],
      status: true,
      issues: 1,
      abertas: 1,
      bloqueadas: 1,
    },
  ]);

  // controla se o dialog está aberto
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // estado para o novo projeto
  const [novoProjeto, setNovoProjeto] = useState({
    nome: "",
    descricao: "",
    tags: "",
    status: "ativo"
  });

  function onShowModal() {
    setIsDialogOpen(true);
  }

  function closeDialog() {
    setIsDialogOpen(false);
  }

  function handleChange(e) {

    
    setNovoProjeto({
      ...novoProjeto,
      [e.target.name]: e.target.value
    });
  }

  function createProject(e) {
    e.preventDefault();

    const novo = {
      id: projetos.length + 1,
      nome: novoProjeto.nome,
      descricao: novoProjeto.descricao,
      tags: novoProjeto.tags.split(',').map(t => t.trim()),
      status: novoProjeto.status === "ativo",
      issues: 0,
      abertas: 0,
      bloqueadas: 0
    };

    setProjetos([...projetos, novo]);
    setIsDialogOpen(false);

    // limpa os campos
    setNovoProjeto({
      nome: "",
      descricao: "",
      tags: "",
      status: "ativo"
    });
  }

 return (
    <>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderApp onShowModal={onShowModal}/>
              <ListaDeProjetos projetos={projetos} />
            </>
        }
        />

        <Route
          path="/projeto/:id"
          element={<DetalhesProjeto projetos={projetos} />}
        />
      </Routes>

      <Dialog
        isOpen={isDialogOpen}
        closeDialog={closeDialog}
        novoProjeto={novoProjeto}
        handleChange={handleChange}
        createProject={createProject}
      />
    </>
  );
};

export default App;