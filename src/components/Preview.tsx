import { useContext } from "react";
import { Form } from "antd";
import { useHistory } from "react-router-dom";
import FormContext from "../context";
import Fields from "../components/Fields";

const PreviewComponent = () => {
  const router = useHistory();
  const GlobalForm = useContext(FormContext);
  const fields = Fields();

  const formItemLayout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 14 },
  };

  const {name, nik, kk, ktp, fileKk, age, gender, province, city, district, village, address, rt, rw, incomeBefore, incomeAfter, reason} = GlobalForm.form 

  if(Object.keys(GlobalForm.form).length === 0) router.push('/')
  return (
    <div>
      <Form {...formItemLayout}>
        <Form.Item {...fields["name"]}>
          <span className="ant-form-text">{name}</span>
        </Form.Item>
        <Form.Item {...fields["nik"]}>
          <span className="ant-form-text">{nik}</span>
        </Form.Item>
        <Form.Item {...fields["kk"]}>
          <span className="ant-form-text">{kk}</span>
        </Form.Item>
        <Form.Item {...fields["ktp"]}>
          <span className="ant-form-text">{ktp?.name}</span>
        </Form.Item>
        <Form.Item {...fields["fileKk"]}>
          <span className="ant-form-text">{fileKk?.name}</span>
        </Form.Item>
        <Form.Item {...fields["age"]}>
          <span className="ant-form-text">{age}</span>
        </Form.Item>
        <Form.Item {...fields["gender"]}>
          <span className="ant-form-text">{gender}</span>
        </Form.Item>
        <Form.Item {...fields["province"]}>
          <span className="ant-form-text">{province}</span>
        </Form.Item>
        <Form.Item {...fields["city"]}>
          <span className="ant-form-text">{city}</span>
        </Form.Item>
        <Form.Item {...fields["district"]}>
          <span className="ant-form-text">{district}</span>
        </Form.Item>
        <Form.Item {...fields["village"]}>
          <span className="ant-form-text">{village}</span>
        </Form.Item>
        <Form.Item {...fields["address"]}>
          <span className="ant-form-text">{address}</span>
        </Form.Item>
        <Form.Item {...fields["rt"]}>
          <span className="ant-form-text">{rt}</span>
        </Form.Item>
        <Form.Item {...fields["rw"]}>
          <span className="ant-form-text">{rw}</span>
        </Form.Item>
        <Form.Item {...fields["incomeBefore"]}>
          <span className="ant-form-text">{`Rp ${incomeBefore}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </Form.Item>
        <Form.Item {...fields["incomeAfter"]}>
          <span className="ant-form-text">{`Rp ${incomeAfter}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </Form.Item>
        <Form.Item {...fields["reason"]}>
          <span className="ant-form-text">{reason}</span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PreviewComponent;
