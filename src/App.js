import React from 'react';
import './App.css';
import axios from 'axios';
import Albums from './components/Albums';
import { Col, Row } from 'react-styled-flexboxgrid';
import moment from 'moment';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistName: '',
      albums: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  formatDates(albums) {
    return albums.map(album => {
        let releaseYear = moment(album.releaseDate).year();
        album.releaseYear = releaseYear;
    })
  }

  fetchAlbums() {
    let formattedName = this.state.artistName.replace(/\s/g, '+');
    
    axios.get(`https://itunes.apple.com/search?term=${formattedName}&entity=album`)
      .then(res => {
        const results = res.data.results;
        let albums = [];

        results.forEach(album => 
            albums.push({
              artistName: album.artistName,
              albumCover: album.artworkUrl100,
              releaseDate: album.releaseDate,
              collectionName: album.collectionName
            })
          );
        
        this.formatDates(albums);
        this.setState({
            albums
        });
        console.log(albums);
      });
  }

  handleChange(event) {
    this.setState({artistName: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchAlbums();
  }

  render () {
    return (
      <Col>
        <Row>
          <div className="App-header">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="artistSearch">Search Artist  </label>
                <input className="form-control" id="artistSearch" placeholder="name" value={this.state.artistName} onChange={this.handleChange} ></input>
              </div>
            </form>
          </div>
        </Row>
        <Row>
          <Albums albums={this.state.albums} />
        </Row>
      </Col>
      );
    }
}

export default App;
