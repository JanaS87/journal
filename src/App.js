import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import EntryForm from "./components/Entry-Form/index.js";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <EntryForm></EntryForm>
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
