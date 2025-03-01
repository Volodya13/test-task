import styles from './DataList.module.css';
import ListItem from "../../utils/ui/ListItem/ListItem";
import {useContext} from "react";
import {DataContext} from "../../contextApi/DataContext";

type Tests = {
  id: number;
  name: string;
  type: string;
  status: string;
  siteId: number;
};

function DataList() {
  const {state} = useContext(DataContext);

  const getSiteUrl = (siteId: number): string => {
    const url = state.sites.find((site: { id: number; }) => site.id === siteId)?.url || '';
    return url.replace(/^(https?:\/\/)?(www\.)?/, '');
  };

  const siteColors: Record<number, string> = {
    1: 'border-market-company',
    2: 'border-delivery-company',
    3: 'border-games-company'
  };

  const getSiteColor = (siteId: number) => {
    return siteColors[siteId] || '';
  };

  const getButtonClassName = (status: string) => {
    return status === 'DRAFT' ? styles.btnFinalize : styles.btnResults;
  };

  const getButtonText = (status: string) => {
    return status === 'DRAFT' ? 'Finalize' : 'Results';
  };

  return (
    <ul className={styles.dataList}>
      {state?.tests && state.tests.map(({id, name, type, status, siteId}: Tests) => (
        <ListItem
          key={id}
          id={id}
          name={name}
          type={type}
          status={status.toLowerCase()}
          siteUrl={getSiteUrl(siteId)}
          siteColor={getSiteColor(siteId)}
          buttonText={getButtonText(status)}
          buttonClassName={getButtonClassName(status)}
          onClick={() => console.log('Clicked')}
        />
      )
      )}
    </ul>
  )
}

export default DataList;
