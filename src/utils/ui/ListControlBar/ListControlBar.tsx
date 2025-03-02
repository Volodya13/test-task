import styles from './ListControlBar.module.css';
import {Controls} from "../../interfaces.ts";
import ArrowUp from "../../../assets/arrow-icon.svg";
import ArrowDown from "../../../assets//dropdown-arrow-icon.svg";

type ListControlBarProps = {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  onSortChange: (column: Controls) => void;
}

function ListControlBar({sortBy, sortOrder, onSortChange}: ListControlBarProps) {
  const controlsData: Array<Controls> = ['name', 'type', 'status', 'site'];

  return (
    <div className={styles.controlBar}>
      {controlsData.map((controlName) => (
        <div className={styles.btnWrapper} key={controlName}>
          <button
            onClick={() => onSortChange(controlName)}
            className={`${styles.btn} ${sortBy === controlName ? styles.active : ''}`}
          >
            {controlName.toUpperCase()} {sortBy === controlName ? (sortOrder === 'asc' ? <ArrowUp/> : <ArrowDown />) : ''}
          </button>
        </div>
      ))}
    </div>
  )
}

export default ListControlBar;
