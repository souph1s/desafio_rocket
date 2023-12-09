import { PlusCircle } from "@phosphor-icons/react";
import styles from "./AddTask.module.css";
import { FormEvent, useState } from "react";

export function AddTask({ onAddTask }: { onAddTask: (task: string) => void }) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onAddTask(newTaskText);
    setNewTaskText("");
  }

  return (
    <div className={styles.taskForm}>
      <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
        <textarea
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Adicione aqui sua tarefa"
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button}>
          <span>Criar</span>
          <PlusCircle size={16} className={styles.img} />
        </button>
      </form>
    </div>
  );
}
