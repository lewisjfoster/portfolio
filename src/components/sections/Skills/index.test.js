import React from 'react';
import { mount } from 'enzyme';

import Skills from '.';
import SectionTitle from '../../common/SectionTitle';

import { skills as lang } from '../../../libs/lang';
import { skills as config } from '../../../libs/config';

const { title } = lang;

describe('Skills', () => {
    it('should render the component', () => {
        const wrapper = mount(<Skills />);

        expect(wrapper.find(Skills).exists()).toBeTruthy();
    });

    it('should render the correct title', () => {
        const wrapper = mount(<Skills />);

        expect(wrapper.find(SectionTitle).text()).toBe(title);
    });

    it('should render the skills sections', () => {
        const wrapper = mount(<Skills />);

        const skillsSection = wrapper.find('[data-qa="skills-section"]');
        expect(skillsSection.length).toBe(config.length);

        skillsSection.forEach((type, typeIndex) => {
            const { id: typeId, skillsOrder } = config[typeIndex];

            expect(type.find('[data-qa="skills-title"]').text()).toBe(lang[typeId]);

            const skills = type.find('[data-qa="skill"]');
            expect(skills.length).toBe(skillsOrder.length);

            skills.forEach((skill, skillIndex) => {
                const { id: skillId } = skillsOrder[skillIndex];

                expect(skill.text()).toBe(lang[skillId]);

                const img = skill.find('img');
                expect(img.props().alt).toBe(skillId);
            });
        });
    });
});
