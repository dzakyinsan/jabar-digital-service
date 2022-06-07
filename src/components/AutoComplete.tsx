import { useState } from "react";
import { AutoComplete } from "antd";

const AutoCompleteComp = (props: { form: any; name: string }) => {
  const [options, setOptions] = useState<any[]>();

  function fetchData(val: string | "") {
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/${apiRequest(
        props.name
      )}.json`
    )
      .then((response) => response.json())
      .then((provinces) =>
        provinces.filter((prov: any) =>
          prov.name.toLowerCase().includes(val.toLowerCase())
        )
      )
      .then((res) => {
        const adjustRes = res.map((val: any) => ({
          label: val.name,
          value: val.name,
          id: val.id,
        }));
        setOptions(adjustRes);
      });
  }

  function apiRequest(name: string) {
    const provincesId = props.form.getFieldValue("provinceId");
    const cityId = props.form.getFieldValue("cityId");
    const districtId = props.form.getFieldValue("districtId");

    switch (name) {
      case "province":
        return "provinces";
      case "city":
        return `regencies/${provincesId}`;
      case "district":
        return `districts/${cityId}`;
      case "village":
        return `villages/${districtId}`;
    }
  }

  function onSearch(val: string) {
    if (val.length > 2) {
      fetchData(val);
    }
  }

  function onSelect(data: string, opt: any) {
    props.form.setFieldsValue({ [props.name]: opt.value,[`${props.name}Id`]: opt.id });
  }

  return (
    <AutoComplete
      options={options}
      onSelect={(val: string, opt: any) => onSelect(val, opt)}
      onSearch={onSearch}
      placeholder="Masukkan Disini"
      onFocus={() => fetchData("")}
    />
  );
};

export default AutoCompleteComp;
