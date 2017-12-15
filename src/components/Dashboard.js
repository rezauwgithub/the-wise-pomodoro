import React from 'react'

function FormElement(props) {
  const {name, label, value, onChange, disabled} = props

  return (
    <div className="form-group column col-1 col-mx-auto">
      <label htmlFor={name} className="form-label text-center">{label}</label>
      <input disabled={disabled} type="number" name={name} value={value} onChange={onChange} className="form-input text-center" />
    </div>
  )
}

function Dashboard(props) {
  const {running, start, stop, changeParameter, work, shortRest, longRest, iterations} = props
  const startDisabled = running
  const stopDisabled = !running

  return (
    <div>
      <form onSubmit={start}>
        <div className="columns">
          <FormElement label="Work" name="work" value={work} onChange={changeParameter} disabled={startDisabled} />
          <FormElement label="Short rest" name="shortRest" value={shortRest} onChange={changeParameter} disabled={startDisabled} />
          <FormElement label="Long rest" name="longRest" value={longRest} onChange={changeParameter} disabled={startDisabled} />
          <FormElement label="Iterations" name="iterations" value={iterations} onChange={changeParameter} disabled={startDisabled} />
        </div>
        <div className="columns">
          <input type="submit" disabled={startDisabled} value="Start" className="btn btn-primary mt-2 column col-2 col-mx-auto"/>
        </div>
      </form>
      <div className="columns">
        <button onClick={stop} disabled={stopDisabled} className="btn btn-default mt-2 column col-2 col-mx-auto">Stop</button>
      </div>
    </div>
  )
}

export default Dashboard
