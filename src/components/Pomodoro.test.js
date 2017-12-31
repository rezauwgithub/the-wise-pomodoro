import React from 'react'
import { shallow } from 'enzyme'
import Pomodoro from './Pomodoro'
import TimerContainer from './TimerContainer'
import DashboardContainer from './DashboardContainer'

describe('Pomodoro', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Pomodoro />)
  })

  test("renders TimerContainer", () => {
    expect(wrapper.contains(
      <TimerContainer />
    )).toBe(true)
  })

  test("renders DashboardContainer", () => {
    expect(wrapper.contains(
      <DashboardContainer />
    )).toBe(true)
  })
})
