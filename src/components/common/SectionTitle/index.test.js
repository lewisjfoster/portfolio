import React from 'react';
import { mount } from 'enzyme';

import SectionTitle from './SectionTitle';

describe('SectionTitle', () => {
    it('should render the component', () => {
        const wrapper = mount(<SectionTitle title="test" />);

        expect(wrapper.find(SectionTitle).exists()).toBeTruthy();
    });

    it('should render with the correct props', () => {
        const testProps = { title: 'test' };
        const wrapper = mount(<SectionTitle {...testProps} />);

        expect(wrapper.find(SectionTitle).props().title).toBe(testProps.title);
    });

    it('should render with the correct title', () => {
        const testProps = { title: 'test' };
        const wrapper = mount(<SectionTitle {...testProps} />);

        expect(wrapper.find(SectionTitle).text()).toBe(testProps.title);
    });
});
