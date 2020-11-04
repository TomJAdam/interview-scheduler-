import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    spots: 5,
    appointments: {},
    interviewers: {},
  });

  //Api calls
  useEffect(() => {
    // const webSocket = new WebSocket("ws://localhost:8001");
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((response) => {
      setState((prev) => ({
        ...prev,
        days: response[0].data,
        appointments: response[1].data,
        interviewers: response[2].data,
      }));
    });
    // .then(() => {
    //   webSocket.send("ping");
    //   webSocket.onmessage = (event) => {
    //     console.log("websocket message:", event.data);
    //   };
    // });
  }, []);

  //Book interview
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState({
        ...state,
        appointments,
      });
      spotsPerDay(appointments, state.day);
    });
  };

  //Cancel interview
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({
        ...state,
        appointments,
      });
      spotsPerDay(appointments, state.day);
    });
  };

  //Sets the selected day
  const setDay = (day) => {
    setState((prev) => ({ ...prev, day }));
  };

  //Calculates spots remaining
  const spotsPerDay = (appointments, day) => {
    const appointmentArray = [];
    const selectedDay = state.days.find((dayItem) => dayItem.name === day);

    selectedDay.appointments.forEach((apptId) => {
      if (!appointments[apptId].interview) {
        appointmentArray.push(appointments[apptId].interview);
      }
    });

    selectedDay.spots = appointmentArray.length;

    const updatedDaysArray = state.days.map((day) => {
      if (day.id === selectedDay.id) {
        return selectedDay;
      } else {
        return day;
      }
    });

    return setState((state) => ({ ...state, days: updatedDaysArray }));
  };

  // Export
  return { state, setDay, bookInterview, cancelInterview, spotsPerDay };
}
