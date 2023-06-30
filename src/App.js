import { useState, useEffect } from 'react';
import { Filter } from './components/Filter';
import { ContactForm } from './components/ContactForm';
import { Section } from './components/Section';
import { ContactsList } from './components/ContactsList';
import { nanoid } from 'nanoid';
import { Container } from './components/Container';
import { styled } from 'styled-components';

const StyledWrapper = styled.div``;

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  const onSubmitHandler = (name, number) => {
    const checkIdentity = name.toLowerCase();
    if (contacts.find(el => el.name.toLowerCase() === checkIdentity)) {
      return alert('the contact is already exists!');
    }

    setContact(prevState => [{ id: nanoid(), name, number }, ...prevState]);
  };

  const handleFilterName = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    setContact(prevState => prevState.filter(el => el.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const setFilteredContacts = () => {
    console.log(contacts);
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <Section>
      <Container>
        <StyledWrapper className="wrapper_1">
          <ContactForm onSubmit={onSubmitHandler} />
          <Filter filter={filter} addFilter={handleFilterName} />
        </StyledWrapper>
        <div className="list_wrapper">
          <StyledWrapper className="wrapper_2">
            <ContactsList
              contacts={setFilteredContacts()}
              onDeleteContact={deleteContact}
            />
          </StyledWrapper>
        </div>
      </Container>
    </Section>
  );
};
