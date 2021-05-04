import './App.css';
import React, { Component } from "react";
import profilePic from './ProfilePhoto.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    Preson: {
      fullName: 'Harrouche Amir',
      bio: 'https//:www.bio.com',
      profession: 'Web Developer',
      imgSrc: profilePic,
    },
    show: false,
    counter: 0
  };

  incrementCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }
  
  componentDidMount() {
    setInterval(this.incrementCounter, 1000);
  }

  handleClick = () => this.setState({ show: !this.state.show });

  render() {
    const style = { marginTop: "40px" }

    return (
      <div className="App">
        <h1>The component has mounted</h1>
        <h2>{this.state.counter}</h2>
        <div className="row">
          <div className="col-sm-4">
            <label>Click to show the Profile : </label>
          </div>
          <div className="col-sm-2">
            <button className="btn btn-success" onClick={this.handleClick}>
              {(this.state.show) ? "Hide Profile" : "Show Profile"}
            </button>
          </div>
        </div>
        <div className="row" style={style}>
          {(this.state.show) && 
            <div className="Container">
                <div className="imgProfile">
                    <img src={this.state.Preson.imgSrc} className="imgProfileImg" alt=""/>
                </div>
                <div className="name">
                    <h1>{this.state.Preson.fullName}</h1>
                </div>
                <div className="bio">
                    <label>Bio :</label>
                    <p>{this.state.Preson.bio}</p>
                </div>
                <div className="profession">
                    <label>Profession :</label>
                    <p>{this.state.Preson.profession}</p>
                </div>
            </div>
          } 
        </div>
      </div>
    );
  }
}

export default App;

