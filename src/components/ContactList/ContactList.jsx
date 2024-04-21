import PropTypes from 'prop-types';
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ users, onDelite }) {
    return (
        <ul className={css.usersList}>
            {users.map((user) => (
                <li key={user.id}  className={css.usersItem}>
                    <Contact user={user} onDelite={onDelite} />
                </li>
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    users: PropTypes.array.isRequired,
    onDelite: PropTypes.func.isRequired
};