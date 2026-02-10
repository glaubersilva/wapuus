import React from "react";
import styles from "./UserStatsGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";
import { Stats } from "../../api";

interface UserStatsGraphsProps {
  data: Stats[];
}

interface GraphData {
  x: string;
  y: number;
}

const VictoryChartTyped = VictoryChart as any;

const UserStatsGraphs = ({ data }: UserStatsGraphsProps) => {
  const [graph, setGraph] = React.useState<GraphData[]>([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.views),
      };
    });

    setTotal(
      data.map(({ views }) => Number(views)).reduce((a, b) => a + b, 0)
    );
    setGraph(graphData);
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Total Views: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChartTyped>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChartTyped>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
