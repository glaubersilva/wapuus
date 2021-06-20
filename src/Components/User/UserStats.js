import React from 'react';
import Head from '../Helpers/Head';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../api';
import Loading from '../Helpers/Loading';
import Error from '../Helpers/Error';
import UserStatsGraphs from './UserStatsGraphs';

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (data)
    return (
      <div>
        <Head title="Stats" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
