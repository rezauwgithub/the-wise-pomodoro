import { changeParameter } from './actions'

describe("Actions", () => {
  test("`changeParameter` returns `CHANGE_PARAMETER` action for given parameter and value", () => {
    const action = changeParameter("foo", "bar")

    expect(action).toEqual({
      type: "CHANGE_PARAMETER",
      parameter: "foo",
      value: "bar"
    })
  })
})
