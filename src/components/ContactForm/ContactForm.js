import { useState } from 'react';
import { styled } from 'styled-components';
import { AddContactBtn } from '../AddContactBtn/AddContactBtn';

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
`;

const StyledInput = styled.input`
  margin-bottom: 25px;
  padding: 15px 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  align-items: center;
  letter-spacing: 0.07em;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  color: rgba(255, 255, 255);
  line-height: 20px;
`;

export const ContactForm = ({ onSubmit }) => {
  const [name, setNameState] = useState('');
  const [number, setNumberState] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setNameState(value);
        break;
      case 'number':
        setNumberState(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setNameState('');
    setNumberState('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        id="name"
        name="name"
        type="text"
        value={name}
        placeholder="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <StyledInput
        id="number"
        name="number"
        type="tel"
        value={number}
        placeholder="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <AddContactBtn onSubmit={onSubmit}>Add Contact</AddContactBtn>
    </StyledForm>
  );
};
