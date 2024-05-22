import React, { useEffect } from "react";

import styles from "./Science.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchScienceNews,
  getScienceError,
  getScienceStatus,
  selectAllScienceNews,
} from "../../features/science/scienceSlice";
import ItemNews from "../../components/ItemNews/ItemNews";

const Science = () => {
  const dispatch = useDispatch();

  const science = useSelector(selectAllScienceNews);
  const scienceStatus = useSelector(getScienceStatus);
  const error = useSelector(getScienceError);

  useEffect(() => {
    if (scienceStatus === "idle") {
      dispatch(fetchScienceNews());
    }
  }, [scienceStatus, dispatch]);

  let content;

  if (scienceStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (scienceStatus === "succeeded") {
    content = science.map((item) => (
      <ItemNews key={item.title} itemValue={item} />
    ));
  } else if (scienceStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <div className={styles.scienceBlock}>{content}</div>;
};

export default Science;
