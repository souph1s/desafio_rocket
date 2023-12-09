import { Circle, Trash } from "@phosphor-icons/react";
import styles from "./Tasks.module.css";

interface TasksProps {
  taskItems: string[];
}

export function Tasks({ taskItems }: TasksProps) {
  return (
    <>
      {/* Cabeçalho das tarefas */}
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

      {/* Verificando se existem tarefas a serem exibidas */}
      {taskItems.length > 0 ? (
        // Exibe tarefas se tiver
        <div className={styles.centeredTasks}>
          {taskItems.map((task, index) => (
            // Exibe cada tarefa
            <p key={index} className={styles.tasksAdded}>
              <button className={styles.checkButton}>
                <Circle size={24} />
              </button>
              {task}
              <button className={styles.trashButton}>
                <Trash size={18} />
              </button>
            </p>
          ))}
        </div>
      ) : (
        // Exibe mensagem se não houver tarefas
        <div className={styles.centeredNoTasks}>
          <div className={styles.clipboardContainer}>
            <img
              className={styles.clipboard}
              src="/src/assets/Clipboard.png"
              alt="Clipboard"
            />
          </div>
          <p className={styles.noTask}>
            Você ainda não tem tarefas cadastradas
          </p>
          <p className={styles.noTaskThin}>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </>
  );
}

// Tarefas concluidas
//   <div className={styles.centeredTasks}>
//     <p className={styles.completedTask}>
//       <button className={styles.checkedButton}>
//         <CheckCircle size={24} weight="fill" />
//       </button>
//       Integer urna interdum massa libero auctor neque turpis turpis semper.
//       Duis vel sed fames integer.
//       <button className={styles.trashButton}>
//         <Trash size={18} />
//       </button>
//     </p>
//   </div>
