export function TransactionItem({ id, type, amount, currency }) {
  return (
    <tr>
      <th key={id}>{type}</th>
      <th>{amount}</th>
      <th>{currency}</th>
    </tr>
  );
}
