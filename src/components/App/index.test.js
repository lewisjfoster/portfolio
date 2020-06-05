import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import Home from '../sections/Home';
import AboutMe from '../sections/AboutMe';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';

describe('App', () => {
    it('should render the component', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find(App).exists()).toBeTruthy();
    });

    it('should render the Home section', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find(Home).exists()).toBeTruthy();
    });

    it('should render the AboutMe section', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find(AboutMe).exists()).toBeTruthy();
    });

    it('should render the Skills section', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find(Skills).exists()).toBeTruthy();
    });

    it('should render the Projects section', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find(Projects).exists()).toBeTruthy();
    });
});
