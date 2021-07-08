import React from 'react'

function Footer() {
    return (
        <div className="" >
         	<footer>
		<div class="footer-logo">
			<div class="footer-lgo">
				<img src="/img/footerlogo.svg" alt=""/><br/><span><img src="/img/Rectangle 33.png" alt="" class="footer-span"/></span>
			</div>
			
			<ul class="footer-ul">
				<li class="footer-icons"><img src="/img/facebook.svg" alt="" class="fb-icon"/> </li>
				<li class="footer-icons"><img src="/img/whatsapp.svg" alt="" class="fb-icon" /></li>
				<li class="footer-icons"><img src="/img/instagram.svg" alt="" class="fb-icon"/></li>
			</ul>
		</div>
		<div class="footer-imp">
			<h3 class="footer-heading">Important Information</h3>
			<span><img src="/img/Rectangle 33.png" alt="" class="imp-span"/></span>
			<ul className="bitch">
			<a href="/contact"><li class="imp-pages">Contact</li> </a>
			<a href="/work"><li class="imp-pages">How it works</li> </a>
			<a href="/privacy"><li class="imp-pages">Privacy Policy</li></a>
			<a href="/cookies"><li class="imp-pages">Cookie Policy</li></a>
			<a href="/terms"><li class="imp-pages"> Terms and Condition</li></a>
			<a href="/return"><li class="imp-pages">Return & Cancellation</li></a>
			</ul>
		</div>
		<div class="footer-payment-option">
			<h3 class="footer-heading">Secure payment and personal info</h3>
			<span><img src="/img/Rectangle 33.png" alt="" class="pay-span"/></span>
			<div class="big-images">
				<img src="/img/mcafee.svg" alt="" class="big-payment-option-one"/>
				<img src="/img/ssl.svg" alt="" class="big-payment-option-two"/>
				<img src="/img/paypal.svg" alt="" class="big-payment-option-three"/>
			</div>
			<div class="short-images">
				
				<img src="/img/visa.svg" alt="" class="small-payment-option"/>
				<img src="/img/mastercard.svg" alt="" class="small-payment-option"/>
				<img src="/img/american.svg" alt="" class="small-payment-option"/>
				<img src="/img/stripe.svg" alt="" class="small-payment-option"/>
				<img src="/img/paypalsmall.svg" alt="" class="small-payment-option"/>
			</div>
		</div>
		{/* <h1 style={{color:"black"}}>Developed by <a href=""> Cretmark</a></h1> */}
	</footer>

        </div>
    )
}

export default Footer
