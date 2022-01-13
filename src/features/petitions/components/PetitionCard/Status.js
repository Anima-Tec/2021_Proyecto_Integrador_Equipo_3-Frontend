import PropTypes from 'prop-types';

import styles from './PetitionCard.module.scss';

const Status = ({ status }) => (
  <span className={styles[status.toLowerCase()]}>{status}</span>
);

Status.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Status;