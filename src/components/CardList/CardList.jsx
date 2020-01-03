import React, { lazy, Suspense } from "react";
// (()=>import Card from "../Card/Card")
import "./CardList.css";

const Card = lazy(() => import("../Card/Card"));

export default props => {
  const { monsters } = props;
  return (
    <div id="card-list">
      <Suspense fallback={<div>Loading...</div>}>
        {monsters.map((monster, index) => {
          return <Card key={`monster-${index}`} {...monster} />;
        })}
      </Suspense>
    </div>
  );
};
