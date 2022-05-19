import React from 'react';
import './App.css';

class App extends React.Component{

  state = {
    value:'',
    id:'',
    name:'',
    race:'',
    body: ''
  };
  

  getValue = (event) => {
    //console.log('Event: ', event.target.value);

    const id = this.id.value;
    const name = this.name.value;
    const race = this.race.value;

    this.setState({id: id, name: name, race: race})
  }
  
  getDogs = (event) => {
    event.preventDefault();
    const data =fetch('/dogs')
    .then(response => response.json())
    .then(data => console.log(data));

  }

  addDogs = (event) => {
    event.preventDefault();

    const dog = {name: this.name.value, race: this.race.value};

    const data =fetch('/dogs/add',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dog)
    }).then(() => {
      console.log('new dog added');
    })    

  }

  deleteDogs = (event) => {
    event.preventDefault();

    const dog = {id: this.id.value};

    const data =fetch('/dogs/edit',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dog)
    }).then(() => {
      console.log('dog', this.id.value, 'deleted');
    })    
  }

  editDogs = (event) => {
    event.preventDefault();

    const dog = {id: this.id.value, name: this.name.value, race: this.race.value};

    const data =fetch('/dogs/edit',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dog)
    }).then(() => {
      console.log('dog', this.id.value, 'edited');
    })    
  }

  render(){
    
    return(
      <div>
        <header className="App">
        <h1>React Dog Program with Nodejs backend</h1>

        <form action="">
        <div className='App'>
          <p>ID:</p>
            <label htmlFor=''></label>
            <input type="id" onChange = {this.getValue} ref = {(input) => this.id = input}/>
          </div>
          <div>
          <p>Name:</p>
            <label htmlFor=''></label>
            <input type="name" onChange = {this.getValue} ref = {(input) => this.name = input}/>
          </div>
          <div>
          <p>Race:</p>
            <label htmlFor=''></label>
            <input type="race" onChange = {this.getValue} ref = {(input) => this.race = input}/>
          </div>
          <button onClick = {this.getDogs}>Get Dogs</button>
          <button onClick = {this.addDogs}>Add Dogs</button>
          <button onClick = {this.editDogs}>Edit Dogs</button>
          <button onClick = {this.deleteDogs}>Remove Dogs</button>
        </form>
        </header>
      </div>
    );
  }
}

export default App;
