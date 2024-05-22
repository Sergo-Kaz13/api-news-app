import React, { useEffect } from "react";

import styles from "./Health.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHealthNews,
  getHealthError,
  getHealthStatus,
  selectAllHealthNews,
} from "../../features/health/healthSlice";
import ItemNews from "../../components/ItemNews/ItemNews";

const Health = () => {
  const dispatch = useDispatch();

  const health = useSelector(selectAllHealthNews);
  const healthStatus = useSelector(getHealthStatus);
  const error = useSelector(getHealthError);

  useEffect(() => {
    if (healthStatus === "idle") {
      dispatch(fetchHealthNews());
    }
  }, [healthStatus, dispatch]);

  let content;

  if (healthStatus === "loaging") {
    content = <p>Loading...</p>;
  } else if (healthStatus === "succeeded") {
    content = health.map((item) => (
      <ItemNews key={item.title} itemValue={item} />
    ));
  } else if (healthStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <div className={styles.healthBlock}>{content}</div>;
};

export default Health;
