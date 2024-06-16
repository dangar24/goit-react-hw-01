import css from "./profile.module.css"

export default function Profile({name, tag, location, image, stats:{followers, views, likes} }) {
    return <>
        <div className={css.container}>
            <div className={css.position}>
                <img
                    src={image}
                    alt="User avatar"
                    className={css.img}
                />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.list}>
                <li className={css.item}>
                    <span className={css.itemTitle}>Followers</span>
                    <span className={css.itemText}>{followers}</span>
                </li>
                <li className={css.item}>
                    <span className={css.itemTitle}>Views</span>
                    <span className={css.itemText}>{views}</span>
                </li>
                <li className={css.lastItem}>
                    <span className={css.itemTitle}>Likes</span>
                    <span className={css.itemText}>{likes}</span>
                </li>
            </ul>
        </div>
    </>
}