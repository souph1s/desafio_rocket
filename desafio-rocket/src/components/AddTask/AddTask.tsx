import { PlusCircle } from "@phosphor-icons/react";

import styles from "./AddTask.module.css";

export function AddTask() {
  return (
    <div className={styles.taskForm}>
      <form className={styles.taskForm}>
        <textarea
          placeholder="Adicione aqui sua tarefa"
          className={styles.textarea}
        ></textarea>
        <button className={styles.button}>
          <span>Criar</span>
          <PlusCircle size={16} className={styles.img} />
        </button>
      </form>
    </div>
  );
}
