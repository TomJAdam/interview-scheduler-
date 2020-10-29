//selector functions
export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.find((dayItem) => dayItem.name === day);

  const appointmentArray = [];

  if (state.appointments && selectedDay) {
    selectedDay.appointments.forEach((apptId) =>
      appointmentArray.push(state.appointments[apptId])
    );
  }
  return appointmentArray;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
}
