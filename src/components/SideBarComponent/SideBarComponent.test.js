import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SideBarComponent from './SideBarComponent';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('Does SideBarComponent Component Render', () => {

    let container = shallow(<Provider store={store}><SideBarComponent /></Provider>);

    it('SideBarComponent has Nav', () => {
        console.log('HELLO', container.debug())
        expect(container.find('Connect(SideBarComponent)')).toHaveLength(1);
    });
});