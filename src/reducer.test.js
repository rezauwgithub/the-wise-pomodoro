import store from './reducer'

describe("store", () => {
  let state = {}

  test("`START` sets `running` to true", () => {
    state = store(state, { type: "START" })

    expect(state.timer.running).toBe(true)
  })

  test("`STOP` sets `running` to false", () => {
    state = store(state, { type: "STOP" })

    expect(state.timer.running).toBe(false)
  })

  test("`CHANGE_PARAMETER` sets given parameter to given value as integer", () => {
    state = store(state, {
      type: "CHANGE_PARAMETER",
      parameter: "foo",
      value: "1"
    })

    expect(state.dashboard.foo).toBe(1)
  })
})
