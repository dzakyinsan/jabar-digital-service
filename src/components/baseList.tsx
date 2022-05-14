import { useEffect, useState } from "react";
import { Table, Input } from "antd";

const { Search } = Input;

var _ = require("lodash");

interface IData {
  name: string;
  listeners: string;
  mbid: string;
  playcount: string;
  streamable: string;
  url: string;
}

interface IBaseListProps {
  columns: any;
  api: string;
  responseApi: string;
}

const BaseListComponent = (props: IBaseListProps) => {
  const [dataList, setDataList] = useState<IData[]>([]);
  const [filteredArtist, setFilteredArtist] = useState<IData[]>([]);
  const [search, setSearch] = useState<string>("");

  const getDataList = async () => {
    const res = await fetch(props.api);
    const data = await res.json();

    if (data) {
      setDataList(_.get(data, props.responseApi));
    }
  };

  useEffect(() => {
    setFilteredArtist(dataList?.filter((artist) => artist.name.toLowerCase().includes(search.toLowerCase())))
  }, [dataList, search]);

  useEffect(() => {
    getDataList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Search
        placeholder="input search text"
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: 200 }}
      />
      <Table columns={props.columns} dataSource={filteredArtist} />
    </>
  );
};

export default BaseListComponent;
