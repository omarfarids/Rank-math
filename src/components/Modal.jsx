import React from 'react'
import styled from 'styled-components'



const ModalBody = styled.div`
    position:absolute;
    bottom:-560px;
    left:-650px;
    z-index:2;
    background-color:white;
    margin:10% auto;
    padding:20px;
    width:700px;
    border-radius:50px;
    filter: drop-shadow(0px 59px 55.5px rgba(154,155,176,0.17));
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