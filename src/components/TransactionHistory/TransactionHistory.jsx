import css from './TransactionHistory.module.css'
import clsx from "clsx";

export default function TransactionHistory({ item }) {
    return <table className={css.table}>
  <thead>
    <tr>
      <th className={css.title}>Type</th>
      <th className={css.title}>Amount</th>
      <th className={css.title}>Currency</th>
    </tr>
  </thead>

        <tbody>
            {item.map((transaction, index) => (
                <tr className={clsx(index%2 !== 0 && css.grey)} key={transaction.id}>
                    <td className={css.text}>{transaction.type}</td>
                    <td className={css.text}>{transaction.amount}</td>
                    <td className={css.text}>{transaction.currency}</td>
                </tr>))}
  </tbody>
</table>
}