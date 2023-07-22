import "./Entry.css";
import FavoriteButton from "../FavoriteButton";

export default function Entry({motto, notes, date}) {
    return (
        <article className="entry">
            <time className="entry__date">{date}</time>
            <div className="entry__content">
                <div className="motto-container">
                    <h2>"{motto}"</h2>
                    <FavoriteButton />                    
                </div>
                <p className="notes">{notes}</p>
            </div>
        </article>
    );

}