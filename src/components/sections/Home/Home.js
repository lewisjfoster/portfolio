import React from 'react';
import { Link } from 'react-scroll';

import Container from '../../common/Container';
import styles from './Home.css';
import { home as lang } from '../../../libs/lang';
import { home as config } from '../../../libs/config';
import { SCROLL_TARGET } from '../../../libs/constants';

const Home = () => {
    const { name, jobRole } = lang;
    const { links, chevron } = config;

    return (
        <Container background={Container.backgrounds.BGONE} isFullHeight>
            <div className={styles.home}>
                <div className={styles.name} data-id="home-name">
                    {name}
                </div>
                <div className={styles.jobRole} data-id="home-job-role">
                    {jobRole}
                </div>
                <div className={styles.links}>
                    {links.map((link) => {
                        const { Icon, href } = link;

                        return (
                            <a key={href} href={href} target="_blank" rel="noreferrer" data-qa="home-link">
                                <Icon />
                            </a>
                        );
                    })}
                </div>
                <div className={styles.scroll} data-id="home-scroll">
                    <Link to={SCROLL_TARGET} spy smooth duration={500}>
                        <chevron.Icon />
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default Home;
