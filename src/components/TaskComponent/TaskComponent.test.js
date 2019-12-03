import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TaskComponent from './TaskComponent';

configure({ adapter: new Adapter() });

describe('Does TaskComponent Component Render', () => {

    let container = shallow(<TaskComponent />);

    it('TaskComponent has Card', () => {
        expect(container.find('Card')).toHaveLength(3);
    });
    it('TaskComponent has Accordion', () => {
        expect(container.find('AccordionCollapse')).toHaveLength(3);
    });
});