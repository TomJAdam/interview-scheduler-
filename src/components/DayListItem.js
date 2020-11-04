import React from "react";

import "components/DayListItem.scss";
import classNames from "classnames/bind";

export default function DayListItem(props) {
  const formatSpots = (num) => {
    const plural = num !== 1 ? "s" : "";
    if (num === 0) {
      num = "no";
    }
    return `${num} spot${plural} remaining`;
  };

  const DayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });

  return (
    <li
      data-testid="day"
      className={DayClass}
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
