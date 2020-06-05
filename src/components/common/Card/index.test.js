import React from 'react';
import { mount } from 'enzyme';

import Card from './Card';

const testProps = {
    title: 'Test Title',
    cta: 'Test Cta',
    ctaHref: 'Test Href',
};

describe('Card', () => {
    it('should render the component', () => {
        const wrapper = mount(<Card {...testProps} />);

        expect(wrapper.find(Card).exists()).toBeTruthy();
    });

    it('should render the component with the correct props', () => {
        const wrapper = mount(<Card {...testProps} />);

        const props = wrapper.find(Card).props();

        expect(props.title).toBe(testProps.title);
        expect(props.cta).toBe(testProps.cta);
        expect(props.ctaHref).toBe(testProps.ctaHref);
    });

    it('should render the component with the correct text and link', () => {
        const wrapper = mount(<Card {...testProps} />);

        expect(wrapper.find('[data-qa="card-link"]').props().href).toBe(testProps.ctaHref);
        expect(wrapper.find('[data-qa="card-title"]').text()).toBe(testProps.title);
        expect(wrapper.find('[data-qa="card-cta"]').text()).toBe(testProps.cta);

        expect(wrapper.find('svg').exists()).toBeTruthy();
    });
});
