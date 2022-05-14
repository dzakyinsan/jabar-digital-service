import BaseListComponent from "../../components/baseList";

import "./../style.scss";

const ArtistListComponent = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      // render: text => <a>{text}</a>,
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
      title: "Listener",
      key: "listener",
      dataIndex: "listener",
    },
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
    },
  ];

  return (
    <div className="top-list">
      <div className="main-body">
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
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistListComponent;
