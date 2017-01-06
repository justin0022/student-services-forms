import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import StringInput from './StringInput';

chai.use(sinonChai);

describe('<StringInput />', () => {
    it('should be an input element', () => {
        const props = {
            name: 'testString',
            placeHolder: 'randomString',
            
        }
    })
});