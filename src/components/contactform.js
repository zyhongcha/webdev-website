import React from 'react'


const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

function ContactForm() {
  return (
    <div class="#form">
  <h3>Interested in teaming up? Let's work together! <a class="form__link" href="mailto:zyhongcha@gmail.com">Contact me</a>.</h3>
    </div>
  )
}
export default ContactForm;