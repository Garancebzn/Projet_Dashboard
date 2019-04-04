import React, { Component } from 'react';

import {Container, Row, Col} from 'reactstrap';



import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './Contact.css';
import Axios from 'axios';

export default class Example extends React.Component {

  state = {
    Artisteliste:[],
    inputNomArtiste :'',
    inputDatedeNaissance:'',
    inputFollowers:'',
    inputAlbums:'',
  }

  onNomArtisteChange = event => {
    this.setState({ inputNomArtiste : event.target.value });
  }

  onNomArtisteSubmit = event => {
    event.preventDefault();

    var requestBody = {
      nom : this.state.inputNomArtiste,
    }

    Axios.post('http://localhost:3000/api/dashboard', requestBody)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  constructor(props) {

    var self=this;

    Axios.get('http://localhost:3000/api/dashboard')
    .then(function (response){
      self.setState({Artisteliste: response.data})
    })
  
    .catch(function(error){
      console.log(error);
    });

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
      <Form>
        <Row form>
      <Col md="4">
     
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

      </Col>

<Col md="4">
      <Form className = "NewAlbum" onSubmit={this.handleSubmit}>
      <h1>Ajouter un Album</h1>
      
        <FormGroup>
          <Label for="titre">Titre de l'album</Label>
          <Input type="text" name="Titre" id="TitreAlbum"  />
        </FormGroup>
        <FormGroup>
          <Label for="Date">Date de sortie</Label>
          <Input
            type="date"
            name="Sortie"
            id="DatedeSortie"

          />
        </FormGroup>

        <FormGroup>
          <Label for="genre">Genre</Label>
          <Input type="text" name="Genre" id="GenreAlbum"  />
        </FormGroup>
        <FormGroup>
          <Label for="urlcover">URL Cover</Label>
          <Input type="text" name="UrlCover" id="UrlCoverAlbum"  />
        </FormGroup>
        <FormGroup>
          <Label for="reftitres">Ref Titres</Label>
          <Input type="text" name="RefTitres" id="RefTitresAlbum"  />
        </FormGroup>

        <Button className="Submit">Submit</Button>
      </Form>
      </Col>


      <Col md="4">
      <Form className = "NewTitre" onSubmit={this.handleSubmit}>

      <h1>Ajouter un Titre</h1>


        <FormGroup>
          <Label for="titrechanson">Titre</Label>
          <Input type="text" name="Titrechanson" id="TitreChanson"  />
        </FormGroup>

        <FormGroup>
          <Label for="duree">Durée</Label>
          <Input
            type="number"
            name="dureechanson"
            id="DureeChanson"

          />
        </FormGroup>
        <FormGroup>
          <Label for="Ecoutes">Ecoutes</Label>
          <Input
            type="number"
            name="ecouteschanson"
            id="EcoutesChanson"

          />
        </FormGroup>
        <FormGroup>
          <Label for="Followers">Mention "j'aime"</Label>
          <Input
            type="number"
            name="nbrjaime"
            id="NbrJaime"

          />
        </FormGroup>
        <FormGroup>
          <Label for="refartistefeat">Featuring</Label>
          <Input type="text" name="Refartistefeat" id="RefArtisteFeat"  />
        </FormGroup>

        <Button className="Submit">Submit</Button>
      </Form>
      </Col>

      </Row>
      </Form>

    );
  }
}
 
 