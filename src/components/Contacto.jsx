import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';



const Contacto = () => {

  const [status, setStatus] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sir2z7j', 'template_ssw8wxj', form.current, '5xAo0GJGmMeTfUPd1')
      .then((result) => {
        // eslint-disable-next-line
        console.log(result.text);
        e.target.reset();
        setStatus('Mensaje enviado con éxito');
      }, (error) => {
        // eslint-disable-next-line
        console.log(error.text);
        setStatus('No se envió el mensaje');
      });
  };

  useEffect(() => {
    if (status === 'Mensaje enviado con éxito') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const renderAlert = () => (
    <div className="alert">
      <small>Mensaje enviado con éxito</small>
    </div>
  );
  
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="Contact-Info">
        <h1 className="title" id="Contact">Despacho Parroquial</h1>
        <div className="Contact-Container">
          <div className="Contact-Paragraph">
            <p className="presentation">
              Si deseas ofrecer una misa puedes dejarnos tus datos a continuación, <br/>
              luego deberás acercarte a la parróquia o capilla más cercana <br/>
              para dejar tu limosna. <br/><br/>
              Acécate a la parroquia para realizar cualquier trámite o consulta. <br/>
            </p>
          </div>
        </div>
        <ul className="data">
          <div className="data-container">
            <li className="liname">
              <label htmlFor="name" className="namelabel">
                Nombre y Apellido
                <br />
                <input type="text" id="name" name="user_name" placeholder="Francisco" maxLength="30" required />
              </label>
            </li>
            <li className="liemail">
              <label htmlFor="email" className="emaillabel">
                Email
                <br />
                <input type="email" id="email" name="user_email" placeholder="example@mail.com" required />
              </label>
            </li>
            <li className="liphone">
              <label htmlFor="phone" className="namelabel">
                Celular
                <br />
                <input type="text" id="phone" name="user_phone" placeholder="+593 000 000 000" maxLength="15" required />
              </label>
            </li>
          </div>
          <li className="limsg">
            <div className="msglabel">Mensaje</div>
            <textarea className="Text" name="message" maxLength="500" required placeholder="Déjanos tu mensaje..." />
          </li>
        </ul>
      </div>
      {status && renderAlert()}
      <button type="submit" className="button">Enviar</button>
    </form>
  )
}

export default Contacto
