import css from './ContactList.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/contacts-slice';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
