import { useState } from 'react';
import HeaderApp from './components/HeaderApp.jsx';
import ListaDeProjetos from './components/ListaDeProjetos.jsx';
import "./App.css";
import { EyeClosed, X } from 'lucide-react';
import Dialog from './components/Dialog.jsx';

const App = () => {
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      nome: 'Website redesign',
      descricao: 'Renovação completa do website corporativo',
      tags: ['design', 'frontend'],
      status: true,
      issues: 2,
      abertas: 2,
      bloqueadas: 0    
    },
    {
      id: 2,
      nome: 'API REST v2',
      descricao: 'Nova versão da API REST com melhor performance',
      tags: ['backend', 'api'],
      status: true,
      issues: 1,
      abertas: 1,
      bloqueadas: 1
    }
  ]);

  function onShowModal() {
    const dialog = document.querySelector('dialog');
    dialog.showModal();
  }

  function closeDialog() {
    const dialog = document.querySelector('dialog');
    dialog.close();
  }
  
  function createProject() {
    const dialog = document.querySelector('dialog');
    const nome = dialog.querySelector('input[name="nomeProjeto"]').value;
    const descricao = dialog.querySelector('textarea[name="descricaoProjeto"]').value;
    const tags = dialog.querySelector('input[name="tags"]').value.split(',').map(tag => tag.trim());
    const status = dialog.querySelector('select[name="statusProjeto"]').value === 'ativo';

    const newProject = {
      id: projetos.length + 1,
      nome,
      descricao,
      tags: [''],
      status: true,
      issues: 0,
      abertas: 0,
      bloqueadas: 0
    };
    setProjetos([...projetos, newProject]);
    console.log(setProjetos)
    dialog.close();
  }
  console.log(projetos);
  return (
    <>
      <HeaderApp onShowModal={onShowModal}/>
      <ListaDeProjetos  projetos={projetos}/>
      <Dialog 
      onShowModal={onShowModal} 
      closeDialog={closeDialog} 
      createProject={createProject}
      />
    </>
  );
}

export default App;