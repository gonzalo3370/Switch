import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default class App extends React.Component {
  state = {encendido: false}

  handleValueChangeLuz = cambio => this.setState({encendido: cambio})
  //handleValueChangeLuz = encendido => this.setState({encendido})
                  // como son iguales en el json se puede omitir el valor
  render() {
    return (
      <View style={styles.container}>
        <Text> Switch: {this.state.encendido.toString()} </Text>
        <Switch
          value={this.state.encendido}
          onValueChange={this.handleValueChangeLuz}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
