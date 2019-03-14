import React, { Component } from 'react';



import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './Contact.css';

export default class Example extends React.Component {

  constructor(props) {
    super(props);

  this.state = {value: ''};
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Un nouvel artiste a été ajouté');
    event.preventDefault();
  }

  render() {
    return (
      <div>
     
      <Form className = "NewArtist" onSubmit={this.handleSubmit}>

      <h1>Ajouter un Artiste</h1>

      
        <FormGroup>
          <Label for="nom">Nom de l'artiste</Label>
          <Input type="text" name="Nom" id="NomArtiste"  />
        </FormGroup>
        <FormGroup>
          <Label for="Date">Date de Naissance</Label>
          <Input
            type="date"
            name="Naissance"
            id="DatedeNaissance"
            
          />
        </FormGroup>
        <FormGroup>
          <Label for="Followers">Followers</Label>
          <Input
            type="number"
            name="followers"
            id="nbrfollowers"
           
          />
        </FormGroup>
       
        <FormGroup>
          <Label for="Albums">Albums</Label>
          <Input type="textarea" name="album" id="albums" />
        </FormGroup>
        <Button className="Submit">Submit</Button>
      </Form>
      </div>
    );
  }
}
 
 