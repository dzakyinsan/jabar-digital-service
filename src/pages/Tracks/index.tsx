import {useHistory} from 'react-router-dom'
import { LeftCircleFilled } from '@ant-design/icons';
import BaseListComponent from "../../components/baseList";

import "./../style.scss";

const TrackListComponent = () => {
  const router = useHistory()

  const columns = [
    {
      title: "Title",
      dataIndex: "name",
      key: "name",
      width: '35%',
      render: (val:string, record:any) =>(
        <div className="d-flex col-name">
          <img src={record.image[0]['#text']} alt='img' className="mr-3"/>
          <p>{val}</p>
        </div>
      ),
    },
    {
      title: "Artist",
      dataIndex: "artist",
      key: "artist",
      width: '20%',
      render: (val: any) => <p>{val.name}</p>
    },
    {
      title: "Play Count",
      dataIndex: "playcount",
      key: "playcount",
      width: '20%',
    },
    {
      title: "Listeners",
      key: "listeners",
      dataIndex: "listeners",
      width: '20%',
    },
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
      width: '100px',
      render:(val:string)=> <a href={val}>{val}</a>
    },
  ];

  return (
    <div className="top-list">
      <div className="main-body">
       <div className='back-btn'><LeftCircleFilled onClick={()=>router.push('/')}/></div> 
        <div className="header-list">
          <img
            src={require("./../../assets/tracks.jpg")}
            alt={"test"}
            height={"200px"}
          />
          <div className="ml-4">
            <p>PLAYLIST</p>
            <h1>Hot Track Artist</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum reiciendis laudantium ea accusamus perferendis,
              sapiente eos ullam eius reprehenderit quaerat? Perferendis quas,
              pariatur quod dolor eveniet placeat modi impedit cumque.
            </span>
          </div>
        </div>
        <div className="body-list">
          <BaseListComponent
            columns={columns}
            api={
              "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=1ea7c721c802722ddf3f4c5ef79077ce&format=json"
            }
            responseApi= 'tracks.track'
            responseSearch = 'results.trackmatches.track'
            type='tracks'
          />
        </div>
      </div>
    </div>
  );
};

export default TrackListComponent;
