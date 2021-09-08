import React from "react";
import PropTypes from "prop-types";
import { Button, List, Name, Item } from "./ContactList.styled";

const ContactList = ({ contacts, onDeleteContacts }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Name>
          {name} : {number}
        </Name>
        <Button onClick={() => onDeleteContacts(id)}>Delete</Button>
      </Item>
    ))}
  </List>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContacts: PropTypes.func,
};
