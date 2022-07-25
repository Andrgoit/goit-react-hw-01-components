import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

export function Title({ text }) {
  return <h2 className={css.title}>{text}</h2>;
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
