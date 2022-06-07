import FormComponent from "../../components/Form";
import "./home.scss";

const Home = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="main-container">
        <h3 className="mb-5 text-center">Form Bantuan Sosial</h3>
        <FormComponent />
      </div>
    </div>
  );
};

export default Home;
