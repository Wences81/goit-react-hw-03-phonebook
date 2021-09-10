import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Label, Input, Button } from "./ContactForm.styled";

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameId = uuidv4();
  telId = uuidv4();

  handleSubmit = (e) => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.resetState();
  };

  handleNameChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  resetState = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameId}>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            id={this.nameId}
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </Label>

        <Label htmlFor={this.telId}>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            id={this.telId}
            value={this.state.number}
            onChange={this.handleNameChange}
          />
        </Label>

        <Button type="submit">Add to contacts</Button>
      </Form>
    );
  }
}

export default ContactForm;
