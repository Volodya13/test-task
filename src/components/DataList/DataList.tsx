import styles from './DataList.module.css';
import ListItem from "../../utils/ui/ListItem/ListItem";
import {useContext, useState} from "react";
import {DataContext} from "../../contextApi/DataContext";
import ListControlBar from "../../utils/ui/ListControlBar/ListControlBar.tsx";
import {Controls} from "../../utils/interfaces.ts";

type Tests = {
  id: number;
  name: string;
  type: string;
  status: string;
  siteId: number;
};

function DataList() {
  const {state} = useContext(DataContext);

  const [sortBy, setSortBy] = useState<Controls>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');


  const handleSortChange = (column: Controls) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  }

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

  const statusOrderAsc = ['online', 'draft', 'paused', 'stopped'];
  const statusOrderDesc = [...statusOrderAsc].reverse();

  const sortedTests = state.tests.sort((a: Tests, b: Tests) => {
    if (sortBy === 'status') {
      const order = sortOrder === 'asc' ? statusOrderAsc : statusOrderDesc;
      return order.indexOf(a.status.toLowerCase()) - order.indexOf(b.status.toLowerCase());
    }

    const fieldA = sortBy === 'site' ? getSiteUrl(a.siteId) : a[sortBy].toLowerCase();
    const fieldB = sortBy === 'site' ? getSiteUrl(b.siteId) : b[sortBy].toLowerCase();

    return sortOrder === 'asc'
        ? fieldA.localeCompare(fieldB)
        : fieldB.localeCompare(fieldA);
  });

  return (
    <>
      <ListControlBar
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSortChange={handleSortChange}
      />
      <ul className={styles.dataList}>
        {sortedTests.map(({id, name, type, status, siteId}: Tests) => (
            <ListItem
              key={id}
              id={id}
              name={name}
              type={type}
              status={status.toLowerCase()}
              siteUrl={getSiteUrl(siteId)}
              siteColor={getSiteColor(siteId)}
              buttonText={getButtonText(status)}
              buttonClassName={getButtonClassName(status)} onClick={function (): void {
              throw new Error('Function not implemented.');
            }}            />
          )
        )}
      </ul>
    </>
  )
}

export default DataList;
