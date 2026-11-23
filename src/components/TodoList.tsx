import React from "react";
import styles from "../styles/TodoList.module.css";
import TodoItem from "./TodoItem";
import type { Todo } from "../types";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <div id="todo-list" className={styles.todoContainer}>
        <div className={styles.emptyState}>
          ✨ Список завдань порожній. Додайте щось нове!
        </div>
      </div>
    );
  }

  return (
    <div id="todo-list" className={styles.todoContainer}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;