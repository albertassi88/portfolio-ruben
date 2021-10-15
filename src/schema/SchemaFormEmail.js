import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string("nome inválido!").required("nome obrigatório!"),
  email: yup.string("email inválido!").email("email inválido!").required("email obrigatório!"),
  message: yup.string("mensagem inválida!").required("mensagem obrigatória!"),
});

export default schema;