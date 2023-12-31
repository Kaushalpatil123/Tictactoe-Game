const StatusMessage = ({ winner, isXNext, squares }) => {
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          winner is
          <span
            className={winner === 'X' ? 'text-green' : 'text-orange'}
            style={{ margin: '10px' }}
          >
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          <span className="text-green">O</span> &
          <span className="text-orange">X</span> is tied
        </>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          Next Player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </>
      );
    }

    return null;
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
