import React from 'react'
import { Text } from 'react-native'
import { Container } from './styles'
import ImageSlider from 'react-native-image-slider';
import Perfil from '../../assets/perfil.jpg'

export default function FAQ() {

  return (
  <ImageSlider images={[
    Perfil,
    'http://placeimg.com/640/480/any',
    'http://placeimg.com/640/480/any'
  ]}/>
)}