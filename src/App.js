import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <Form></Form>
      </Main>
      
      <Footer></Footer>
    </>
  );
}

export default App;
