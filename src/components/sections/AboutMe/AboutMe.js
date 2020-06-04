import React from 'react';

import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';

import styles from './AboutMe.css';
import { aboutMe as lang } from '../../../libs/lang';
import { SCROLL_TARGET, CLEARSCORE_HREF } from '../../../libs/constants';

const AboutMe = () => {
    const { title, description } = lang;

    return (
        <Container id={SCROLL_TARGET} background={Container.backgrounds.BGTWO}>
            <SectionTitle title={title} />
            {description.map((line) => (
                <div className={styles.line} data-qa="description-line" key={line.text}>
                    {line.text}
                    {line.cta ? (
                        <a href={CLEARSCORE_HREF} target="_blank" rel="noreferrer">
                            {line.cta}
                        </a>
                    ) : null}
                </div>
            ))}
        </Container>
    );
};

export default AboutMe;
