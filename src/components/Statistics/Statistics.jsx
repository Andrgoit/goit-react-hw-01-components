import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

import { Item } from 'components/Statistics/Item';

export function Statistics({ title, events }) {
  return (
    <div className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {events.map(({ id, label, percentage }) => {
          return <Item key={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
