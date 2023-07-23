
import { FiCreditCard } from 'react-icons/fi'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { LuShare } from 'react-icons/lu'
import { CgEditFlipH } from 'react-icons/cg'

export const DropdownList = () => {
    return (
        <div className='dropdown-list'>
                <div className='dropdown-listitems'><span>Edit</span><CgEditFlipH /></div>
                <hr />
                <div className='dropdown-listitems'><span>Courier info</span><FiCreditCard /></div>
                <hr />
                <div className='dropdown-listitems'><span>Share</span><LuShare /></div>
                <hr />
                <div className='dropdown-listitems danger'><span>Remove</span><IoMdRemoveCircleOutline /></div>
              </div>
    )
}

export const ToggleDropdown = () => {
    return (
        <div className='dropdown-list'>
                <div className='dropdown-listitems'><span>Sell</span><CgEditFlipH /></div>
                <hr />
                <div className='dropdown-listitems'><span>Buy</span><FiCreditCard /></div>
              </div>
    )
}