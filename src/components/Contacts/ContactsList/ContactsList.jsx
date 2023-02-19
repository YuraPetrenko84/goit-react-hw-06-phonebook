import { useDispatch, useSelector } from 'react-redux';
import { remoteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from '../Contact/Contact';
import { List, Item, Button } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  if (!contacts.length) return;

  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filtredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Contact name={name} number={number} />
          <Button
            type="button"
            onClick={() => {
              dispatch(remoteContact(id));
            }}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
