import Actions from "./components/Actions";
import Conditions from "./components/Conditions";
import Dashbord from "./components/Dashbord";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Navbar />
      <Dashbord />
      <Actions />
      <Conditions />
      <Table />
    </>
  );
}

export default App;
