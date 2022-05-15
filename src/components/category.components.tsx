import { useHistory } from "react-router-dom";

interface ICategory {
  image: string;
  title: string;
  route: string;
}

export default function Category(props: ICategory) {
  const router = useHistory();

  function redirectTo(route: string) {
    return router.push(route);
  }

  return (
    <div className="image" onClick={() => redirectTo(props.route)}>
      <div id="zoom-In">
        <figure>
          <img src={props.image} alt={props.image} />
          <div className="overlay">
            <div className="title">
              <h2>{props.title}</h2>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}
