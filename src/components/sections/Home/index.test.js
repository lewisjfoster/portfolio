import React from 'react';
import { mount } from 'enzyme';

import Home from '.';

import { home as lang } from '../../../libs/lang';
import { home as config } from '../../../libs/config';

const { name, jobRole } = lang;
const { links, chevron } = config;

describe('Home', () => {
    it('should render the component', () => {
        const wrapper = mount(<Home />);

        expect(wrapper.find(Home).exists()).toBeTruthy();
    });

    it('should render the correct name', () => {
        const wrapper = mount(<Home />);

        expect(wrapper.find('[data-id="home-name"]').text()).toBe(name);
    });

    it('should render the correct job role', () => {
        const wrapper = mount(<Home />);

        expect(wrapper.find('[data-id="home-job-role"]').text()).toBe(jobRole);
    });

    it('should render the correct links', () => {
        const wrapper = mount(<Home />);

        const homeLinks = wrapper.find('[data-qa="home-link"]');
        expect(homeLinks.length).toBe(links.length);

        homeLinks.forEach((link, index) => {
            const { href, Icon } = links[index];

            expect(link.props().href).toBe(href);
            expect(link.contains(<Icon />)).toBeTruthy();
        });
    });

    it('should render the correct scroll button', () => {
        const wrapper = mount(<Home />);

        const { Icon } = chevron;

        expect(wrapper.find('[data-id="home-scroll"]').contains(<Icon />)).toBeTruthy();
    });
});
