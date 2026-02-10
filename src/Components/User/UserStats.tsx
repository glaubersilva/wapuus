import React from "react";
import Head from "../Helpers/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET, Stats } from "../../api";
import Loading from "../Helpers/Loading";
import Error from "../Helpers/Error";
import { Link } from "react-router-dom";

const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch<Stats[]>();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    if (data.length === 0) {
      return (
        <div
          style={{
            textAlign: "center",
            padding: "2rem 0 4rem 0",
            color: "#888",
          }}
        >
          <p>You have not added any Wappu yet...</p>
          <p>
            <Link className="link" to="/account/post">
              Post your first Wapuu
            </Link>
          </p>
        </div>
      );
    } else {
      return (
        <React.Suspense fallback={<div></div>}>
          <Head title="Stats" />
          <UserStatsGraphs data={data} />
        </React.Suspense>
      );
    }
  } else {
    return null;
  }
};

export default UserStats;
