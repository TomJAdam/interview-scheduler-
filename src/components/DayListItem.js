import React from "react";

import "components/DayListItem.scss";
import classNames from "classnames/bind";

export default function DayListItem(props) {
  function formatSpots(num) {
    let plural;
    num > 1 || num < 1 ? (plural = "s") : (plural = "");
    num === 0 ? (num = "no") : (num = num);
    return `${num} spot${plural} remaining`;
  }

  const DayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  return (
    <li className={DayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
