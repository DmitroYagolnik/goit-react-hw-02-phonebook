import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    addNewContact: PropTypes.func.isRequired,
    findContact: PropTypes.func.isRequired,
  };

  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const { addNewContact, findContact } = this.props;
    const { name, number } = this.state;
    const checkDoubleContact = findContact(name);

    if (!checkDoubleContact) {
      const newContact = { name, number, id: uuidv4() };
      addNewContact(newContact);
      this.setState({
        ...INITIAL_STATE,
      });
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <form
        className={style.ContactFormContainer}
        onSubmit={this.handleSubmitForm}
      >
        <label className={style.labelContainer}>
          Name
          <input
            type="text"
            name="name"
            className={style.inputForm}
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className={style.labelContainer}>
          Number
          <input
            type="tel"
            name="number"
            placeholder="Enter number"
            className={style.inputForm}
            value={number}
            onChange={this.handleChange}
            pattern="^(\+?\d{1,3}\(?-?\s?\d{2,3}\)?-?\s?)?\d{3}-?\s?\d{2}-?\s?\d{2}$"
            required
          />
        </label>
        <button type="submit" className={style.submitButton}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
