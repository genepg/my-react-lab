import React, { useState } from 'react';

const AddTodoInput: React.FC<any> = props => {
  const [todoName, setTodoName] = useState('');

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setTodoName(inputValue);
  };

  const addTodo = () => {
    console.log('addTodo', todoName);
    props.addTodo(todoName);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <div style={{ width: '80%' }}>
        <h4>Add to the todo list</h4>
        <div
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <input
            style={{
              height: '50px',
              minWidth: '200px',
              width: '100%',
              border: 'none',
              fontSize: '16px',
              outline: 'none',
              lineHeight: '50px'
            }}
            onChange={inputOnChange}
            type="text"
          />
          <button
            style={{
              marginLeft: '10px',
              height: '52px',
              minWidth: '80px',
              border: '1px solid white',
              background: '#fe6667',
              lineHeight: '50px',
              fontSize: 'smaller',
              color: 'white',
              outline: 'none',
              whiteSpace: 'nowrap',
              textTransform: 'uppercase'
            }}
            onClick={addTodo}
          >
            add item
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoInput;
