import React from 'react';
import './ContactList.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  const dispatch = useDispatch();

  return (
    <>
      <ul className="contact__list">
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id} className="contact__item">
            <p className="contact__name">
              {name}: {number}
            </p>
            <button
              className="contact__button"
              type="buttone"
              onClick={() => dispatch(deleteContact(id))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
