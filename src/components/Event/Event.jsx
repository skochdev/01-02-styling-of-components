import { formatEventStartDate, formatDuration } from 'functions/index';
import { iconSizes } from 'constants/index';
import css from './Event.module.css';
import PropTypes from 'prop-types';
import { ImLocation } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

export const Event = ({
  name,
  location,
  speaker,
  startDate,
  endDate,
  type,
}) => {
  const formattedStartDate = formatEventStartDate(startDate);
  const formattedDuration = formatDuration(startDate, endDate);
  return (
    <>
      <div className={css.event}>
        <h2 className={css.title}>{name}</h2>
        <p className={css.info}>
          <ImLocation className={css.icon} size={iconSizes.md} />
          {location}
        </p>
        <p className={css.info}>
          <CgProfile className={css.icon} size={iconSizes.md} />
          {speaker}
        </p>
        <p className={css.info}>
          <FaCalendarAlt className={css.icon} size={iconSizes.md} />
          {formattedStartDate}
        </p>
        <p className={css.info}>
          <FaClock className={css.icon} size={iconSizes.md} />
          Duration: {formattedDuration}
        </p>
        <span className={`${css.chip} ${css[type]}`}>{type}</span>
      </div>
    </>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
