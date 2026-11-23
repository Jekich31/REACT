import React from "react";
import styles from "../styles/TodoItem.module.css";
import type { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const itemClass = todo.completed
    ? `${styles.todoItem} ${styles.completed}`
    : styles.todoItem;

  return (
    <div className={itemClass}>
      <span className={styles.text} onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <button
        className={styles.deleteButton}
        onClick={() => onDelete(todo.id)}
        title="Видалити задачу"
      >
        Видалити
      </button>
    </div>
  );
};

export default TodoItem;