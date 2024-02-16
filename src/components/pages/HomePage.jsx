
import Boxs from "./homeSections/Boxs";
import Form from "./homeSections/Form";
import Sidebar from "./homeSections/Sidebar";
import Welcome from "./homeSections/Welcome";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <Sidebar />
      <Boxs />
      <Form />
    </>
  );
};

export default HomePage;
