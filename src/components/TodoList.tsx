import React from 'react';
import { Todo } from '../container/TodoListApp';
import { TodoItem } from './TodoItem';

const TodoList: React.FC<any> = props => {
  return (
    <>
      <ul
        style={{
          paddingLeft: 0
        }}
      >
        {props.list.map((todo: Todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              checkIsDone={props.checkIsDone}
              deleteTodoItem={props.deleteTodoItem}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
