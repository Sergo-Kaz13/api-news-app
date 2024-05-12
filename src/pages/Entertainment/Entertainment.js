import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemNews from "../../components/ItemNews/ItemNews";
import {
  fetchEntertainment,
  getEntertainmentError,
  getEntertainmentStatus,
  selectAllEntertainmentNews,
} from "../../features/entertainment/entertainmentSlice";

import styles from "./Entertainment.module.css";

const Entertainment = () => {
  const dispatch = useDispatch();

  const entertainment = useSelector(selectAllEntertainmentNews);
  const entertainmentStatus = useSelector(getEntertainmentStatus);
  const error = useSelector(getEntertainmentError);

  useEffect(() => {
    if (entertainmentStatus === "idle") {
      dispatch(fetchEntertainment());
    }
  }, [dispatch, entertainmentStatus]);

  let content;

  if (entertainmentStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (entertainmentStatus === "succeeded") {
    content = entertainment.map((item) => (
      <ItemNews key={item.title} itemValue={item} />
    ));
  } else if (entertainment === "failed") {
    content = <p>{error}</p>;
  }

  return <div className={styles.entertainmentBlock}>{content}</div>;
};

export default Entertainment;
