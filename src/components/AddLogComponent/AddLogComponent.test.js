import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddLogComponent from './AddLogComponent';

configure({ adapter: new Adapter() });

describe('Does AddLogComponent Component Render', () => {

    let container = shallow(<AddLogComponent />);

    it('AddLogComponent has Modal', () => {
        expect(container.find('Bootstrap(Modal)')).toHaveLength(1);
    });
    it('AddLogComponent has Form', () => {
        expect(container.find('Form')).toHaveLength(1);
    });
});