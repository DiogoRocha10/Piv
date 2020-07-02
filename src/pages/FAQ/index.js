import React from 'react'
import ImageSlider from 'react-native-image-slider';
import Chat from '../../assets/chat.jpg'
import Diario from '../../assets/diario.jpg'
import Meditar from '../../assets/meditando.jpg'

export default function FAQ() {

  return (
    // Slide de imagens explicativas
  <ImageSlider images={[
    Chat,
    Diario,
    Meditar
  ]}/>
)}