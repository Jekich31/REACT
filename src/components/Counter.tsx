// src/components/Counter.tsx
import styles from "../styles/Counter.module.css"
interface CounterProps {
  total: number;
  completed: number;
}

export function Counter({ total, completed }: CounterProps) {
  const active = Math.max(0, total - completed);
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <section className={styles["counter"]} aria-label="Статистика завдань">
      <div className={styles["counter__grid"]}>
        <div className={`${styles["counter__card"]} ${styles["counter__card--total"]}`}>
          <span className={styles["counter__label"]}>Всього</span>
          <span className={styles["counter__value"]}>{total}</span>
        </div>

        <div className={`${styles["counter__card"]} ${styles["counter__card--active"]}`}>
          <span className={styles["counter__label"]}>В процесі</span>
          <span className={styles["counter__value"]}>{active}</span>
        </div>

        <div className={`${styles["counter__card"]} ${styles["counter__card--completed"]}`}>
          <span className={styles["counter__label"]}>Виконано</span>
          <span className={styles["counter__value"]}>{completed}</span>
        </div>
      </div>

      <div className={styles["counter__progress"]}>
        <div className={styles["counter__progress-info"]}>
          <span className={styles["counter__progress-label"]}>Прогрес виконання</span>
          <span className={styles["counter__progress-value"]}>{percentage}%</span>
        </div>
        <div className={styles["counter__progress-bar"]}>
          <div
            className={styles["counter__progress-fill"]}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </section>
  );
}

