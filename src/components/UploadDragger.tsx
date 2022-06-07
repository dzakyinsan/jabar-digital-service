import { useState } from "react";
import { Form, Upload, message } from "antd";
import { InboxOutlined, FileOutlined } from "@ant-design/icons";
import Fields from "./Fields";
import "./styles.scss";

const fields = Fields();

const UploadDragger = (props: { form: any; name: string }) => {
  const [image, setImage] = useState<{ name: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const normFile = (e: { file: any; fileList: any }) => {
    if (e.file.status === "uploading") {
      setLoading(true);
    } else if (e.file.status === "error") {
      // use error status or dummy upload purpose
      props.form.setFieldsValue({ [props.name]: e.file });
      setLoading(false);
      setImage(e.file);
      return e?.fileList;
    }
  };

  function isImage(file: any) {
    const isJpgOrPng =
      (file.type === "image/jpeg" ||
        file.type === "image/jpg" ||
        file.type === "image/png") &&
      file.size <= 2000000;
    const maxSize = file.size >= 2000000;

    if (maxSize) {
      setImage(null);
      message.error(`${file.name} file is over than 2mb`);
    } else if (!isJpgOrPng) {
      setImage(null);
      message.error(`${file.name} is not image file`);
    }
    return isJpgOrPng as boolean;
  }

  return (
    <div className={`upload-dragger ${image && "active"} mb-4`}>
      <Form.Item
        {...fields[`${props.name}`]}
        getValueFromEvent={normFile}
        noStyle
      >
        <Upload.Dragger
          name="file"
          action="/upload.do"
          showUploadList={false}
          multiple={false}
          beforeUpload={isImage}
        >
          <p className="ant-upload-drag-icon">
            {image ? <FileOutlined /> : <InboxOutlined />}
          </p>
          {image && image.name}
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Upload.Dragger>
      </Form.Item>
    </div>
  );
};

export default UploadDragger;
