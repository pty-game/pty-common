const wsGenerateMessage = (type, payload) => {
  return JSON.stringify({ type, payload });
};

const wsParseMessage = (message) => {
  return JSON.parse(message);
};

module.exports = {
  wsGenerateMessage,
  wsParseMessage
}
