import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';
import { Title } from 'components/Statistics/Title';
import { Item } from 'components/Statistics/Item';

export function Statistics({ events }) {
  return (
    <div className={css.statistics}>
      <Title text="Upload stats" />
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
};
