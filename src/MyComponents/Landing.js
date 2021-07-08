import React from 'react'
import {useState} from 'react';
import axios from 'axios';
function Landing() {
   const [email, setemail] = useState("")
   function submit (e){
	e.preventDefault();
	if (!email){
	alert("pls enter the email") }
	else {
		axios.post('/contact/subs',{email:email})
		.then((res)=>{
			if(res.data.status)
			{
				alert(res.data.message)
			}
		}

		)
	}

   }
   const tagline={
	fontFamily: "Russo One",
	fontStyle: "normal",
	fontWeight: "normal",
	fontSize: "36px",
	lineHeight: "43px"
   }
    return (
   <>
   <div className= "noob-bg">
   	<div className="fixed-button">
 	<button className="get-your-starmap-here"> <a href="/customization">GET YOUR STARMAP </a></button> 
</div>

   <section id="moonlight-section" >
 
		{/* <img className=""   src="/img/bg home.jpg" alt="" id="bg"/> */}
	 
		<img src="/img/mountain-final.png" alt="" id="mountain"/>
		{/* <img src="/img/manishbox.svg" alt="" id=""/> */}
		<div class="home-btn-content">
			<h1 id="text">A UNIQUE GIFT - STAR MAP</h1>
			{/* <h2 id="text">Capture Your Cherished <br/> Memories in a Frame</h2> */}
			<h4 class="home-page-h-four">Capture Your Cherished Memories in a Frame</h4>

			<button class="home-btnn" id="map"><a href="/customization">GET YOUR STARMAP</a></button>
		</div>
		
	</section>

















	<section class="double-img">
		<div class="img-one">
			<img src="img/image 4.jpg" alt="" class="img-ones"/>
		</div>
		<div class="img-two">
			<img src="img/image 5.jpg" alt="" class="img-twos"/>

		</div>
	
	</section>
	<section>

	</section>
	<section id="why-starmapping">
		<h2 class="why-star-heading">Why Starmapping?</h2>
		<div class="why-starmapping">
			<div class="why-description">
				<div class="why-decp">
					<img src="/img/1logo.svg" alt="" class="iconic common-class"/>
					<h3 class="why-decp-heading common-class">High-Quality Prints</h3>
					<p class="why-decp-paragraph common-class">All star maps are professionally designed and printed on high
						resolution
						matte finished art paper that lasts forever.
					</p>
				</div>
				<div class="why-decp">
					<img src="/img/2logo.svg" alt="" class="iconic common-class"/>
					<h3 class="why-decp-heading  common-class">Premium Frames </h3>
					<p class="why-decp-paragraph  common-class">All sky maps are shipped with premium quality acrylic frame that adds
						an
						eye catching charm to its surroundings.
					</p>
				</div>
				<div class="why-decp">
					<img src="/img/3logo.svg" alt="" class="iconic  common-class"/>
					<h3 class="why-decp-heading  common-class">Personalised Maps </h3>
					<p class="why-decp-paragraph  common-class">We accurately design your star map with the help of NASA Astronomical
						Data
						Center Star Catalog.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="gift">
		<div class="star-gift">
			<div class="gift-images">
				<div class="gift-image-one">
					<img src="/img/image 3.jpg" alt="" class="side-img"/>
				</div>
				<div class="gift-image-two">
					<img src="/img/image 2.jpg" alt="" class="side-img"/>

				</div>
			</div>
			<div class="star-gift-content">
				<h3 class="gift-heading">Why gift a star map?</h3>
				<span><img src="/img/Rectangle 33.png" alt="" class="gift-span"/></span>
				<p class="gift-content">Star maps are perfect gifts for birthdays, weddings, anniversaries, baby
					showers, or any other
					significant event in your life you’d like to remember, or even for yourself. It’s unique,
					memorable, and tailored for you.</p>
			</div>
		</div>
	</section>
	<section class="gift">
		<div class="star-gift  star-gift-second  ">

			<div class="star-gift-content-two">
				<h3 class="gift-heading">Significance of the product
				</h3>
				<span><img src="/img/Rectangle 33.png" alt="" class="gift-span"/></span>
				<p class="gift-content">As the name suggests, a starmap locates the position of stars, planets, the
					Moon, and the Sun
					as observed from a specific location at a particular time. These elements of the Solar System
					keep changing from time to time, which makes every star map unique and special. We at
					Starmapping are committed to helping you create a gift that will last a lifetime.</p>
			</div>
			<div class="gift-images-second">
				<div class="gift-image-three">
					<img src="/img/image 3.jpg" alt="" class="side-img"/>
				</div>
				<div class="gift-image-four">
					<img src="/img/image 2.jpg" alt="" class="side-img"/>

				</div>
			</div>
		</div>
	</section>
	<section class="gift">
		<div class="star-gift">
			<div class="gift-images">
				<div class="gift-image-one">
					<img src="/img/image 3.jpg" alt="" class="side-img"/>
				</div>
				<div class="gift-image-two">
					<img src="/img/image 2.jpg" alt="" class="side-img"/>

				</div>
			</div>
			<div class="star-gift-content star-add-div">
				<h3 class="gift-heading">Fast, easy & free delivery</h3>
				<span><img src="/img/Rectangle 33.png" alt="" class="gift-span secont-gift-span"/></span>
				<p class="gift-content">We provide easy, free and quick delivery nationwide. All the products created by
					Starmapping
					are carefully designed. We use frames made from premium quality wood sourced from across
					the country, making our packaging eco-friendly and sustainable.</p>
			</div>
		</div>
	</section>

	<section className="subscribe-sec">
		<h1 className="sub-heading">Subscribe to Newsletter</h1>
		<form onSubmit={submit} className="subscription">
			<input className="sub-form" type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="Email Address" className="sub-email"/>
			<input type="submit" value="SEND" className="sub-btn"/>
		</form>
	</section>
	</div>
   </>
    )
}

export default Landing
