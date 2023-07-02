import styled from 'styled-components';

const StyledContactsItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  box-shadow: rgb(114 114 114) 0px 3px 14px 0px,
    rgb(255 254 197) 0px 0px 5px 5px, rgb(82 69 71 / 35%) 0px -2px 6px 0px inset;
  border-radius: 8px;
`;

export const ContactsItem = ({ children }) => {
  return (
    <StyledContactsItem className="contacts_item">
      {children}
    </StyledContactsItem>
  );
};
