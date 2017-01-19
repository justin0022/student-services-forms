import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import StringInput from './StringInput';
import {Field} from 'redux-form';

chai.use(sinonChai);

describe('<StringInput />', () => {
    it('should be an input element', () => {
        const name = 'Justin';
        const renderfield = {};
        const label = 'testLabel';
        const placeholder = 'testPlaceholder';
        const validate = {};
        const type = 'type';
    });

    const wrapper = shallow(<Field name={name} type='text' component={renderfield} />);
});