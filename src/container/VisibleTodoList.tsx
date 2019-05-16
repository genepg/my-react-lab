import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import MoveDoneSwitch from '../components/MoveDoneSwitch';
import { Todo } from './TodoListApp';

const VisibleTodoList: React.FC<any> = props => {
  const { todoList } = props;
  const [isMoveDone, setIsMoveDone] = useState(false);
  const [displayTodoList, setDisplayTodoList] = useState(todoList);

  useEffect(() => {
    const newDisplayTodoList = sortByDone(todoList, isMoveDone);
    setDisplayTodoList(newDisplayTodoList);
  }, [todoList, isMoveDone]);

  const sortByDone = (list: Todo[], isAllow: boolean) => {
    const newlist = [...list];
    if (!isAllow) {
      return newlist;
    }
    return newlist.sort((a, b) => Number(a.isDone) - Number(b.isDone));
  };

  const moveDoneChagne = (checked: boolean) => {
    if (checked) {
      const sortedTodoList = sortByDone(todoList, checked);
      setDisplayTodoList(sortedTodoList);
    } else {
      setDisplayTodoList(todoList);
    }
    setIsMoveDone(checked);
  };

  return (
    <>
      <TodoList {...props} list={displayTodoList} />
      <MoveDoneSwitch moveDoneChagne={moveDoneChagne} />
    </>
  );
};

export default VisibleTodoList;
