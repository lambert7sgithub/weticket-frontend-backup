import React from "react";

import ScheduleTable from "./ScheduleTable";
import "./ScheduleTable.css";
import {useParams} from 'react-router-dom';

const Scheduling = () => {
  let { movieId } = useParams();
  return (
    <div className="schedule-main-page">
      <ScheduleTable movieId={movieId} />
    </div>
  );
};

export default Scheduling;
