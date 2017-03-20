const wsGenerateMessage = (type, payload, token) => {
  const message = { type, payload };

  if (token) {
    message.token = token;
  }

  return JSON.stringify(message);
};

const wsParseMessage = (message) => {
  return JSON.parse(message);
};

module.exports = {
  wsGenerateMessage,
  wsParseMessage
}
