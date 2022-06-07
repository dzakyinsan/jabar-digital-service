import { useContext } from "react";
import { Form, Select, Input, InputNumber, Button, Checkbox } from "antd";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import Fields from "../components/Fields";
import UploadDragger from "../components/UploadDragger";
import AutoCompleteComp from "./AutoComplete";
import DropdownComp from "./Dropdown";
import FormContext from "../context";

const { Option } = Select;
const fields = Fields();

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const FormComponent = () => {
  const router = useHistory();
  const [form] = Form.useForm();
  const GlobalForm = useContext(FormContext);

  const onFinish = (values: any) => {
    values.ktp = Array.isArray(values.ktp)
      ? values.ktp[values.ktp.length - 1]
      : values.ktp;
    values.fileKk = Array.isArray(values.fileKk)
      ? values.fileKk[values.fileKk.length - 1]
      : values.fileKk;

    Swal.fire({
      title: `Apakah anda yakin data sudah benar ?`,
      text: "Data tidak bisa di edit kembali",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(() => {
          if (Math.random() < 0.5) {
            (async () => {
              const res = await Swal.fire({
                title: "Success",
                text: "Data anda berhasil di submit",
                icon: "success",
              });
              if (res) {
                GlobalForm.setForm(values);
                router.push("./preview");
              }
            })();
          } else {
            Swal.fire("Interval Server Error", "error");
          }
        }, 1500);
      }
    });
  };

  return (
    <Form
      form={form}
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
    >
      <Form.Item {...fields["name"]}>
        <Input placeholder="Masukkan Nama lengkap" />
      </Form.Item>
      <Form.Item {...fields["nik"]}>
        <InputNumber
          placeholder="Masukkannnomor NIK"
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item {...fields["kk"]}>
        <InputNumber
          placeholder="Masukkan Nomor KK"
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item {...fields["ktp"]}>
        <UploadDragger form={form} name="ktp" />
      </Form.Item>
      <Form.Item {...fields["fileKk"]}>
        <UploadDragger form={form} name="fileKk" />
      </Form.Item>
      <Form.Item {...fields["age"]}>
        <InputNumber
          placeholder="Umur Tidak Boleh kurang dari 25"
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item {...fields["gender"]} hasFeedback>
        <Select placeholder="Pilih Jenis Kelamin">
          <Option value="Pria">Pria</Option>
          <Option value="Wanita">Wanita</Option>
        </Select>
      </Form.Item>
      <Form.Item {...fields["province"]} hasFeedback>
        <AutoCompleteComp form={form} name="province" />
      </Form.Item>
      <Form.Item {...fields["city"]} hasFeedback>
        <AutoCompleteComp form={form} name="city" />
      </Form.Item>
      <Form.Item {...fields["district"]} hasFeedback>
        <AutoCompleteComp form={form} name="district" />
      </Form.Item>
      <Form.Item {...fields["village"]} hasFeedback>
        <AutoCompleteComp form={form} name="village" />
      </Form.Item>
      <Form.Item {...fields["address"]}>
        <Input placeholder="Masukkan Alamat Lengkap" />
      </Form.Item>
      <Form.Item {...fields["rt"]}>
        <Input placeholder="Masukkan RT" />
      </Form.Item>
      <Form.Item {...fields["rw"]}>
        <Input placeholder="Masukkan RW" />
      </Form.Item>
      <Form.Item {...fields["incomeBefore"]}>
        <InputNumber
          placeholder="contoh : 1.000.000"
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          addonBefore="Rp"
          style={{ width: "100%" }}
        />
      </Form.Item>
      <Form.Item {...fields["incomeAfter"]}>
        <InputNumber
          placeholder="contoh : 1.000.000"
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          addonBefore="Rp"
          style={{ width: "100%" }}
        />
      </Form.Item>
      <DropdownComp />
      <Form.Item {...fields["lastCheck"]} valuePropName="checked">
        <Checkbox className="pr-5">
          Saya menyatakan bahwa data yang diisikan adalah benar dan siap
          mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data
          tersebut.
        </Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => console.log("form", form.getFieldsValue())}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
