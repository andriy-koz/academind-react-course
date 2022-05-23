import React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  text: string;
  onRemoveItem: (text: string) => void;
}> = props => {
  return (
    <li onClick={() => props.onRemoveItem(props.text)} className={classes.item}>
      {props.text}
    </li>
  );
};

export default TodoItem;
