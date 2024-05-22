import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemNews from "../../components/ItemNews/ItemNews";
import {
  fetchSportsNews,
  getSportsError,
  getSportsStatus,
  selectAllSportsNews,
} from "../../features/sports/sportsSlice";

import styles from "./Sports.module.css";

const Sports = () => {
  const dispatch = useDispatch();

  const sports = useSelector(selectAllSportsNews);
  const sportsStatus = useSelector(getSportsStatus);
  const error = useSelector(getSportsError);

  useEffect(() => {
    if (sportsStatus === "idle") {
      dispatch(fetchSportsNews());
    }
  }, [sportsStatus, dispatch]);

  let content;

  if (sportsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (sportsStatus === "succeeded") {
    content = sports.map((item) => (
      <ItemNews key={item.title} itemValue={item} />
    ));
  } else if (sportsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <div className={styles.sportsBlock}>{content}</div>;
};

export default Sports;
