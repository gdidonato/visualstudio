import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import Pessoas from './src/pessoas/pessoas';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id:'1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com'},
        {id:'2', nome: 'Joao', idade: 22, email: 'joao@majoaotheus.com'},
        {id:'3', nome: 'Henrique', idade: 39, email: 'Henrique@majoaotheus.com'},
        {id:'4', nome: 'Paulo', idade: 23, email: 'paulo@majoaotheus.com'},
        {id:'5', nome: 'Paulo', idade: 23, email: 'paulo@majoaotheus.com'},


      ]
    }
  }


  render(){
    return(
      <View style={styles.container}>

        <FlatList
        data={this.state.feed}
        keyExtractor={ (item) => item.id }
        renderItem={ ({item}) => < Pessoas data={item} />}>


        </FlatList>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }

})

export default App;

