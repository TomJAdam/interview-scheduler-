import React from "react";

import "components/InterviewerList.scss";
import InterviewerListItem from "components/InterviewerListItem";

export default function InterviewerList(props) {
  let interviewers = props.interviewers.map((prop) => {
    return (
      <InterviewerListItem
        key={prop.id}
        name={prop.name}
        avatar={prop.avatar}
        selected={prop.id === props.interviewer}
        setInterviewer={prop.setInterviewer}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}
