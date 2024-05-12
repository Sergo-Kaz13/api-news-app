import React from "react";

import styles from "./ItemNews.module.css";

const ItemNews = (props) => {
  const { urlToImage, author, title, url, publishedAt } = props.itemValue;

  return (
    <div className={styles.generalItem}>
      <img src={urlToImage} alt={author} />
      <div className={styles.info}>
        <h3>
          <a className={styles.titleLink} href={url} target="_blank">
            {title}
          </a>
        </h3>

        <p>{publishedAt}</p>
      </div>
    </div>
  );
};

export default ItemNews;
