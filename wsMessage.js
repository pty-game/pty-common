export const wsGenerateMessage = (type, payload) => {
  return JSON.stringify({ type, payload });
};

export const wsParseMessage = (message) => {
  return JSON.parse(message);
};
