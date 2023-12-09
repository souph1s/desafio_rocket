import { Circle, CheckCircle, Trash } from "@phosphor-icons/react";
import styles from "./Tasks.module.css";
import { useState } from "react";

interface TasksProps {
  taskItems: string[];
}

export function Tasks({ taskItems }: TasksProps) {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [deletedTasks, setDeletedTasks] = useState<string[]>([]);

  const handleTaskToggle = (clickedTask: string) => {
    const isTaskCompleted = completedTasks.includes(clickedTask);

    if (isTaskCompleted) {
      setCompletedTasks((prevCompletedTasks) =>
        prevCompletedTasks.filter((task) => task !== clickedTask)
      );
    } else {
      setCompletedTasks((prevCompletedTasks) => [
        ...prevCompletedTasks,
        clickedTask,
      ]);
    }
  };

  const handleDeleteTask = (deletedTask: string) => {
    // Adiciona a tarefa excluída à lista
    setDeletedTasks((prevDeletedTasks) => [...prevDeletedTasks, deletedTask]);

    // Remove a tarefa excluída da lista de concluídas, se estiver lá
    setCompletedTasks((prevCompletedTasks) =>
      prevCompletedTasks.filter((task) => task !== deletedTask)
    );
  };

  const rearrangeTasks = () => {
    const tasksNotCompleted = taskItems.filter(
      (task) => !completedTasks.includes(task) && !deletedTasks.includes(task)
    );
    const rearrangedTasks = [...tasksNotCompleted, ...completedTasks];
    return rearrangedTasks;
  };

  return (
    <>
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

      {taskItems.length > 0 || completedTasks.length > 0 ? (
        <div className={styles.centeredTasks}>
          <div className={styles.taskList}>
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
                <button
                  className={styles.trashButton}
                  onClick={() => handleDeleteTask(task)}
                >
                  <Trash size={18} />
                </button>
              </p>
            ))}
          </div>
        </div>
      ) : (
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
