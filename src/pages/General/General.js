import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemNews from "../../components/ItemNews/ItemNews";
import {
  fetchGeneralNews,
  getGeneralError,
  getGeneralStatus,
  selectAllGeneralNews,
} from "../../features/general/generalSlice";

import styles from "./General.module.css";

const General = () => {
  const dispatch = useDispatch();

  const general = useSelector(selectAllGeneralNews);
  const generalStatus = useSelector(getGeneralStatus);
  const error = useSelector(getGeneralError);

  useEffect(() => {
    if (generalStatus === "idle") {
      dispatch(fetchGeneralNews());
    }
  }, [generalStatus, dispatch]);

  let content;

  if (generalStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (generalStatus === "succeeded") {
    content = general.map((item) => (
      <ItemNews key={item.title} itemValue={item} />
    ));
  } else if (generalStatus === "failed") {
    content = <p>{error}</p>;
  }
  return <div className={styles.generalBlock}>{content}</div>;
};

export default General;
