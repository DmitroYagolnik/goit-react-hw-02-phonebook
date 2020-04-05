import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactItem.module.css';

const ContactItem = ({ elem, handleDelete }) => {
  const { id, name, number } = elem;
  return (
    <li id={id} className={style.contactItem}>
      <span>
        {name}: {number}
      </span>
      <button
        type="button"
        className={style.deleteButton}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  elem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactItem;
