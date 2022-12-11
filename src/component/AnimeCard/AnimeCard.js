import { Link } from "react-router-dom";
import "./AnimeCard.scss";
import { AiFillStar } from "react-icons/ai";

export default function AnimeCard({ id, title, image, averageScore }) {
  return (
    <li className="Card">
      <Link
        to={{
          pathname: `/detail/${id}`,
        }}
      >
        <div className="Card__title">{title}</div>

        <img className="Card__poster" src={image} alt="poster" />

        <div className="Card__average">
          <span>
            <AiFillStar className="star" size={32} color="#FFD700"></AiFillStar>
            <div className="Card__averageTitle">{averageScore}/100</div>
          </span>
        </div>
      </Link>
    </li>
  );
}
