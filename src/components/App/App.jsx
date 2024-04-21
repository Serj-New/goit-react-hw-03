import { useState, useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList'
import initialUsers from '../../users.json'

import css from './App.module.css';

export default function App() {
    const [inputValue, setInputValue] = useState('');
    const [users, setUsers] = useState(() => {
        const storedUsers = JSON.parse(localStorage.getItem("newUsers"));
        return storedUsers !== null ? storedUsers : initialUsers;
    });    

    useEffect(() => {
        localStorage.setItem("newUsers", JSON.stringify(users));
    }, [users]);

    const addUser = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    const filterUsers = users.filter((user) =>
        user.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    const deleteUser = (userId) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    };

    return (
        <div>
            <div className={css.container}>
                <h1>Phonebook</h1>
                <ContactForm onAdd={addUser} />
                <SearchBox value={inputValue} onSearch={setInputValue} />
            </div>
            <ContactList users={filterUsers} onDelete={deleteUser} />
        </div>
    );
}