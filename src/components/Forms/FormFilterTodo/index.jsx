import React from 'react'

const FormFilterTodo = ({filterTodo}) => {
    const handleChangeFilter = ({ target: { value } }) => {
		filterTodo(value)
    }
    return (
        <div className='mb-3'>
        <label htmlFor='exampleInputTodo' className='form-label'>
            Filter
        </label>
        <input
            name='filter'
            type='text'
            onChange={handleChangeFilter}
            className='form-control'
            id='exampleInputTodo' 
        />
    </div>
    )
  }
  
export default FormFilterTodo

// rafce