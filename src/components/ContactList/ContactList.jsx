import React from 'react';
import _map from 'lodash/map';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <>
      {contacts.length > 0 && (
        <ul>
          {_map(contacts, elem => {
            return (
              <ContactItem
                elem={elem}
                handleDelete={handleDelete}
                key={elem.id}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
