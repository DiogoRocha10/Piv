import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Location from 'expo-location';
import { StyleSheet, Dimensions} from 'react-native';
import { Container, FormInput, Form, SubmitButton } from './styles';


export default function Mapa() {
  //Posição inicial do mapa
  const [localizacaoInicial, setLocalizacaoInicial] = useState({
    latitude: -28.26533573,
    longitude: -52.3996577,
    latitudeDelta: 0.050,
    longitudeDelta: 0.050,

  });

  const [pesquisa, setPesquisa] = useState(null)
  const [pesquisaTxt, setPesquisaTxt] = useState("")
  const [myPosition, seMyposition] = useState(null);

  const getMyPosition = async () => {
    let { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permissão de acesso a localização negado!");
    } else {
      await Location.getCurrentPositionAsync({})
        .then(retorno => seMyposition(retorno.coords))
        .catch(error => Alert.alert("Erro ao acessar o GPS!"))
    }
  };

  const pesquisaLatLong = async (endereco) => {
   let posicao = await Location.geocodeAsync(endereco)
   .then(resultado => setPesquisa(resultado[0]))
   .catch(erro => console.log(erro))
  }

  useEffect(() => {
    getMyPosition();
    pesquisaLatLong("prefeitura de passo fundo")

  }, []);

  return (
    <Container>
      <Form>
        <FormInput
            icon="search"
            autoCorrect={true}
            autoCapitalize="none"
            placeholder="Pesquise a clínica!"
            value={pesquisaTxt}
            onChangeText={texto => setPesquisaTxt(texto)}
        />
        <SubmitButton>
          <Icon name="search" size={20} color="#FFF" onPress={() => pesquisaLatLong(pesquisaTxt)} />
        </SubmitButton>

      </Form>
       
      <MapView 
      style={styles.mapStyle}
      initialRegion={localizacaoInicial}
      region={localizacaoInicial}
      >
        {
          myPosition ? <Marker
            coordinate={myPosition}
            title={"Onde eu estou!"}
            description={"Minha Casa"}
          />

          : null}
        {
          pesquisa ? <Marker
            coordinate={pesquisa}
            title={pesquisaTxt}
            description={""}
          />

          : null}

    </MapView>
    </Container>
  );
}

const styles = StyleSheet.create({
mapStyle: {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
},
});