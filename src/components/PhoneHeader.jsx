import React , { useState } from 'react'
import Container from "./Container";
import { LuSignalHigh } from 'react-icons/lu'
import { FiCreditCard } from 'react-icons/fi'
import { AiOutlineWifi } from 'react-icons/ai'
import { FaBatteryFull } from 'react-icons/fa'
import { IoIosArrowBack , IoMdRemoveCircleOutline } from 'react-icons/io'
import { LuShare } from 'react-icons/lu'
import { CgEditFlipH } from 'react-icons/cg'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Modal from './Modal';
import { DropdownList } from './Dropdowns';


const PhoneHeader = () => {
  const [showModal , setShowModal] = useState(false)

  const handleCloseModal = () =>{
    setShowModal(!showModal)
  }


  return (
    <div>
    <Container className={'phone-header'} coHeight={'500px'} coWidth={'1453px'} radias={'150px 150px 0 0'}>
          <div className="phone-header_icons">
            <p>9:45</p>
            <div>
              <LuSignalHigh />
              <AiOutlineWifi />
              <FaBatteryFull />
            </div>
          </div>
          <div className="phone-header_text">
            <IoIosArrowBack />
            <p>Bitcoin Wallet</p>
            <button className='dropdown-btn' onClick={()=>{setShowModal(!showModal)}}><BsThreeDotsVertical />
            <Modal handleCloseModal={handleCloseModal} showModal={showModal}>
              <DropdownList />
            </Modal>
            </button>
          </div>
        </Container>
      </div>
  )
}



export default PhoneHeader