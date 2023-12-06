import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <>
      <div className={styles.centeredContainer}>
        <div className={styles.taskHeader}>
          <p className={styles.taskCreated}>Tarefas criadas</p>
          <p className={styles.taskCompleted}>Concluídas</p>
        </div>
      </div>
      <div className={styles.centeredTasks}>
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
