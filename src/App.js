import React from 'react';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './API/index';

class App extends React.Component{

  state={
    data:{},
  }

  async componentDidMount(){
    const data = await fetchData();
    console.log(data);
    this.setState({data:data})
  }
  render(){
    const {data} = this.state;
  return(
    <div className='container'>
      <Cards data={data}/>
      <CountryPicker />
      <Charts />
      
    </div>
  )
}
}


  

export default App;