import React from 'react';
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';


import './Contact.css';


export default class Example extends React.Component {
  
 /* constructor(props) {
  /*super(props);
        this.onnameChange = this.onnameChange.bind(this);
        this.onbirthChange = this.onbirthChange.bind(this);
        this.onfollowersChange = this.onfollowersChange.bind(this);
        this.onAlbumChange = this.onAlbumChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);*/

  state = {
    name_artist :'',
    birth:'',
    followers:'',
    Album:'',
    name_album:'',
    date_sortie: '',
    genre: '',
    cover_picture_url:'',
    name_titre:'',
    durée: '',
    nb_ecoute: '',
    like: ''
  }

  handleChange = event => {
    this.setState({ name_artist: event.target.value });
  }
  handleChange1 = event => {
    this.setState({ birth: event.target.value });
  }
  handleChange2 = event => {
    this.setState({ followers: event.target.value });
  }
  handleChange3 = event => {
    this.setState({ Album: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    /*
    var artists = {
      name_artist: this.state.name_artist,
      birth: this.state.birth,
      followers: this.state.followers,
      Album: this.state.Album
    };*/

    axios.put('http://localhost:3001/artist',{ name_artist: this.state.name_artist,
    birth: this.state.birth,
    followers: this.state.followers,
    Album: this.state.Album })
      .then(res => {
        console.log(this.state.name_artist);
        console.log(res);
        console.log(res.data);
      })
    }

    //axios pour Album


  
  handleChange4 = event => {
    this.setState({ name_album: event.target.value });
  }
  handleChange5 = event => {
    this.setState({ date_sortie: event.target.value });
  }
  handleChange6 = event => {
    this.setState({ genre: event.target.value });
  }
  handleChange7 = event => {
    this.setState({ cover_picture_url: event.target.value });
  }


  handleSubmit1 = event => {
    event.preventDefault();
    
    var albums = {
      name_album: this.state.name_album,
      date_sortie: this.state.date,
      genre: this.state.genre,
      cover_picture_url: this.state.cover_picture_url,
  
    };

    axios.put('http://localhost:3001/album', albums )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  //axios titre


  handleChange8 = event => {
    this.setState({ name_titre: event.target.value });
  }
  handleChange9 = event => {
    this.setState({ nbr_ecoute: event.target.value });
  }
  
  handleChange10 = event => {
    this.setState({ like: event.target.value });
  }
 


  handleSubmit2 = event => {
    event.preventDefault();
    
    var titres = {
      name_titre: this.state.name_titre,
      nb_ecoute: this.state.nb_ecoutes,
      like: this.state.likes,
  
    };

    axios.put('http://localhost:3001/titre', titres )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


    

//}

/*onnameChange(e) {
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
  }*/

  render() {
    return (

      <div className="App-header" >
      <div className="row">
      <div className="col-4">


      <h1>Artiste</h1>
     
      <Form onSubmit={this.handleSubmit}>

     

      
        <FormGroup>
          <Label for="nom">Nom</Label>
          <Input id="name_artist" onChange={this.handleChange}  />
        </FormGroup>
        <FormGroup>
          <Label for="Date">Birth</Label>
          <Input
            id="DatedeNaissance"
            onChange={this.handleChange1}
            
          />
        </FormGroup>
        <FormGroup>
          <Label for="Followers">Followers</Label>
          <Input
           
            id="nbrfollowers"
            onChange={this.handleChange2}
           
          />
        </FormGroup>
       
        <FormGroup>
          <Label for="Albums">Albums</Label>
          <Input id="albums" onChange={this.handleChange3} />
        </FormGroup>
        <Button className="Submit">Submit</Button>
      </Form>

      </div>

      <div className="col-4">
      <Form onSubmit={this.handleSubmit1}>
      <h1>Album</h1>
      
        <FormGroup>
          <Label for="titre">Titre</Label>
          <Input id="TitreAlbum" onChange={this.handleChange4} />
        </FormGroup>
        <FormGroup>
          <Label for="Date">Date de sortie</Label>
          <Input
            id="DatedeSortie" onChange={this.handleChange5}
          />
        </FormGroup>

        <FormGroup>
          <Label for="genre">Genre</Label>
          <Input id="GenreAlbum"  onChange={this.handleChange6}/>
        </FormGroup>
        <FormGroup>
          <Label for="urlcover">URL Cover</Label>
          <Input id="UrlCoverAlbum" onChange={this.handleChange7}  />
        </FormGroup>


        <Button className="Submit">Submit</Button>
      </Form>
      </div>


      <div className="col-4">
      <Form onSubmit={this.handleSubmit2}>

      <h1>Titre</h1>


        <FormGroup>
          <Label for="titrechanson">Titre</Label>
          <Input  id="TitreChanson" onChange={this.handleChange8}  />
        </FormGroup>


        <FormGroup>
          <Label for="Ecoutes">Ecoutes</Label>
          <Input
            id="EcoutesChanson"
            onChange={this.handleChange9}

          />
        </FormGroup>
        <FormGroup>
          <Label for="NbrJaime">Mention "j'aime"</Label>
          <Input
        
            id="NbrJaime"
            onChange={this.handleChange10}

          />
        </FormGroup>


        <Button className="Submit">Submit</Button>
      </Form>
      </div>

      </div>
      </div>

    );
  }
}
 
 