import Image from 'next/image'
import React from 'react'
import { StyleMaintenence } from './maintenence.style'
import maintenenceImg from '../../../../public/under-Maintenance.png'

const Maintenence = () => {
  return (
    <StyleMaintenence>
        <Image src={maintenenceImg} alt={''}></Image>
    </StyleMaintenence>
  )
}

export default Maintenence