import React from 'react';
import { mount } from 'enzyme';

import Container from './Container';
import styles from './Container.css';

describe('Container', () => {
    it('should render the component', () => {
        const wrapper = mount(<Container background={Container.backgrounds.BGONE}>Test</Container>);

        expect(wrapper.find(Container)).toBeTruthy();
    });

    it('should render the component with the correct props', () => {
        const testProps = {
            id: 'test',
            background: Container.backgrounds.BGONE,
            isFullHeight: true,
            children: <div>test</div>,
        };

        const wrapper = mount(<Container {...testProps} />);

        const props = wrapper.find(Container).props();

        expect(props.id).toBe(testProps.id);
        expect(props.background).toBe(testProps.background);
        expect(props.isFullHeight).toBe(testProps.isFullHeight);
        expect(props.children).toBe(testProps.children);
    });

    it('should render the component full height', () => {
        const wrapper = mount(
            <Container background={Container.backgrounds.BGONE} isFullHeight>
                Test
            </Container>,
        );

        expect(wrapper.find(Container).render().hasClass(styles.isFullHeight)).toBeTruthy();
    });

    it.each(Object.values(Container.backgrounds))('should render with the correct backgrounds %s', (background) => {
        const wrapper = mount(<Container background={background}>Test</Container>);

        expect(wrapper.find(Container).render().hasClass(styles[background])).toBeTruthy();
    });
});
