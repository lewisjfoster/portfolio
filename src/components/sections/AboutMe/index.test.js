import React from 'react';
import { mount } from 'enzyme';

import AboutMe from '.';
import SectionTitle from '../../common/SectionTitle';

import { aboutMe as lang } from '../../../libs/lang';
import { CLEARSCORE_HREF } from '../../../libs/constants';

const { title, description } = lang;

describe('AboutMe', () => {
    it('should render the component', () => {
        const wrapper = mount(<AboutMe />);

        expect(wrapper.find(AboutMe).exists()).toBeTruthy();
    });

    it('should render the correct title', () => {
        const wrapper = mount(<AboutMe />);

        expect(wrapper.find(SectionTitle).text()).toBe(title);
    });

    it('should render the correct description', () => {
        const wrapper = mount(<AboutMe />);

        const descriptionLines = wrapper.find('[data-qa="description-line"]');
        expect(descriptionLines.length).toBe(description.length);

        descriptionLines.forEach((line, index) => {
            const { text, cta } = description[index];
            expect(line.text()).toBe(text + (cta || ''));

            if (cta) {
                const lineCta = line.find('a');
                expect(lineCta.text()).toBe(cta);
                expect(lineCta.props().href).toBe(CLEARSCORE_HREF);
            }
        });
    });
});
