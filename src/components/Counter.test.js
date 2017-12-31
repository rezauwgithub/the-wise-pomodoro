import React from 'react'
import { shallow } from 'enzyme'

import Counter from './Counter'

describe('Counter', () => {
  let wrapper, CounterView, Notifier

  beforeEach(() => {
    jest.useFakeTimers()

    CounterView = React.createElement('<div />')

    wrapper = shallow(<Counter
      minutes={25}
      running={false}
      counterView={CounterView}
      />)
  })

  test("update running, minutes and seconds when receiving props", () => {
    wrapper.setProps({
      running: true,
      minutes: 10
    })

    expect(wrapper.state('running')).toBe(true)
    expect(wrapper.state('minutes')).toBe(10)
    expect(wrapper.state('seconds')).toBe(0)
  })

  test("renders counter view forwarding needed props", () => {
    expect(wrapper.contains(
      <CounterView minutes={25} running={false} seconds={0} />
    )).toBe(true)
  })
})
