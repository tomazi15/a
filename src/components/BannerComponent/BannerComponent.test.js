import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BannerComponent from './BannerComponent';

configure({ adapter: new Adapter() });

describe('Does BannerComponent Component Render', () => {

    let container = shallow(<BannerComponent />);

    it('BannerComponent has a image', () => {
        console.log(container.debug())
        expect(container.find('Image')).toHaveLength(1);
    });
});