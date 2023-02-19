import { GlobalStyle } from './GlobalStyles';
import { Section } from './Section/Section';
import { ContactsForm } from './Form/Form';
import { ContactsList } from './Contacts/ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <Section>
        <ContactsForm />
      </Section>
      <Section title="Contacts">
        <>
          <Filter />
          <ContactsList />
        </>
      </Section>
    </>
  );
};
