import React from 'react'
import ButtonField from '../ButtonField'

function Profilebuttons() {
  return (
    <div className='profle_change_btns'>
        <ButtonField variant="contained" value="Save Changes" color="success" className="desktopBtns"/> 
        <ButtonField variant="contained" color="secondary" value="Change Password" className="desktopBtns"/> 
        <ButtonField variant="contained" value="Leave Family" color="error" className="desktopBtns"/> 
        <ButtonField variant="contained" value="Edit Profile" className="mobileBtns"/> 
    </div>
  )
}

export default Profilebuttons
