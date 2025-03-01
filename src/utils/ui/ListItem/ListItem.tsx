import styles from './ListItem.module.css';
import cn from 'classnames';

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
    name,
    type,
    status,
    siteUrl,
    siteColor,
    buttonText,
    buttonClassName,
    onClick,
  }: ListItemProps
) {

  return (
    <li
      className={cn(styles.listItem, siteColor)}
    >
      <div className={styles.listItemContent}>
        <h4 className={styles.name}>{name}</h4>
        <span className={styles.type}>{type}</span>
        <span className={cn(styles.status, styles[`status-${status}`])}>{status}</span>
        <span className={styles.siteUrl}>{siteUrl}</span>
        <button className={cn(styles.btn, buttonClassName)} onClick={onClick}>{buttonText}</button>
      </div>
    </li>
  )
}

export default ListItem;
