import React from "react";

export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit
}) => {
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
        type="tel"
        id="phone"
        name="phone"
        placeholder="Phone"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        pattern="^\d{10}$"
        required
        ></input>

        <input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        ></input>

        <button type="submit">Add Contact</button>
    </form>
  );
};
