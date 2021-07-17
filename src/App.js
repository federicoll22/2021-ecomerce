import { Card,Button,Image, Icon } from 'semantic-ui-react';
import './App.css';
import Navbar2 from './componentes/Navbar2';
import Inventario from './componentes/Inventario';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)

    this.state={counter:0}
  }

  substrack(){
    this.setState({counter: this.state.counter -1});
  }
  add(){
    this.setState({counter: this.state.counter +1});
  }


  render(){  
    return (
    <div className="App">
      <Navbar2/>
      <Inventario/>
      <Card>
        <Card.Content>
         <h1>COUNTENT</h1>
         <h2>{this.state.counter}</h2>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button onClick={this.substrack.bind(this)}><Icon name='minus'/></Button>
            <Button onClick={this.add.bind(this)}><Icon name='plus'/></Button>
          </div>
        </Card.Content>
      </Card>

    </div>
  );}

}

export default App;
