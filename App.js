import * as React from 'react';
import { Button, Linking, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

_handleOpenWithLinking = () => {
  Linking.openURL('https://www.abutakka.com.br/pesquisa');
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Pesquisa de Doutorado em Educação UFMT
      </Text>
      <Card>
        <AssetExample />
      </Card>
      <Text style={styles.paragraph}>Rosana Abutakka V. dos Anjos</Text>
      <Text style={styles.paragraph2}>
        Lattes: http://lattes.cnpq.br/0439428369048408
        {'\n'}
        {'\n'}
        ORCID: https://orcid.org/0000-0001-8847-788X
      </Text>
      <Text style={styles.paragraph}>https://www.abutakka.com.br/pesquisa</Text>
      <Button
        title="Acessar a pesquisa"
        onPress={this._handleOpenWithLinking}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph2: {
    margin: 24,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginVertical: 10,
  },
});
