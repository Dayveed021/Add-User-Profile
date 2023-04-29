import React, { useState } from "react";

const style = {
  centering: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  table: {
    borderCollapse: "collapse",
    width: "80%",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "50%",
    // minWidth: "150px",
  },
  form: {
    container: {
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "100%",
      marginBottom: "40px",
      padding: "10px",
    },
    inputs: {
      width: "80%",
      padding: "10px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
      cursor: "pointer",
    },
  },
};

export function PhoneBookForm({ addEntryToPhoneBook }) {
  const [firstName, setFirstName] = useState("David");
  const [lastName, setLastName] = useState("Udoh");
  const [phone, setPhone] = useState("08022459734");
  const [email, setEmail] = useState("udohdavid021@gmail.com");

  function handleFormSubmit(e) {
    e.preventDefault();
    const entry = { firstName, lastName, phone, email };
    addEntryToPhoneBook(entry);
    addEntryToPhoneBook(entry);
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
  }

  return (
    <div style={style.centering}>
      <form onSubmit={handleFormSubmit} style={style.form.container}>
        <label>First name:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userFirstname"
          name="userFirstname"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label>Last name:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userLastname"
          name="userLastname"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userPhone"
          name="userPhone"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userEmail"
          name="userEmail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          style={style.form.submitBtn}
          className="submitButton"
          type="submit"
          value="Add User"
        />
      </form>
    </div>
  );
}

export function InformationTable({ entries }) {
  const sortedEntries = entries.sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );

  return (
    <div style={style.centering}>
      <table style={style.table} className="informationTable">
        <thead>
          <tr>
            <th style={style.tableCell}>First name</th>
            <th style={style.tableCell}>Last name</th>
            <th style={style.tableCell}>Phone</th>
            <th style={style.tableCell}>Email</th>
          </tr>
        </thead>
        <tbody>
          {sortedEntries.map((entry, index) => (
            <tr key={index}>
              <td style={style.tableCell}>{entry.firstName}</td>
              <td style={style.tableCell}>{entry.lastName}</td>
              <td style={style.tableCell}>{entry.phone}</td>
              <td style={style.tableCell}>{entry.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
