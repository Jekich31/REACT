// src/components/TaskForm.tsx
import styles from  "../styles/TaskForm.module.css"
export function TaskForm() {
  return (
    <form className={styles["task-form"]} onSubmit={(e) => e.preventDefault()}>
      <div className={styles["task-form__input-group"]}>
        <input
          type="text"
          className={styles["task-form__input"]}
          placeholder="Що потрібно зробити?"
          defaultValue=""
          autoComplete="off"
        />
      </div>

      <div className={styles["task-form__controls"]}>
        <div className={styles["task-form__group"]}>
          <label className={styles["task-form__label"]} htmlFor="priority-select">
            Пріоритет:
          </label>
          <select
            id="priority-select"
            className={styles["task-form__select"]}
            defaultValue="normal"
          >
            <option value="low">🟢 Низький</option>
            <option value="normal">🟡 Звичайний</option>
            <option value="high">🔴 Високий</option>
          </select>
        </div>

        <div className={styles["task-form__group"]}>
          <label className={styles["task-form__label"]} htmlFor="deadline-input">
            Дедлайн:
          </label>
          <input
            id="deadline-input"
            type="date"
            className={styles["task-form__date"]}
          />
        </div>

        <button type="submit" className={styles["task-form__submit-btn"]}>
          <span className={styles["task-form__btn-icon"]}>＋</span>
          <span>Додати</span>
        </button>
      </div>
    </form>
  );
}

