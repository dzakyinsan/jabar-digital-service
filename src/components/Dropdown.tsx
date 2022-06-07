import { useState } from "react";
import { Divider, Input, Select, Space, Typography, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Fields from "./Fields";

const { Option } = Select;
const fields = Fields();
const defaultItems = [
  "Kehilangan pekerjaan",
  "Kepala keluarga terdampak atau korban Covid-19",
  "Tergolong fakir/miskin semenjak sebelum Covid-19",
];

let index = 0;

const DropdownComp = () => {
  const [items, setItems] = useState(defaultItems);
  const [name, setName] = useState("");

  const onNameChange = (event: any) => {
    setName(event.target.value);
  };

  const addItem = (e: any) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
  };

  return (
    <Form.Item {...fields["reason"]} hasFeedback>
      <Select
        style={{ width: "100%" }}
        placeholder="Alasan membutuhkan Bansos"
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider style={{ margin: "8px 0" }} />
            <Space align="center" style={{ padding: "0 8px 4px" }}>
              <Input
                placeholder="Please enter item"
                value={name}
                onChange={onNameChange}
              />
              <Typography.Link
                onClick={addItem}
                style={{ whiteSpace: "nowrap" }}
              >
                <PlusOutlined /> Lainnya
              </Typography.Link>
            </Space>
          </>
        )}
      >
        {items.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default DropdownComp;
