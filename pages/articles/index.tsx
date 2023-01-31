import React, { useEffect } from "react";

const Articles = () => {
  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return <div>Articles</div>;
};

export default Articles;