import * as React from 'react';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { TextoSobre } from './styles'

export default function Arquitetura() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);

  const hideModal = () => setVisible(false);

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal}>
        <TextoSobre>{`
    A arquitetura do projeto 
 consta com o arquivo App.js 
 dando início ao projeto, dentro 
 da pasta src temos o backend 
 conectando o firebase, os 
 componentes do projeto, as 
 telas dentro da pasta pages 
 e os serviços dentro da pasta 
 service, cada tela tem dois 
 arquivos, o index que tem a 
 estrutura e o styles que tem a 
 parte de design de cada tela.
                 `}
             </TextoSobre>
        </Modal>
        <Button style={{marginTop: 30}} onPress={showModal}>
          Arquitetura
        </Button>
      </Portal>
    </Provider>
  );
};