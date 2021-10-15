import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TodoContext from "./TodoContext";
import ApiProjects from "../services/ApiProjects";

function TodoProvider({ children }) {
  const [apiCardProject, setApiCardProject] = useState([]);
  const [loading, setLoading] = useState("Carregando");

  useEffect(() => {
    ApiProjects().then(response => {
      setApiCardProject(response.projects);
      setLoading("");
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

TodoProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default TodoProvider;