import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DetailComponent from './DetailComponent';

configure({ adapter: new Adapter() });

describe('Does DetailComponent Component Render', () => {

    let container = shallow(<DetailComponent />);

    it('DetailComponent has Image', () => {
        expect(container.find('Image')).toHaveLength(1);
    });
    it('DetailComponent has Button', () => {
        expect(container.find('Button')).toHaveLength(2);
    });
});