import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Form, Label, Input, Error, FormBtn } from './Form.styled';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore'
    )
    .max(16)
    .required(),
  number: Yup.string()
    .min(5)
    .max(16)
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be at digits and can contain spaces, dashes, parentheses and can start with +'
    )

    .required(),
});

export const ContactsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = ({ name, number }) => {
    const isDuplicated = contacts.some(
      i => i.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicated) {
      alert(`"${name}" is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="name">
        Name
        <Input id="name" {...register('name')} type="text" />
        <Error>{errors.name?.message}</Error>
      </Label>
      <Label htmlFor="number">
        Number
        <Input id="number" {...register('number')} type="tel" />
        <Error>{errors.number?.message}</Error>
      </Label>
      <FormBtn type="submit">Add contact</FormBtn>
    </Form>
  );
};
