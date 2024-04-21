import PropTypes from 'prop-types';

import css from "./Contact.module.css";

export default function Contact({
    user: {
        id,
        name,
        number
    }, onDelite
}) {
    return (
        <div className={css.userInfo}>
            <div className={css.userWrap}>
                <p className={css.name}>{name}</p>
                <p className={css.number}>{number}</p>
            </div>
            <button className={css.btnContact} onClick={() => onDelite(id)} >Delite</button>
        </div>
    );
}

Contact.propTypes = {
    user: PropTypes.object,
};