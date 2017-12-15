import React from 'react'

function Quote(props) {
  const {quote, author} = props

  return (
    <div className="columns mt-2">
      <blockquote className="column col-12 text-center divider">
        <p>{ quote }</p>
        <cite>- { author }</cite>
      </blockquote>
    </div>
  )
}

export default Quote
