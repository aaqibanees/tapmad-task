import React from 'react';
import {Routes, Route} from 'react-router-dom';
import UserProvider from "./providers/UsersProvider";
import EditUser from "./users/EditUser";
import CreateUser from "./users/CreateUser";
import NoPage from "./noPage";
import Users from "./users/Users";


const Main = () => {
    return (
        <Routes basename={'/tapmad-task'}>
            <Route exact element={<UserProvider />}>
                <Route index element={<Users />} />
                <Route path=':id' element={<EditUser />} />
                <Route path='create' element={<CreateUser />} />
                <Route path='*' element={<NoPage />} />
            </Route>
        </Routes>
    );
};

export default Main;