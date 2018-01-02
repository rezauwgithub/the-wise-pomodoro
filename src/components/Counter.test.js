import React from 'react'
import { shallow } from 'enzyme'

import Counter from './Counter'
import SimpleDigitalCounter from './counters/SimpleDigitalCounter'

describe('Counter', () => {
  let wrapper, CounterView, Notifier

  beforeEach(() => {
    jest.useFakeTimers()

    wrapper = shallow(<Counter
      minutes={25}
      running={false}
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
      <SimpleDigitalCounter minutes={25} running={false} seconds={0} />
    )).toBe(true)
  })
})
