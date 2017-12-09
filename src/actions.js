export const start = {
  type: "START"
}

export const stop = {
  type: "STOP"
}

export const changeParameter = (parameter, value) => {
  return {
    type: "CHANGE_PARAMETER",
    parameter: parameter,
    value: value
  }
}
