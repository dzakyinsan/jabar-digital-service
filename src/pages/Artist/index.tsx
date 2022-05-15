import {useHistory} from 'react-router-dom'
import { LeftCircleFilled } from '@ant-design/icons';
import BaseListComponent from "../../components/baseList";

import "./../style.scss";

const ArtistListComponent = () => {
  const router = useHistory()

  const columns = [
    {
      title: "Title",
      dataIndex: "name",
      key: "name",
      width: '30%',
      render: (val:string, record:any) =>(
        <div className="d-flex col-name">
          <img src={record.image[0]['#text']} alt='img' className="mr-3"/>
          <p>{val}</p>
        </div>
      ),
    },
    {
      title: "Play Count",
      dataIndex: "playcount",
      key: "playcount",
    },
    {
      title: "Streamable",
      dataIndex: "streamable",
      key: "streamable",
    },
    {
      title: "Listeners",
      key: "listeners",
      dataIndex: "listeners",
    },
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
      render:(val:string)=> <a href={val}>{val}</a>
    },
  ];

  return (
    <div className="top-list">
      <div className="main-body">
       <div className='back-btn'><LeftCircleFilled onClick={()=>router.push('/')}/></div> 
        <div className="header-list">
          <img
            src={require("./../../assets/artist.jpg")}
            alt={"test"}
            height={"200px"}
          />
          <div className="ml-4">
            <p>PLAYLIST</p>
            <h1>Hot Top Artist</h1>
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
              "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=1ea7c721c802722ddf3f4c5ef79077ce&format=json"
            }
            responseApi= 'artists.artist'
            responseSearch = 'results.artistmatches.artist'
            type='artists'
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistListComponent;
