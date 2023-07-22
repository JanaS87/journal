import { useState } from "react";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton(){
    const [isFavorite, setFavorite] = useState(false);

    return (
        <button className="favorite-btn" onClick={() => {
            setFavorite(!isFavorite);
        }}>
            {isFavorite ? <StarFilled /> : <Star />}
        </button>
    );
}