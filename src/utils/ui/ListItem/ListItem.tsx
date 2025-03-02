import styles from './ListItem.module.css';
 import cn from 'classnames';
import {useNavigate} from "react-router";


type DataFields = {
  id: number;
  name: string;
  type: string;
  status: string;
  siteUrl: string;
  siteColor: string;
  buttonText: string;
  buttonClassName: string;
};

interface ListItemProps extends DataFields {
  onClick: () => void;
}

function ListItem(
  {
    id,
    name,
    type,
    status,
    siteUrl,
    siteColor,
    buttonText,
    buttonClassName,
  }: ListItemProps
) {

  const navigate = useNavigate();

  const handleClick = () => {
    if (status.toLowerCase() === 'draft') {
      navigate(`/dashboard/finalize/${id}`);
    } else {
      navigate(`/dashboard/results/${id}`);
    }
  }

  return (
    <li
      className={cn(styles.listItem, siteColor)}
    >
      <div className={styles.listItemContent}>
        <h4 className={styles.name}>{name}</h4>
        <span className={styles.type}>{type}</span>
        <span className={cn(styles.status, styles[`status-${status}`])}>{status}</span>
        <span className={styles.siteUrl}>{siteUrl}</span>
        <button className={cn(styles.btn, buttonClassName)} onClick={handleClick}>{buttonText}</button>
      </div>
    </li>
  )
}

export default ListItem;
