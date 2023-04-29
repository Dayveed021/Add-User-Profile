import { useState } from "react";
import "./App.css";
import { InformationTable, PhoneBookForm } from "./Users";

function App(props) {
  const [entries, setEntries] = useState([
    {
      firstName: "David",
      lastName: "Udoh",
      phone: "08022459734",
      email: "udohdavid021@gmail.com",
    },
  ]);

  const handleSubmit = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={handleSubmit} />
      <InformationTable entries={entries} />
    </section>
  );
}

export default App;
