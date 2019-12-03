import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TaskInfoComponent from './TaskInfoComponent';

configure({ adapter: new Adapter() });

describe('Does TaskComponent Component Render', () => {

    let container = shallow(<TaskInfoComponent />);

    it('TaskComponent has header <h3>', () => {
        expect(container.find('h3')).toHaveLength(1);
    });
    it('TaskComponent has paragraph <p>', () => {
        expect(container.find('p')).toHaveLength(1);
    });
    it('TaskComponent has Image', () => {
        expect(container.find('Image')).toHaveLength(1);
    });
});