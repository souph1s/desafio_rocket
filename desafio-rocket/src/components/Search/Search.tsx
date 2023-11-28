import { PlusCircle } from "@phosphor-icons/react";

import styles from "./Search.module.css";

export function Task() {
  return (
    <form className={styles.taskForm}>
      <textarea placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
