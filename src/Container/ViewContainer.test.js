import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ViewContainer from './ViewContainer';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('Does ViewContainer Component Render', () => {

    let container = shallow(<Provider store={store}><ViewContainer />)</Provider>);

    it('ViewContainer has header <h3>', () => {
        expect(container.find('Connect(ViewContainer)')).toHaveLength(1);
    });
});