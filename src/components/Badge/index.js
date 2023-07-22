
export default function Badge({children, isActive}) {
    return (
        <span className={`badge${isActive ? " badge--active" : ""}`}></span>
    );

}