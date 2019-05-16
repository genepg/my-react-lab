import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = (props: any) => {
  const handleCheckboxChange = (event: React.ChangeEvent<any>) => {
    props.checkIsDone(props.todo.id, event.target.checked);
  };

  const onClickDelete = () => {
    props.deleteTodoItem(props.todo.id);
  };

  return (
    <div
      style={{
        padding: '0 30px',
        marginBottom: '5px',
        listStyle: 'none',
        backgroundColor: '#ff7676',
        color: 'white',
        textDecorationLine: props.todo.isDone ? 'line-through' : 'none',
        display: ' flex',
        alignItems: ' center',
        justifyContent: ' space-between'
      }}
    >
      <p>{props.todo.name}</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Checkbox
          style={{ color: 'white' }}
          checked={props.todo.isDone}
          onChange={handleCheckboxChange}
          value="checkedB"
          color="primary"
        />
        <span>
          <DeleteIcon
            onClick={onClickDelete}
            style={{
              color: 'white'
            }}
          />
        </span>
      </div>
    </div>
  );
};

export { TodoItem };
