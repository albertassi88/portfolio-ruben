import React, { useEffect, useState } from 'react';
import TodoContext from './TodoContext';
import ApiProjects from '../services/ApiProjects';

function TodoProvider({ children }) {
  const [apiCardProject, setApiCardProject] = useState([]);
  const [loading, setLoading] = useState('Carregando');

  useEffect(() => {
    ApiProjects().then(response => {
      setApiCardProject(response.projects);
      setLoading('');
    }).catch(() => {
      alert("Ocorreu um erro ao buscar os items");
    });
  }, []);

  const context = {
    setApiCardProject,
    apiCardProject,
    loading,
  };

  return (
    <div>
      <TodoContext.Provider value={ context }>
        {children}
      </TodoContext.Provider>
    </div>
  );
}

export default TodoProvider;