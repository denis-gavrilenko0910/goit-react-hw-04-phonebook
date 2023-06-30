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
  const [contacts, setContact] = useState([]);

  const onSubmitHandler = data => {
    const checkIdentity = data.toLowerCase();
    if (contacts.find(el => el.toLowerCase() === checkIdentity)) {
      return alert('the contact is already exists!');
    }

    setContact(prevState => [nanoid(), ...data, ...prevState]);
  };

  const handleFilterName = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    setContact(prevState => prevState.contacts.filter(el => el.id !== id));
  };

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storedContacts);
    // console.log(parsedContacts);
    if (parsedContacts) {
      setContact(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const setFilteredContacts = () => {
    // console.log(contacts);
    return contacts.filter(contact => {
      // console.log(contact);
      return contact.toLowerCase().includes(filter.toLowerCase());
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
