import React from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import { computeWindowedRenderLimits } from 'react-native/Libraries/Lists/VirtualizeUtils';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      feed:[
        {id:'1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com'},
        {id:'2', nome: 'Joao', idade: 22, email: 'joao@majoaotheus.com'},
        {id:'3', nome: 'Henrique', idade: 39, email: 'Henrique@majoaotheus.com'},
        {id:'4', nome: 'Paulo', idade: 23, email: 'paulo@majoaotheus.com'},
        {id:'5', nome: 'Jose', idade: 12, email: 'jose@majoaotheus.com'},


      ]
    }
  }


  render(){
    return(
      <View style={styles.container}>

        <FlatList
        data={this.state.feed}
        //keyExtractor={ (item) => item.id }
        renderItem={ ({item}) => < Pessoa data={item} />}>


        </FlatList>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  areaPessoa:{
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15

  },
  textoPessoa:{
    color: '#FFF',
    fontSize: 20

  }

})

export default App;

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa} >

      <Text style={styles.textoPessoa} >Nome:  {this.props.data.nome} </Text>
      <Text style={styles.textoPessoa}>Idade:  {this.props.data.idade} </Text>
      <Text style={styles.textoPessoa}>E-mail: {this.props.data.email} </Text>

      </View>
    );
  }

}