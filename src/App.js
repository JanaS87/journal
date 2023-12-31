import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import EntryForm from "./components/Entry-Form/index.js";
import Footer from "./components/Footer/Footer";
import "./App.css";
import EntriesSection from "./components/EntriesSection";
import { useState } from "react";
import {uid} from "uid";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function handleAddEntry(newEntry) {
    const newId = uid.id;

    const addEntry = {
      id: newId,
      date: new Date().toLocaleDateString("en-us", { dateStyle: "medium"}),
      ...newEntry,
    };

    setEntries((entries) => [addEntry, ...entries]);

  }
  return (
    <>
      <Header></Header>
      <Main>
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection entries={entries} />
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
