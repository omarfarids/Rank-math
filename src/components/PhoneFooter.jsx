import React from 'react'
import Container from './Container'
import {BiSolidWallet} from 'react-icons/bi'
import {FaCompass} from 'react-icons/fa'
import {IoIosNotifications} from 'react-icons/io'
import {AiTwotoneSetting} from 'react-icons/ai'

const PhoneFooter = () => {
  return (
    <Container className={'phone-footer'} coHeight={'400px'} coWidth={'1453px'} radias={'0 0 150px 150px'}>
        <div className='footer-btns'>
            <button className='btn active'><BiSolidWallet /></button>
            <button className='btn'><FaCompass /></button>
            <button className='btn'><IoIosNotifications /></button>
            <button className='btn'><AiTwotoneSetting /></button>
        </div>
        <button className='back-btn'></button>
    </Container>
  )
}

export default PhoneFooter