import { Card, CardContent, CardHeader } from '@mui/material'
import React from 'react'
import './privacy.css'
import telegram  from '../assets/TELEGRAM1.png'
function Privacy() {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
    <Card className='header' style={{width:"80%"}}>
        <CardContent style={{textAlign:"center"}}><h2>Privacy Policy</h2></CardContent>
        <p style={{fontSize:"22px"}}>
        At Sports-fantasy.in, we take your privacy seriously. 
        This privacy policy explains how we collect, use, and
         protect your personal information when you use our website.
        </p>
        <h4><strong>Information We Collect</strong></h4> 
          <p style={{fontSize:"22px"}}>
          When you use our website, we may collect certain personal information from you, such as your name, email address, and payment information
          . We may also collect non-personal information, such as your IP address and browser type.
          </p>
          <h4><strong>How We Use Your Information?</strong></h4>
          <p style={{fontSize:"22px"}}>
          We may use your personal information to provide you with the services and products that you have 
          requested, to communicate with you about our services and products, and to improve our website and 
          services. We may also use your information to customize your experience on our website.
          </p>
          <h4><strong>How We Protect Your Information?</strong></h4>
          <p style={{fontSize:"22px"}}>
          We take appropriate measures to protect your personal information from unauthorized access, use, or disclosure. We use a variety of security measures,
           including encryption and authentication tools, to protect your information.
          </p>
          <h4><strong>Sharing Your Information</strong></h4>
          <p style={{fontSize:"22px"}}>
          We may share your personal information with our service providers, such as payment processors and website hosts, who help us provide our services to you. We may also share your information with law
        enforcement or government agencies if required by law.
          </p>
          <h4><strong>Cookies</strong></h4>
          <p style={{fontSize:"22px"}}>
          We may use cookies and similar technologies to collect information about your usage of our website. Cookies are small files that are stored on your device when you visit our website. You can choose to disable cookies in your browser settings, 
          but this may limit your ability to use certain features of our website.
          </p>
          <h4><strong>Changes to Our Privacy Policy</strong></h4>
          <p style={{fontSize:"22px"}}>
          We may update our privacy policy from time to time. If we make significant changes to our policy,
           we will notify 
          you by email or by posting a notice on our website.
          </p>
          <h4><strong>Contact Us</strong></h4>
          <p style={{fontSize:"22px"}}>
          If you have any questions about our privacy policy,
           please contact us at contactsportsfantasy@gmail.com
          </p>
          <h4><strong>Our WhatsApp Number:</strong>+91 9771961070</h4>
          <div className='telegramlink'>
    <figure>
        <a rel="noopener"  target = "_blank" className ="telegram_hyperlink" href={"https://t.me/+m0i4xltrEzQzZWI9"}>
        <img src = {telegram} className='image'/></a>
        <figcaption>
            <strong>
            <a rel="noopener"  target = "_blank" className ="telegram_hyperlink" href={"https://t.me/+m0i4xltrEzQzZWI9"}>JOIN TELEGRAM LINK</a>
            </strong>
        </figcaption>
    </figure>
</div>
<div>
	<footer aria-label="Site" itemtype="https://schema.org/WPFooter" itemscope="">
	<div class="site">
		<div class="copyrightitems">
					<b>© 2023 Humsafar</b>
        </div>
			</div>
		</footer>
		</div>
    </Card>
    </div>
  )
}

export default Privacy
