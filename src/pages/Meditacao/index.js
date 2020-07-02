import React from 'react';
import { StyleSheet, View, Platform} from 'react-native';
import WebView from 'react-native-webview';
import { Container, Content, Accordion} from "native-base";


export default function Meditacao() {
  
// ARRAY COM INFORMAÇÕES
  const dataArray = [
    { title: "Saiba Mais", content: "Nesse vídeo você vai ter um passo a passo para aprender a meditar, que vai ajudar você a relaxar e tratar a ansiedade" }
  ]

  return (
    <Container>
      <View style={{ height: 900 }}>

          {/* Iframe do youtube */}
          <WebView
            source={{uri: 'https://youtu.be/XPkgWybChBo' }}
          />

          {/* Botão com efeito de sanfona */}
          <Content padder>
              <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
          </Content>
      </View>

    </Container>

);}

const styles = StyleSheet.create({

WebViewContainer: {

marginTop: (Platform.OS == 'android') ? 20 : 0,

}

});