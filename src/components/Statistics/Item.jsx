// import PropTypes from 'prop-types';
import css from 'components/Statistics/Item.module.css';

export function Item({ id, label, percentage }) {
  return (
    <li className={css.item} key={id}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

// Item.propTypes = {
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };
