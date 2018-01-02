import React from 'react'
import { shallow } from 'enzyme'

import SimpleDigitalCounter from './SimpleDigitalCounter'

describe("SimpleDigitalCounter", () => {
  test("Renders formatted minutes and seconds", () => {
    const wrapper = shallow(<SimpleDigitalCounter
      minutes={2}
      seconds={0}
    />)

    expect(wrapper.find('span').text()).toBe("02:00")
  })
})
