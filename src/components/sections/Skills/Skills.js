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
                const { id: typeId, skillsOrder } = type;

                return (
                    <div key={typeId} data-qa="skills-section">
                        <div className={styles.skillTitle} data-qa="skills-title">
                            {lang[typeId]}
                        </div>
                        <div className={styles.skills}>
                            {skillsOrder.map((skill) => {
                                const { id: skillId, Icon } = skill;

                                return (
                                    <div key={skillId} className={styles.skill} data-qa="skill">
                                        <img src={Icon} alt={skillId} />
                                        {lang[skillId]}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </Container>
    );
};

export default Skills;
