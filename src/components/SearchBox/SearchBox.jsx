import PropTypes from 'prop-types';

import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch}) {
    return (
        <div className={css.sbWrap}>
            <p>Finde contacts by name</p>
            <input
            type="text"
            value={value}
            onChange={(e) => onSearch(e.target.value)}
            className={css.searchBox} />
        </div>
    );
}

SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
};