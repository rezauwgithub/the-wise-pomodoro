import React from 'react'
import { shallow } from 'enzyme'

import Dashboard from './Dashboard'

describe('Dashboard', () => {
  let wrapper

  const start = jest.fn()
  const stop = jest.fn()
  const changeParameter = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Dashboard
      work = { 25 }
      shortRest = { 5 }
      longRest = { 15 }
      iterations = { 4 }
      running= { false }
      start = { start }
      stop = { stop }
      changeParameter = { changeParameter }
    />)
  })

  test("enables form and start when `running` is false", () => {
    wrapper.setProps({
      running: false
    })

    expect(wrapper.find("[name='work']").prop('disabled')).toBe(false)
    expect(wrapper.find("[value='Start']").prop('disabled')).toBe(false)
  })

  test("disables stop button when `running` is false", () => {
    wrapper.setProps({
      running: false
    })

    expect(wrapper.find("button").prop('disabled')).toBe(true)
  })

  test("disables the form and start  when `running` is true", () => {
    wrapper.setProps({
      running: true
    })

    expect(wrapper.find("[name='work']").prop('disabled')).toBe(true)
    expect(wrapper.find("[value='Start']").prop('disabled')).toBe(true)
  })

  test("enables stop button when `running` is true", () => {
    wrapper.setProps({
      running: true
    })

    expect(wrapper.find("button").prop('disabled')).toBe(false)
  })

  test("calls start function when form is submitted", () => {
    wrapper.find('form').simulate('submit')

    expect(start).toBeCalled()
  })

  test("calls stop function when stop button is clicked", () => {
    wrapper.find('button').simulate('click')

    expect(stop).toBeCalled()
  })

  test("calls changeParameter function when a field is modifier", () => {
    wrapper.find("[name='work']").simulate('change')

    expect(changeParameter).toBeCalled()
  })
})
