import css from './MainTitle.module.css';
import PropTypes from 'prop-types';

export const MainTitle = ({ text }) => {
  return <h1 className={css.title}>{text}</h1>;
};

MainTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
