import React from 'react'
import renderer from 'react-test-renderer'
import sinon from 'sinon'
import { configure, shallow, mount, render } from 'enzyme'
import { ActionLink } from '../ActionLink'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<ActionLink />', () => {
    it('should render without crashing', () => {
        const component = renderer.create(<ActionLink />)

        expect(component.toJSON()).toMatchSnapshot()
    })

    it('should render empty component', () => {
        const component = renderer.create(<ActionLink />)

        expect(component.toJSON()).toMatchSnapshot()
    })

    it('should react to events', () => {
        const onButtonClick = sinon.spy()
        const wrapper = shallow(<ActionLink onButtonClick={onButtonClick} />)
        wrapper.find('button').simulate('click')
        expect(onButtonClick.calledOnce).to.equal(true)
    })
})
