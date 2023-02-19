// redux
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
// Components
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>

      {contacts.length > 0 && (
        <>
          <Filter></Filter>
          <ContactList />
        </>
      )}
    </div>
  );
}
