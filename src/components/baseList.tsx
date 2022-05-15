import { useEffect, useState } from "react";
import { Table, Input } from "antd";
import './baseList.scss'

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
  responseSearch: string;
  type:string;
}

const BaseListComponent = (props: IBaseListProps) => {
  const [dataList, setDataList] = useState<IData[]>([]);

  const getDataList = async () => {
    const res = await fetch(props.api);
    const data = await res.json();

    if (data) {
      setDataList(_.get(data, props.responseApi));
    }
  };

  const getSearch = async (val: string) => {
    let api
    if(props.type === 'artists'){
      api = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${val}&api_key=1ea7c721c802722ddf3f4c5ef79077ce&format=json`
    } else {
      api = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${val}&api_key=1ea7c721c802722ddf3f4c5ef79077ce&format=json`
    }

    const res = await fetch(api);
    const data = await res.json();

    if (data) {
      setDataList(_.get(data, props.responseSearch));
    }
  }; 

  const onSearch =(val: string)=>{
    if(val) getSearch(val)
    else getDataList()
  }

  useEffect(() => {
    getDataList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="base-list">
      <Search
        className="search"
        placeholder="input search text"
        onSearch={(val) => onSearch(val)}
        style={{ width: 200 }}
      />
      <Table columns={props.columns} dataSource={dataList} />
    </div>
  );
};

export default BaseListComponent;
