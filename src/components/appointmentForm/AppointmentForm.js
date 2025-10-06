import React from "react";

import { ContactPicker } from "../../components/contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const handleContactChange = (e) => {
  const selectedName = e.target.value;
  const selectedContact = contacts.find(c => c.name === selectedName);
  setContact(selectedContact || "");
  };
  return (
     <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      ></input>

      <input
        type="date"
        id="date"
        name="date"
        placeholder="Date"
        value={date}
        min = {getTodayString()}
        onChange={(e) => setDate(e.target.value)}
        required
      ></input>

      <input
      type="time"
      id="time"
      name="time"
      placeholder="Time"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      required
      ></input>

      {/* <ContactPicker contacts={contacts} value={contact} onChange={(e) =>setContact(e.target.value)}></ContactPicker> */}
       <ContactPicker
        contacts={contacts}
        value={contact}
        onChange={handleContactChange}
      />
      <button type="submit">Add addAppointment</button>
    </form>
  );
};
