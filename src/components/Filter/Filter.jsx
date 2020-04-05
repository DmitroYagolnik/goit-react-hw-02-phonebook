import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ handleFilter }) => {
  return (
    <label className={style.filterLabel}>
      Find contact by name
      <input
        type="search"
        className={style.filterInput}
        onChange={handleFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
