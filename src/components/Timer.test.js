import React from 'react'
import { shallow } from 'enzyme'

import Timer from './Timer'
import Counter from './Counter'
import SimpleDigitalCounter from './counters/SimpleDigitalCounter'
import CowNotifier from '../notifiers/CowNotifier'

describe('Timer', () => {
  let wrapper, CounterView, Notifier

  beforeEach(() => {
    jest.useFakeTimers()

    wrapper = shallow(<Timer
      work={25}
      shortRest={5}
      longRest={15}
      iterations={4}
      running={false}
      />)
  })

  test("starts when receives `running` as `true`", () => {
    wrapper.setProps({
      running: true
    })

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 25 * 60 * 1000)
  })

  test("does not start when receives `running` as `false`", () => {
    wrapper.setProps({
      running: false
    })

    expect(setTimeout).not.toHaveBeenCalled()
  })

  test("resets counter when receives `running` as `false`", () => {
    wrapper.setProps({
      work: 12,
      running: false
    })

    expect(wrapper.state("counter")).toBe(12)
  })

  test("renders Counter forwarding needed props", () => {
    wrapper.setProps({
      running: false
    })

    expect(wrapper.contains(
      <Counter minutes={25} running={false} counterView={CounterView} />
    )).toBe(true)
  })
})
