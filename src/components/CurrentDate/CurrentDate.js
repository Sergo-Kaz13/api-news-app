import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { showCurrentDate } from "../../features/currentDate/currentDateSlice";
import useGetDate from "../../useGetDate";

import styles from "./CurrentDate.module.css";

const CurrentDate = () => {
  const [day, setDay] = useState(null);

  const dispatch = useDispatch();

  const { currentDate } = useSelector((state) => state.currentDate);

  const newDate = useGetDate();

  useEffect(() => {
    setDay(newDate);
    dispatch(showCurrentDate(day));
  }, [dispatch, day]);

  return <div className={styles.currentDate}>{currentDate || ""}</div>;
};

export default CurrentDate;
