import React from 'react'

function FormElement(props) {
  const {name, label, value, onChange, disabled} = props

  return (
    <div className="form-element">
      <label htmlFor={name}>{label}</label>
      <input disabled={disabled} type="number" name={name} value={value} onChange={onChange} />
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
        <FormElement label="Work duration" name="work" value={work} onChange={changeParameter} disabled={startDisabled} />
        <FormElement label="Short rest duration" name="shortRest" value={shortRest} onChange={changeParameter} disabled={startDisabled} />
        <FormElement label="Long rest duration" name="longRest" value={longRest} onChange={changeParameter} disabled={startDisabled} />
        <FormElement label="Number of iterations" name="iterations" value={iterations} onChange={changeParameter} disabled={startDisabled} />
        <input type="submit" disabled={startDisabled} value="Start" />
      </form>
      <button onClick={stop} disabled={stopDisabled}>Stop</button>
    </div>
  )
}

export default Dashboard
