import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Container.css';

const backgrounds = {
    BGONE: 'bgOne',
    BGTWO: 'bgTwo',
    BGTHREE: 'bgThree',
    BGFOUR: 'bgFour',
};

const Container = ({ id, background, isFullHeight, children }) => (
    <section id={id} className={cx(styles.container, styles[background], { [styles.isFullHeight]: isFullHeight })}>
        {children}
    </section>
);

Container.backgrounds = backgrounds;

Container.propTypes = {
    id: PropTypes.string,
    background: PropTypes.oneOf(Object.values(backgrounds)).isRequired,
    children: PropTypes.node.isRequired,
    isFullHeight: PropTypes.bool,
};

Container.defaultProps = {
    id: undefined,
    isFullHeight: false,
};

export default Container;
