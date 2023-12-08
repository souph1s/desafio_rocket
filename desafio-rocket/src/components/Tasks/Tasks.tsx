import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <>
      <div className={styles.centeredContainer}>
        <div className={styles.taskHeader}>
          <p className={styles.taskCreated}>
            Tarefas criadas
            <span className={styles.counter}>0</span>
          </p>
          <p className={styles.taskCompleted}>
            Concluídas
            <span className={styles.counter}>0</span>
          </p>
        </div>
      </div>

      <div className={styles.centeredTasks}>
        <p className={styles.tasksAdded}>
          <button className={styles.checkButton}>
            <Circle size={24} />
          </button>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
          <button className={styles.trashButton}>
            <Trash size={18} />
          </button>
        </p>
      </div>

      <div className={styles.centeredTasks}>
        <p className={styles.completedTask}>
          <button className={styles.checkedButton}>
            <CheckCircle size={24} weight="fill" />
          </button>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
          <button className={styles.trashButton}>
            <Trash size={18} />
          </button>
        </p>
      </div>

      <div className={styles.centeredNoTasks}>
        <div className={styles.clipboardContainer}>
          <img
            className={styles.clipboard}
            src="/src/assets/Clipboard.png"
            alt="Clipboard"
          />
        </div>
        <p className={styles.noTask}>Você ainda não tem tarefas cadastradas</p>
        <p className={styles.noTaskThin}>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </>
  );
}
