import React from 'react'

function FormElement(props) {
  const {name, label, value, onChange, disabled} = props

  return (
    <div className="form-element">
      <label htmlFor={name}>{label}</label>
      <input disabled={disabled} type="number" data-field={name} value={value} onChange={onChange} />
    </div>
  )
}

function Dashboard(props) {
  const {running, handleStart, handleStop, handleChange, work, shortRest, longRest, iterations} = props
  const startDisabled = running
  const stopDisabled = !running

  return (
    <div>
      <form onSubmit={handleStart}>
        <FormElement label="Work duration" name="work" value={work} onChange={handleChange} disabled={startDisabled} />
        <FormElement label="Short rest duration" name="shortRest" value={shortRest} onChange={handleChange} disabled={startDisabled} />
        <FormElement label="Long rest duration" name="longRest" value={longRest} onChange={handleChange} disabled={startDisabled} />
        <FormElement label="Number of iterations" name="iterations" value={iterations} onChange={handleChange} disabled={startDisabled} />
        <input type="submit" disabled={startDisabled} value="Start" />
      </form>
      <button onClick={handleStop} disabled={stopDisabled}>Stop</button>
    </div>
  )
}

export default Dashboard
