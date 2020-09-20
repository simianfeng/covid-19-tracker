import React from 'react';
import Cards from './components/Cards/Cards';
import Charts from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './API/index';
import styles from './App.css';
import coronaImage from './image/image.png';

class App extends React.Component{

  state={
    data:{},
    country:'',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }

  handleCountryChange = async(country)=>{
    const fetchedData=await fetchData(country);
    this.setState({data:fetchedData, country:country});

  }


  render(){
    const {data, country} = this.state;
  return(
    <div className='container'>
      <img className={styles.image} src={coronaImage} alt="COVID-19"/>
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country}/>
      
    </div>
  )
}
}


  

export default App;