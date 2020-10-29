//appointment

import React from "react";

import "./styles.scss";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

// import Header from "./Header";

export default function Appointment(props) {
  const interview = props.interview;
  return (
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? (
        <Show
          student={interview.student}
          interviewer={interview.interviewer.name}
        />
      ) : (
        <Empty />
      )}
    </article>
  );
}
