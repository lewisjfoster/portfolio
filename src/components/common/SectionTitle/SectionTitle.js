import React from 'react';
import PropTypes from 'prop-types';

import styles from './SectionTitle.css';

const SectionTitle = ({ title }) => <div className={styles.title}>{title}</div>;

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SectionTitle;
