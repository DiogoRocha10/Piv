import React from 'react'
import ImageSlider from 'react-native-image-slider';
import Chat from '../../assets/chat.jpg'
import Diario from '../../assets/diario.jpg'

export default function FAQ() {

  return (
  <ImageSlider images={[
    Chat,
    Diario
  ]}/>
)}