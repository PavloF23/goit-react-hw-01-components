import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export function TransactionHistory ({ transactions }) {
return (

        <table className={css.transactionTable}>
  <thead>
    <tr>
      <th className={css.heading}>Type</th>
      <th className={css.heading}>Amount</th>
      <th className={css.heading}>Currency</th>
    </tr>
  </thead>

  <tbody>
  {transactions.map(transaction => (
    <tr className={css.tableRow} key={transaction.id}>
      <td className={css.data}>{transaction.type}</td>
      <td className={css.data}>{transaction.amount}</td>
      <td className={css.data}>{transaction.currency}</td>
    </tr>
       ))}
  </tbody>
  </table>   
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
    ),
}