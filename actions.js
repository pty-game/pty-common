const estimatorAction = (gameUserId) => {
  return {
    instrument: 'estimate',
    gameUserId,
  }
};

const playerAction = (file) => {
  return {
    instrument: 'dance',
    file,
  }
};

module.exports = {
  estimatorAction,
  playerAction,
}
