import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import Home from '../sections/Home';
import AboutMe from '../sections/AboutMe';
import Skills from '../sections/Skills';

describe('App', () => {
    it('should render the component', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find(App)).toBeTruthy();
    });

    it('should render the Home section', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find(Home)).toBeTruthy();
    });

    it('should render the AboutMe section', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find(AboutMe)).toBeTruthy();
    });

    it('should render the Skills section', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find(Skills)).toBeTruthy();
    });
});
