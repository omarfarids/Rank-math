import React from 'react'
import styled from 'styled-components'



const ModalBody = styled.div`
position: absolute;
bottom: -80px;
left: 75px;
z-index: 2;
padding: 10px;
width: 170px;
border-radius: 10px;
background-color: #ffffff;
filter: drop-shadow(0px -59px 55.5px rgba(154,155,176,0.17));

`


const Modal = ({showModal , handleCloseModal,children}) => {

  return (
    <div>
        {showModal && 
            <ModalBody onClick={(e)=>e.stopPropagation()}>
                {children}
            </ModalBody>}
    </div>
  )
}

export default Modal