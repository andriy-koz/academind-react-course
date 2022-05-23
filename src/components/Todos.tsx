import React from 'react';
import TodoItem from './TodoItem';
import Todo from '../models/todo';
import classes from './Todos.module.css';

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}> = props => {
  return (
    <ul className={classes.todos}>
      {props.items.map(item => (
        <TodoItem
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
      ))}
    </ul>
  );
};

export default Todos;
