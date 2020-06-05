import React from 'react';
import { mount } from 'enzyme';

import Projects from '.';
import SectionTitle from '../../common/SectionTitle';
import Card from '../../common/Card';

import { projects as lang } from '../../../libs/lang';
import { projects as config } from '../../../libs/config';

const { title } = lang;

describe('Projects', () => {
    it('should render the component', () => {
        const wrapper = mount(<Projects />);

        expect(wrapper.find(Projects).exists()).toBeTruthy();
    });

    it('should render the correct title', () => {
        const wrapper = mount(<Projects />);

        expect(wrapper.find(SectionTitle).text()).toBe(title);
    });

    it('should render the project cards', () => {
        const wrapper = mount(<Projects />);

        const cards = wrapper.find(Card);
        expect(cards.length).toBe(config.length);

        cards.forEach((card, index) => {
            const { id, ctaHref } = config[index];
            const { projectTitle, cta } = lang[id];

            expect(card.find('[data-qa="card-link"]').props().href).toBe(ctaHref);
            expect(card.find('[data-qa="card-title"]').text()).toBe(projectTitle);
            expect(card.find('[data-qa="card-cta"]').text()).toBe(cta);
        });
    });
});
