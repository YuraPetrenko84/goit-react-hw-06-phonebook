// імпорт dispatch
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// імпорт генератор екшену
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const checkIsInContacts = newName =>
    contacts.some(({ name }) => name.toLowerCase() === newName.toLowerCase());

  // Метод виконується при сабміті форми
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    const isInContacts = checkIsInContacts(name);

    // не додаємо контакт
    if (isInContacts) {
      alert(`"${name}" is already in contacts.`);
      return;
    }

    // викликаємо генератор екшену та передаємо текст завдання для поля payload
    dispatch(addContact(name, number));

    // Очистка форми
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label>
          Phone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
