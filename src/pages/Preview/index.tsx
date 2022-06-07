import PreviewComponent from "../../components/Preview";
import "./preview.scss";

const Preview = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="main-container-preview">
        <h3 className="mb-5 text-center">Preview Form</h3>
        <PreviewComponent />
      </div>
    </div>
  );
};

export default Preview;
