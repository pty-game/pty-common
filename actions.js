const estimatorAction = (gameUserId) => {
  return {
    instrument: 'estimate',
    gameUserId,
  }
};

module.exports = {
  estimatorAction
}
