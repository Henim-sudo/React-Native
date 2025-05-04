import { Image, useColorScheme } from 'react-native'
import React from 'react'

import Venom2 from '../assets/My_Images/Venom2.jpg'
import Venom3 from '../assets/My_Images/Venom3.jpg'


const ThemedLogo = ({...props}) => {
    const colorScheme = useColorScheme()

    const logo = colorScheme === 'dark' ? Venom3 : Venom3
  return (
   <Image source={logo}{...props}/>
  )     
}

export default ThemedLogo
