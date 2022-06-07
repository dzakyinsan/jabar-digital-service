const Fields = () => {
  const rules = [{ required: true, message: "Field cannot be empty!" }];

  const validatorCheck = (record: any, value: any) => {
    if (
      (record.field === "age" && value >= 25) ||
      (record.field === "address" && value.length <= 255)
    ) {
      return Promise.resolve();
    }

    if (record.field === "age")
      return Promise.reject(new Error("Age must be equal or greater than 25!"));
    else if (record.field === "address")
      return Promise.reject(
        new Error("Address must be equal or less than 255 character!")
      );
  };

  const fields: { [key: string]: any } = {
    name: {
      label: "Name",
      name: "name",
      labelAlign: "left",
      rules,
    },
    nik: {
      label: "NIK",
      name: "nik",
      labelAlign: "left",
      rules,
    },
    kk: {
      label: "Nomor Kartu Keluarga",
      name: "kk",
      labelAlign: "left",
      rules,
    },
    ktp: {
      label: "Foto ktp",
      name: "ktp",
      labelAlign: "left",
      rules,
    },
    fileKk: {
      label: "Foto Kartu Keluarga",
      name: "fileKk",
      labelAlign: "left",
      rules,
    },
    age: {
      label: "Umur",
      name: "age",
      labelAlign: "left",
      rules: [{ required: true, validator: validatorCheck }],
    },
    gender: {
      label: "Jenis Kelamin",
      name: "gender",
      labelAlign: "left",
      rules,
    },
    province: {
      label: "Provinsi",
      name: "province",
      labelAlign: "left",
      rules,
    },
    city: {
      label: "Kota/Kab",
      name: "city",
      labelAlign: "left",
      rules,
    },
    district: {
      label: "Kecamatan",
      name: "district",
      labelAlign: "left",
      rules,
    },
    village: {
      label: "Kelurahan",
      name: "village",
      labelAlign: "left",
      rules,
    },
    address: {
      label: "Alamat",
      name: "address",
      labelAlign: "left",
      rules: [{ required: true, validator: validatorCheck }],
    },
    rt: {
      label: "RT",
      name: "rt",
      labelAlign: "left",
      rules,
    },
    rw: {
      label: "RW",
      name: "rw",
      labelAlign: "left",
      rules,
    },
    incomeBefore: {
      label: "Penghasilan Sebelum Pandemi",
      name: "incomeBefore",
      labelAlign: "left",
      rules,
    },
    incomeAfter: {
      label: "Penghasilan Sesudah Pandemi",
      name: "incomeAfter",
      labelAlign: "left",
      rules,
    },
    reason: {
      label: "Alasan",
      name: "reason",
      labelAlign: "left",
      rules,
    },
    lastCheck: {
      label: "check",
      name: "lastCheck",
      labelAlign: "left",
      className: "hide",
      rules,
    },
  };

  return fields;
};

export default Fields;
