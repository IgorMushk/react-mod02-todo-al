import React from 'react';

const ToDoV1 = ({ todo, handleCheckCompleted, handleDelete }) => {
  return (
    <li className="list-group-item">
      <div className="row justify-content-between">
        <div className="col-10">
          <input
            className="form-check-input me-2"
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCheckCompleted(todo.id)}
          />
          {/* {todo.title} */}
          <h5>title:{todo.title}</h5>
          {todo.description}
        </div>
        <div className="col">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => handleDelete(todo.id)}
          ></button>
        </div>
      </div>
    </li>
  );
};

export default ToDoV1;

// const ToDoV1 = ({ todo, handleCheckCompleted, handleDelete }) => {
// 	return (
// 		<li className='list-group-item'>
// 			<div className='row justify-content-between'>
// 				<div className='col-10'>
// 					<input
// 						className='form-check-input me-2'
// 						type='checkbox'
// 						checked={todo.completed}
// 						onChange={() => handleCheckCompleted(todo.id)}
// 					/>
// 					{todo.title}
// 				</div>
// 				<div className='col'>
// 					<button
// 						type='button'
// 						className='btn-close'
// 						aria-label='Close'
// 						onClick={() => handleDelete(todo.id)}
// 					></button>
// 				</div>
// 			</div>
// 		</li>
// 	)
// }

// export default ToDoV1
