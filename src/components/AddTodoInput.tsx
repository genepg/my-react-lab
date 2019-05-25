import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    color: 'white'
  },
  addTodo: {
    display: 'flex',
    alignItems: 'center'
  },
  addTodoInput: {
    height: '50px',
    border: 'none',
    fontSize: '16px',
    outline: 'none',
    lineHeight: '50px'
  },
  addTodoBtn: {
    marginLeft: '10px',
    height: '52px',
    border: '1px solid white',
    background: '#fe6667',
    lineHeight: '50px',
    fontSize: 'smaller',
    color: 'white',
    outline: 'none',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase'
  }
}));

const AddTodoInput: React.FC<any> = props => {
  const classes = useStyles();
  const [todoName, setTodoName] = useState('');

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setTodoName(inputValue);
  };

  const addTodo = () => {
    props.addTodo(todoName);
    setTodoName('');
  };

  return (
    <div className={classes.root}>
      <div>
        <h4 className={classes.title}>Add to the todo list</h4>
        <div className={classes.addTodo}>
          <input
            type="text"
            className={classes.addTodoInput}
            value={todoName}
            onChange={inputOnChange}
          />
          <button className={classes.addTodoBtn} onClick={addTodo}>
            add item
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoInput;
