// src/components/TodoItem.tsx
import type { Task, Priority } from "../types";
import styles from "../styles/TodoItem.module.css";

interface TodoItemProps {
  task: Task;
}

const PRIORITY_LABELS: Record<Priority, string> = {
  low: "Низький",
  normal: "Звичайний",
  high: "Високий",
};

export function TodoItem({ task }: TodoItemProps) {
  const isOverdue = Boolean(task.isOverdue && !task.completed);

  const itemClasses = [
    styles["todo-item"],
    styles[`todo-item--${task.priority}`],
    task.completed ? styles["todo-item--completed"] : "",
    isOverdue ? styles["todo-item--overdue"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={itemClasses}>
      <label
        className={styles["todo-item__checkbox-label"]}
        title={task.completed ? "Виконано" : "Позначити як виконане"}
      >
        <input
          type="checkbox"
          className={styles["todo-item__checkbox"]}
          defaultChecked={task.completed}
        />
      </label>

      <div className={styles["todo-item__content"]}>
        <p className={styles["todo-item__text"]}>{task.text}</p>
        <div className={styles["todo-item__meta"]}>
          <span
            className={`${styles["todo-item__badge"]} ${
              styles[`todo-item__badge--${task.priority}`]
            }`}
          >
            {PRIORITY_LABELS[task.priority]}
          </span>
          {task.date && (
            <span
              className={`${styles["todo-item__date"]} ${
                isOverdue ? styles["todo-item__date--overdue"] : ""
              }`}
            >
              📅 {task.date}
              {isOverdue && (
                <span className={styles["todo-item__overdue-alert"]}>
                  ⚠️ Прострочено
                </span>
              )}
            </span>
          )}
        </div>
      </div>

      <button
        type="button"
        className={styles["todo-item__delete-btn"]}
        title="Видалити завдання"
      >
        🗑️
      </button>
    </li>
  );
}