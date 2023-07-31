import React from 'react'
import telegram  from '../assets/TELEGRAM1.png'
import instagram  from '../assets/instagram png (1).png'
import facebook  from '../assets/facebook.png'

function ContactUs() {
  return (
    <>
    <div className='instagramlink' style={{display: "flex"}}>
    <figure>
        <a rel="noopener"  target = "_blank" className ="instagram_hyperlink" href="https://instagram.com/humsafarbhai_since2014?igshid=MzNlNGNkZWQ4Mg==">
        <img src = {instagram} className='image'/></a>
    </figure>
</div>
<div className='telegramlink'>
    <figure>
        <a rel="noopener"  target = "_blank" className ="facebook_link" href="https://www.facebook.com/HUMSAFARBHAII?mibextid=ZbWKwL">
        <img src = {facebook} className='image'/></a>
    </figure>
</div>
<div className='telegramlink'>
    <figure>
        <a rel="noopener"  target = "_blank" className ="telegram_hyperlink" href="https://t.me/+m0i4xltrEzQzZWI9">
        <img src ={telegram} className='image'/></a>
    </figure>
</div>

</>
  )
}

export default ContactUs
