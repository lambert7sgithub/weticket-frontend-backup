import React from "react";

import ScheduleTable from "./ScheduleTable";
import "./ScheduleTable.css";
import { useParams } from 'react-router-dom';

const Schduling = () => {
  let { movieId } = useParams();
  return (
    <div className="schedule-main-page">
      <ScheduleTable movieId={movieId} />
    </div>
  );
};

export default Schduling;
