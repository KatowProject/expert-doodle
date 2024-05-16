import { useState } from 'react'

function useInput (defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  const onValueChangeHandler = (event) => {
    // check if element is input or div(contentEditable)
    if (event.target.value === undefined) {
      setValue(event.target.innerHTML || '')
    } else {
      setValue(event.target.value)
    }
  }

  const reset = () => setValue(defaultValue)

  return [value, onValueChangeHandler, reset]
}

export default useInput
