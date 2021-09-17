import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "../Form/ContactForm";
import ContactList from "../List/ContactList";
import Filter from "../Filter/Filter";
import { Title } from "./App.styled";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = (name, number) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState((prevState) => {
      const duplicateContact = this.state.contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      );
      if (duplicateContact) {
        alert(`${name} is already in contacts`);
        return { ...prevState };
      }
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    parsedContacts && this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Title>Contacts</Title>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getFilteredContacts()}
          onDeleteContacts={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
