import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getNewsError,
  getNewsStatus,
  selectAllNews,
} from "../../features/news/newsSlice";
import { fetchNews } from "../../features/news/newsSlice";

const News = () => {
  const dispatch = useDispatch();

  const news = useSelector(selectAllNews);
  const newsStatus = useSelector(getNewsStatus);
  const error = useSelector(getNewsError);

  console.log(news);

  useEffect(() => {
    if (newsStatus === "idle") {
      dispatch(fetchNews());
    }
  }, [dispatch, newsStatus]);

  let content;

  if (newsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (newsStatus === "succeeded") {
    // content = news.map(new => {
    //   const
    // })
  } else if (newsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
};

export default News;
