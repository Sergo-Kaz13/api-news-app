import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemNews from "../../components/ItemNews/ItemNews";
import {
  fetchBusinessNews,
  getBusinessError,
  getBusinessStatus,
  selectAllBusinessNews,
} from "../../features/business/businessSlice";

import styles from "./Business.module.css";

const Business = () => {
  const dispatch = useDispatch();

  const business = useSelector(selectAllBusinessNews);
  const businessStatus = useSelector(getBusinessStatus);
  const error = useSelector(getBusinessError);

  useEffect(() => {
    if (businessStatus === "idle") {
      dispatch(fetchBusinessNews());
    }
  }, [businessStatus, dispatch]);

  let content;

  if (businessStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (businessStatus === "succeeded") {
    content = business.map((item) => (
      <ItemNews key={item.title} itemValue={item} />
    ));
  } else if (businessStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <div className={styles.businessBlock}>{content}</div>;
};

export default Business;
