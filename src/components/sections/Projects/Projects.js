import React from 'react';

import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';
import Card from '../../common/Card';

import styles from './Projects.css';
import { projects as lang } from '../../../libs/lang';
import { projects as config } from '../../../libs/config';

const Projects = () => {
    const { title } = lang;

    return (
        <Container background={Container.backgrounds.BGFOUR}>
            <SectionTitle title={title} />
            <div className={styles.projectCards}>
                {config.map((project) => {
                    const { id, ctaHref } = project;
                    const { projectTitle, cta } = lang[id];

                    return <Card key={id} title={projectTitle} cta={cta} ctaHref={ctaHref} />;
                })}
            </div>
        </Container>
    );
};

export default Projects;
