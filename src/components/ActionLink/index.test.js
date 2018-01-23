import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount, render } from 'enzyme'
import { ActionLink } from '../ActionLink'

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
