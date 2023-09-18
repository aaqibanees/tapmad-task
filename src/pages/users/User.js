import React from "react";
import {useOutletContext, useNavigate} from "react-router-dom";
import styles from "../../css/styles.module.css";

const User = ({user}) => {
    const {removeUser} = useOutletContext();
    const navigate = useNavigate();

    const handleRemove = () => {
        removeUser(user.id);
    };

    const handleRedirect = () => {
        navigate(`${user.id}`, {
            state: { user : user }
        });
    };

    return (
        <div className={styles.card}>
            <img src={user.picture} className={styles.card__img} alt={user.username} />
            <div className={styles.card__body}>
                <h2 className={styles.card__title}>{user.username}</h2>
                <p className={styles.card__description}>{user.address}</p>
                <h3 className={styles.card__gender}>{user.gender}</h3>
                <div className={styles.btn__area}>
                    <button onClick={handleRedirect}>Modify</button>
                    <button onClick={handleRemove}>&times;</button>
                </div>
            </div>
        </div>
    );
};

export default User;