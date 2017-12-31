import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import TimerContainer from './components/TimerContainer'
import DashboardContainer from './components/DashboardContainer'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
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
