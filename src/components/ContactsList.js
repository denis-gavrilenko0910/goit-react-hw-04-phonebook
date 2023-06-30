import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ContactsItem } from './ContactsItem';

const StyledContactsList = styled.ul`
  padding: 0;
  width: 80%;
  margin: auto;
  .contact_name {
    width: 100%;
    max-width: 250px;
  }
  :not(:last-child) {
    margin-bottom: 10px;
  }
  .contacts_item {
    flex-wrap: wrap;
  }
  .contacts_item > p {
    margin: 0;
  }
  .phone_link {
    color: #000;
  }
`;
const StyledDeleteBtn = styled.button`
  margin-left: auto;
`;

export const ContactsList = ({ contacts, onDeleteContact }) => {
  // console.log(contacts);
  return (
    <StyledContactsList>
      {contacts?.map(({ id, name, number }) => {
        return (
          <ContactsItem key={id}>
            <p className="contact_name">{name}</p>
            <a className="phone_link" href="tel:{number}">
              {number}
            </a>
            <StyledDeleteBtn
              className="styled_button"
              onClick={() => onDeleteContact(id)}
            >
              Delete contact
            </StyledDeleteBtn>
          </ContactsItem>
        );
      })}
    </StyledContactsList>
  );
};

ContactsList.propTypes = {
  // contacts: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired,
  //     number: PropTypes.string.isRequired,
  //   })
  // ),
  onDeleteContact: PropTypes.func.isRequired,
};
