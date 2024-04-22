import PropTypes from 'prop-types';
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ users, onDelete }) {
    return (
        <ul className={css.usersList}>
            {users.map((user) => (
                <li key={user.id}  className={css.usersItem}>
                    <Contact user={user} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};