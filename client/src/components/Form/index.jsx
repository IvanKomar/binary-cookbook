import React, { useState } from 'react'
import './style.css'

function Form({addRecipe}) {
  const [description, setDescription] = useState('')

  const onSumbit = (e) => {
    e.preventDefault()
    const newRecipe = {
      description,
    }
    if (description.trim()) {
      addRecipe(newRecipe)
      setDescription('')
    }
  }

  return (
    <form onSubmit={onSumbit} className='recipe-form'> 
      <label htmlFor='description'></label>
      <input
        id='description'
        name='description'
        placeholder='write down description'
        className='recipe-form__input'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      
      <button className='recipe-form__btn'>create</button>
    </form>
  )
}

export default Form