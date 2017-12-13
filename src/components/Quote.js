import React from 'react'

function Quote(props) {
  const {quote, author} = props

  return (
    <div>
      <blockquote>{ quote }</blockquote>
      <i>{ author }</i>
    </div>
  )
}

export default Quote
