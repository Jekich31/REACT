// src/components/Header.tsx
import  styles from"../styles/Header.module.css"
interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export function Header({
  title = "Task List",
  subtitle = "Організуй свої щоденні справи та завдання",
}: HeaderProps) {
  return (
    <header className={styles["app-header"]}>
      <div className={styles["app-header__icon-wrapper"]}>
        <span className={styles["app-header__icon"]}>📋</span>
      </div>
      <h1 className={styles["app-header__title"]}>{title}</h1>
      <p className={styles["app-header__subtitle"]}>{subtitle}</p>
    </header>
  );
}

