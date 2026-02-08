import { useEffect } from 'react'
import '../static/app.css'

const Donate = () => {

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://js.stripe.com/v3/buy-button.js"
    script.async = true;
    document.body.appendChild(script)
  
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className='donate-container'>
      <div className='donate-imagine ruluko-regular'>
        Imagine...
      </div>
      <div className='donate-text-container ruluko-regular'>
        <h3 className="donate-text-title ruluko-regular">Your Help Is Needed</h3>
        <p>
          Imagine a life without food, shelter and education. By donating as little as £1 a week you can give a child like Amanuel a bright future. More than that you can be part of their upbringing – their Christmas, birthdays and even progress at school. You will also have a unique opportunity to learn about life in another culture.
        </p>
        <p>
          A number of organisations support our work including The Rotary Club and the churches of St Paul and St Thomas in Chesterfield. Contributions are also received from generous donors and all the proceeds from the sale of our book go towards providing for our children. The book is called ‘Inside Eritrea – A Volunteer in East Africa’ and is available on Amazon or direct from the charity.
        </p>
        <p>
          All our donors receive regular updates and photographs of the children they sponsor. They can even telephone and speak to the children and in some cases have actually visited them in Ethiopia. If you are ever in Addis Ababa please drop in!
        </p>
        
      </div>

      <script async
        src="https://js.stripe.com/v3/buy-button.js">
      </script>

      <stripe-buy-button
        buy-button-id="buy_btn_1QNev4GvxyfGgiW73yLSGUlh"
        publishable-key="pk_live_51QNeO9GvxyfGgiW718Uh2NT6Vaou841UnTwsVR1tMpIfj45yZtzWloyGPwOi3OvVx5dhgSAebEAgVHvwwv6i2GJF00856yqhaC"
      >
      </stripe-buy-button>

      <div>
        <iframe loading="lazy" width="352" height="60" src="https://www.givey.com/embeds/SCH/donate?size=medium" style={{ border: 'none' }}></iframe>
      </div>
      
      <br/><p className='cheques-text'>
          Cheques payable to Saltergate Children’s Home, Ethiopia
        </p>
        <p>
          Standing Orders:
        </p>
        <p>
          Sort Code 20 20 50
        </p>
        <p>
          Account Number 03248003
        </p>
        <img className='donate-photo' src='/images/beb048e7-2d49-4c24-ab93-782100983a02.webp'></img>
    </div>
  )
}

export default Donate