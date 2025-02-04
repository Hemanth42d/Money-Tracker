const ShowTransactions = ({ transaction }) => {
  return (
    <div className="transactions">
      <div className="transaction">
        <div className="left">
          <div className="transactionName">{transaction.name}</div>
          <div className="description">{transaction.description}</div>
        </div>
        <div className="right">
          <div className="price">${transaction.price}</div>
          <div className="date">{transaction.dateTime}</div>
        </div>
      </div>
    </div>
  );
};

export default ShowTransactions;
