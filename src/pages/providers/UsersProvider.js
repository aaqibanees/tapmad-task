import React, {useState} from "react";
import {Outlet} from 'react-router-dom';
import {generateRandomNDigits} from "../../utils";

const UserProvider = () => {
    const [users, setUsers] = useState([
        {
            id: generateRandomNDigits(5),
            username: 'Aaqib',
            picture: 'https://placehold.co/250x250?font=lato&text=Tapmad\\nTask',
            gender: 'Male',
            address: 'Unknown Address'
        },
        {
            id: generateRandomNDigits(5),
            username: 'Ahsan',
            picture: 'https://placehold.co/250x250?font=lato&text=Tapmad\\nTask',
            gender: 'Male',
            address: 'Unknown Address'
        },
        {
            id: generateRandomNDigits(5),
            username: 'Saad',
            picture: 'https://placehold.co/250x250?font=lato&text=Tapmad\\nTask',
            gender: 'Male',
            address: 'Unknown Address'
        },
        {
            id: generateRandomNDigits(5),
            username: 'Khurram',
            picture: 'https://placehold.co/250x250?font=lato&text=Tapmad\\nTask',
            gender: 'Male',
            address: 'Unknown Address'
        },
        {
            id: generateRandomNDigits(5),
            username: 'Zulfiqar',
            picture: 'https://placehold.co/150x150?font=lato&text=Tapmad\\nTask',
            gender: 'Male',
            address: 'Unknown Address'
        },
        {
            id: generateRandomNDigits(5),
            username: 'Jaffer',
            picture: 'https://placehold.co/250x250?font=lato&text=Tapmad\\nTask',
            gender: 'Male',
            address: 'Unknown Address'
        }
    ]);

    const addUser = (user) => {
        setUsers(users => [...users, user]);
    };

    const removeUser = (user) => {
        setUsers((users) => users.filter(u => u.id !== user));
    };

    const editUser = (user) => {
        setUsers(users.map(u => {
            if (+u.id === +user.id) {
                return user;
            } else {
                return u;
            }
        }));
    };

    return <Outlet context={{ users, addUser, removeUser, editUser }} />
};

export default UserProvider;