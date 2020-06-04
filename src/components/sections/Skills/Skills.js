import React from 'react';

import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';

import styles from './Skills.css';
import { skills as lang } from '../../../libs/lang';
import { skills as config } from '../../../libs/config';

const Skills = () => {
    const { title } = lang;

    return (
        <Container background={Container.backgrounds.BGTHREE}>
            <SectionTitle title={title} />
            {config.map((type) => {
                const { id, skillsOrder } = type;

                return (
                    <div key={id} data-qa="skills-section">
                        <div className={styles.skillTitle} data-qa="skills-title">
                            {lang[id]}
                        </div>
                        <div className={styles.skills}>
                            {skillsOrder.map((skill) => (
                                <div key={skill} className={styles.skill} data-qa="skill">
                                    <img src={`../../libs/assets/${skill}.svg`} alt={skill} />
                                    {lang[skill]}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </Container>
    );
};

export default Skills;
