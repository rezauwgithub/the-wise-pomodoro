import store from './reducer'

describe("store", () => {
  let state = {}

  describe("START", () => {
    test("sets `running` to true", () => {
      state = store(state, { type: "START" })

      expect(state.timer.running).toBe(true)
    })
  })

  describe("STOP", () => {
    test("sets `running` to false", () => {
      state = store(state, { type: "STOP" })

      expect(state.timer.running).toBe(false)
    })
  })

  describe("CHANGE_PARAMETER", () => {
    test("sets parameter to value as integer", () => {
      state = store(state, {
        type: "CHANGE_PARAMETER",
        parameter: "foo",
        value: "1"
      })

      expect(state.dashboard.foo).toBe(1)
    })
  })

  test("sets parameter to 0 when value is less than zero", () => {
    state = store(state, {
      type: "CHANGE_PARAMETER",
      parameter: "foo",
      value: "-1"
    })

    expect(state.dashboard.foo).toBe(0)
  })
})
