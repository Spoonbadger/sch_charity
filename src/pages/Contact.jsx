import ContactForm from '../components/ContactForm'


const Contact = () => {
  return (
    <div>
      <div className="contact-image inter-regular">Contact Us</div>
      <div className='contact-form-and-info' >
        <div className="contact-form">
          <h3 style={{ color: 'rgb(102, 102, 102)'}}>Get in touch</h3>
          <ContactForm />
        </div>
        <div className="contact-info ruluko-regular">
          <h3 style={{ color: 'rgb(102, 102, 102)'}}>Contact Us</h3><br/><br/><br/>
          <div>
            UK Address:
          </div>
          <div style={{ color: 'rgb(102, 102, 102)'}}>
            <div style={{ marginTop: 5 }}>Saltergate Children’s Home,</div>
            <div>62 Rhodesia Road,</div>
            <div>Brampton,</div>
            <div>Chesterfield,</div>
            <div>Derbyshire,</div>
            <div>United Kingdom,</div>
            <div>S40 3AL</div>
          </div>
          <br/>
          <div>Ethiopia Address:</div>
          <div style={{ color: 'rgb(102, 102, 102)'}}>
            <div style={{ marginTop: 5 }}>Tsege Gebremariam,</div>
            <div>PO Box 31916,</div>
            <div> Addis Ababa,</div>
            <div> Ethiopia</div><br/>
          </div>
          <p>
            Phone: 077 899 75460
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