import React, { useEffect, useState } from "react";

const days = [
  "неділя",
  "понеділок",
  "вівторок",
  "середа",
  "четверг",
  "пятниця",
  "субота",
];

const months = [
  "січня",
  "лютого",
  "березня",
  "квітня",
  "травня",
  "червня",
  "липня",
  "серпня",
  "вересня",
  "жовтня",
  "листопада",
  "грудня",
];

const useGetDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  const date = new Date();

  const day = days[date.getDay()];
  const dayMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  useEffect(() => {
    setCurrentDate(day + "," + " " + dayMonth + " " + month + " " + year);
  }, []);

  return currentDate;
};

export default useGetDate;
