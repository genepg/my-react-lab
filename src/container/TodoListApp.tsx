import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoListHeader from '../components/TodoListHeader';
import AddTodoInput from '../components/AddTodoInput';
import VisibleTodoList from './VisibleTodoList';

export interface Todo {
  id: string;
  name: string;
  isDone: boolean;
}

const todoListData: Todo[] = [
  {
    id: 'df5978ea-9d88-4844-bee4-16c62395dfe2',
    name: 'Learn VueJs',
    isDone: true
  },
  {
    id: '43f89f24-acd3-4149-9eab-8190128f7d3f',
    name: 'Code a todo list',
    isDone: false
  },
  {
    id: '00dd82f8-e56f-4fe9-bc30-69626e081fe3',
    name: 'Learn something else',
    isDone: false
  },
  { id: 'eee4011f-f37f-4542-b587-4dbe6e29baea', name: '123123', isDone: false }
];

const TodoListApp: React.FC = () => {
  const [todoList, setTodoList] = useState(todoListData);

  const checkIsDone = (todoId: string, isDone: boolean) => {
    const newTodoList = todoList.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, isDone };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const addTodoItem = (todoName: string) => {
    const todo: Todo = { id: uuidv4(), name: todoName, isDone: false };
    setTodoList([todo, ...todoList]);
  };

  const deleteTodoItem = (id: string) => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className="todo">
      <TodoListHeader />
      <VisibleTodoList
        todoList={todoList}
        deleteTodoItem={deleteTodoItem}
        checkIsDone={checkIsDone}
      />
      <AddTodoInput addTodo={addTodoItem} />
    </div>
  );
};

export { TodoListApp };
