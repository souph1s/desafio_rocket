import { PlusCircle } from "@phosphor-icons/react";

import styles from "./Search.module.css";

export function Task() {
  return (
    <div className={styles.taskForm}>
      <form className={styles.taskForm}>
        <textarea
          className={styles.textarea}
          placeholder="Adicione uma nova tarefa"
        />
        <button>
          Criar
          <PlusCircle size={16} className={styles.img} />
        </button>
      </form>
    </div>
  );
}
