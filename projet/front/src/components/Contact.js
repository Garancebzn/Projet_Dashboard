import React, { Component } from 'react';

import {Container, Row, Col} from 'reactstrap';



import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './Contact.css';
import Axios from 'axios';

export default class Example extends React.Component {
  
  constructor(props) {
  super(props);
        this.onnameChange = this.onnameChange.bind(this);
        this.onbirthChange = this.onbirthChange.bind(this);
        this.onfollowersChange = this.onfollowersChange.bind(this);
        this.onAlbumChange = this.onAlbumChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

  state = {
    name :'',
    birth:'',
    followers:'',
    Album:'',
  }
}

onnameChange(e) {
  this.setState({
      name: e.target.value
  });
}
onbirthChange(e) {
  this.setState({
      birth: e.target.value
  });
}
onfollowersChange(e) {
  this.setState({
      followers: e.target.value
  });
}
onAlbumChange(e) {
  this.setState({
      Album: e.target.value
  });
}
onSubmit(e) {
  e.preventDefault();
  const serverport = {
      name: this.state.name,
      birth: this.state.birth,
      followers: this.state.followers,
      Album: this.state.Album,
  }
  axios.post('http://localhost:3001/serverport/dashboard', serverport)
  .then(res => console.log(res.data));
  
  this.setState({
      name: '',
      birth: '',
      followers: '',
      Album: ''
  });
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

      <div className="App-header" >
      <div className="row">
      <div className="col-4">
    
     
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

      <div className="col-4">
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
      </div>


      <div className="col-4">
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
      </div>

      </div>
      </div>

    );
  }
}
 
 