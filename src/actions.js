import fetch from 'cross-fetch'

export const start = {
  type: "START"
}

export const stop = {
  type: "STOP"
}

export const changeParameter = (parameter, value) => {
  return {
    type: "CHANGE_PARAMETER",
    parameter,
    value
  }
}

export const requestQuote = {
  type: "REQUEST_QUOTE"
}

export function receiveQuote(quote, author) {
  return {
    type: "RECEIVE_QUOTE",
    quote,
    author
  }
}

export function fetchQuote() {
  return function(dispatch) {
    dispatch(requestQuote)

    return fetch("https://talaikis.com/api/quotes/random/")
      .then(
        (response) => {
          response
            .json()
            .then(body => dispatch(receiveQuote(body.quote, body.author)))
        },
        (error) => {
          console.log(error)
        })
  }
}
