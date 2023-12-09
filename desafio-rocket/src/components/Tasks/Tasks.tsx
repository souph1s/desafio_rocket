import { Circle, CheckCircle, Trash } from "@phosphor-icons/react";
import styles from "./Tasks.module.css";
import { useState } from "react";

interface TasksProps {
  taskItems: string[];
}

export function Tasks({ taskItems }: TasksProps) {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const handleTaskToggle = (clickedTask: string) => {
    // Verifica se a tarefa já está na lista de concluídas
    const isTaskCompleted = completedTasks.includes(clickedTask);

    if (isTaskCompleted) {
      // Se estiver concluída, remove da lista de concluídas
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks.filter((task) => task !== clickedTask)
      );
    } else {
      // Se não estiver concluída, adiciona na lista de concluídas
      setCompletedTasks((prevCompletedTasks) => [
        ...prevCompletedTasks,
        clickedTask,
      ]);
    }
  };

  const rearrangeTasks = () => {
    const tasksNotCompleted = taskItems.filter(
      (task) => !completedTasks.includes(task)
    );
    const rearrangedTasks = [...tasksNotCompleted, ...completedTasks];
    return rearrangedTasks;
  };

  return (
    <>
      {/* Cabeçalho das tarefas */}
      <div className={styles.centeredContainer}>
        <div className={styles.taskHeader}>
          <p className={styles.taskCreated}>
            Tarefas criadas
            <span className={styles.counter}>{taskItems.length}</span>
          </p>
          <p className={styles.taskCompleted}>
            Concluídas
            <span className={styles.counter}>
              {completedTasks.length} de {taskItems.length}
            </span>
          </p>
        </div>
      </div>

      {/* Verificando se existem tarefas a serem exibidas */}
      {taskItems.length > 0 || completedTasks.length > 0 ? (
        // Exibe tarefas se tiver
        <div className={styles.centeredTasks}>
          <div className={styles.taskList}>
            {/* Renderiza tarefas reorganizadas */}
            {rearrangeTasks().map((task, index) => (
              <p
                key={index}
                className={`${styles.tasksAdded} ${
                  completedTasks.includes(task) ? styles.completedTask : ""
                }`}
              >
                <button
                  className={styles.checkButton}
                  onClick={() => handleTaskToggle(task)}
                >
                  {completedTasks.includes(task) ? (
                    <CheckCircle size={32} color="#5E60CE" weight="fill" />
                  ) : (
                    <Circle size={24} />
                  )}
                </button>
                {task}
                <button className={styles.trashButton}>
                  <Trash size={18} />
                </button>
              </p>
            ))}
          </div>
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
