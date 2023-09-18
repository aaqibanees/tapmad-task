import {Link, useOutletContext} from "react-router-dom";
import React from "react";
import User from "./User";
import styles from "../../css/styles.module.css";

const Users = () => {
    const {users} = useOutletContext();

    return (
        ( users.length > 0 ? <div className={styles.wrapper}>
            {users.map((user) => (
                <User user={user} key={user.id} />
            ))} </div> : <div className={'userNotFound'}>
            <h2>User Not Found, Please <Link to='/create'>Click Here</Link> to Create New User</h2>
        </div> )
    );
};

export default Users;