exports.handler = async (event) => {
  console.log("Evento recebido:", event);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Execução concluída com sucesso!", input: event })
  };
};
