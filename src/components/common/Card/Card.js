import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';

import styles from './Card.css';

const Card = ({ title, cta, ctaHref }) => (
    <a className={styles.cardLink} href={ctaHref} target="_blank" rel="noreferrer" data-qa="card-link">
        <button className={styles.card} type="button">
            <div>
                <div className={styles.cardTitle} data-qa="card-title">
                    {title}
                </div>
                <div className={styles.cardCta} data-qa="card-cta">
                    {cta}
                </div>
            </div>
            <div className={styles.cardChevron}>
                <FaChevronRight />
            </div>
        </button>
    </a>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
    ctaHref: PropTypes.string.isRequired,
};

export default Card;
