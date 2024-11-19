import ContactForm from '../components/ContactForm'


const Contact = () => {
  return (
    <div>
      <div>Contact Us</div>
      <img className="contact-photo" src="public/images/IMG_3110-1024x768.jpg"></img>
      <div >
        <div>
          <h3>Get in touch</h3>
          <ContactForm />
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>
            UK Address: Saltergate Children’s Home, 62 Rhodesia Road, Brampton, Chesterfield, Derbyshire, United Kingdom, S40 3AL
          </p>
          <p>
          Ethiopia Address: Tsege Gebremariam, PO Box 31916, Addis Ababa, Ethiopia
          </p>
          <p>
            Phone: 077 899 75460Phone: 077 899 75460
          </p>
          <p>
            Email: kevinjosephmorley@yahoo.co.uk
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact