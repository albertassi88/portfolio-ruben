import React, { useEffect, useState } from 'react';
import TodoContext from './TodoContext';
import ApiProjects from '../services/ApiProjects';

function TodoProvider({ children }) {
  const [apiCardProject, setApiCardProject] = useState([]);

  useEffect(() => {
    ApiProjects().then(response => {
      setApiCardProject(response.projects);
    }).catch(() => {
      alert("Ocorreu um erro ao buscar os items");
    });
  }, []);

  const context = {
    setApiCardProject,
    apiCardProject,
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