import "./Contact.css";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import logo from "../../assets/images/logo.jpeg";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";



function Contact() {

const [loading, setLoading] = useState(false);
const [formData, setFormData] = useState({
name: "",
email: "",
subject: "",
message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const sendEmail = (e) => {
  e.preventDefault();

  setLoading(true);

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setLoading(false);
    })
    .catch((error) => {
      console.error(error);

      alert("Failed to send message.");

      setLoading(false);
    });
};


  return (

<section
id="contact"
className="contact-section"
>



<div className="container">

<motion.div

className="contact-heading text-center"

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

viewport={{
once:true
}}

>

<span className="contact-tag">

GET IN TOUCH

</span>

<h2>

Let's Build

<span>

Something Amazing

</span>

</h2>

<p>

I'm currently looking for
<strong> Full Stack Developer </strong>
opportunities where I can contribute,
learn and build impactful products.

Let's connect and create something great together.

</p>

</motion.div>

<div className="row g-5 align-items-start">

{/* LEFT */}

<div className="col-lg-5">

<motion.div

className="contact-card"

initial={{
opacity:0,
x:-80
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

viewport={{
once:true
}}

whileHover={{
y:-8
}}

>

<div className="profile-circle">

<img src={logo} alt="Dattatray Savalkar" />

</div>

<h3>

Dattatray Savalkar

</h3>

<h5>

Full Stack Developer

</h5>

<p className="contact-intro">

As a Full Stack Developer,
I specialize in creating user-friendly,
high-performance web applications with modern technologies.
I am passionate about solving real-world challenges, writing clean and scalable code, and delivering seamless user experiences through thoughtful design and development.


</p>

<div className="contact-info">

<div className="info-item">

<FaEnvelope />

<div>

<span>Email</span>

<p>

dattatraysavalkar1705@gmail.com

</p>

</div>

</div>

<div className="info-item">

<FaPhoneAlt />

<div>

<span>Phone</span>

<p>

+91 8530694748 (WhatsApp)

</p>

</div>

</div>

<div className="info-item">

<FaMapMarkerAlt />

<div>

<span>Location</span>

<p>
Kirloskarwadi, Sangli District, Maharashtra, India .

</p>

</div>

</div>

</div>





</motion.div>


</div>

{/* RIGHT */}

<div className="col-lg-7 ">

  <motion.div

    className="contact-form-card"

    initial={{
      opacity:0,
      x:80
    }}

    whileInView={{
      opacity:1,
      x:0
    }}

    transition={{
      duration:.8
    }}

    viewport={{
      once:true
    }}

  >

    <h3>

      Send Me A Message

    </h3>

    <p>

I'm currently open to Full Stack Developer internships and entry-level opportunities. If you have a role that matches my skills or would like to discuss a potential collaboration, I'd love to hear from you.

    </p>

 <form onSubmit={sendEmail}>

      <div className="row">

        <div className="col-md-6 mb-4 ">

         <input
  type="text"
  name="name"
  placeholder="Your Name"
  className="form-control"
  value={formData.name}
  onChange={handleChange}
  required
/>

        </div>

        <div className="col-md-6 mb-4">

<input
  type="email"
  name="email"
  placeholder="Email ID"
  className="form-control"
  value={formData.email}
  onChange={handleChange}
  required
/>

        </div>

      </div>

 <input 
  type="text"
  name="subject"
  placeholder="Write Subject"
  className="form-control mb-4 "
  value={formData.subject}
  onChange={handleChange}
  required
/>

    <textarea
  rows="7"
  name="message"
  placeholder="Write your message..."
  className="form-control mb-4"
  value={formData.message}
  onChange={handleChange}
  required
></textarea>

      <button
  className="send-btn"
  type="submit"
  disabled={loading}
>
  <FaPaperPlane />

  {loading ? "Sending..." : "Send Message"}
</button>

    </form>

  </motion.div>

</div>

</div>

{/* CTA */}

<motion.div
  className="cta-section"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <h2>Let's Build the Future Together</h2>

  <p>
    I'm actively seeking <strong>Full Stack Developer</strong> internships and
    entry-level opportunities where I can contribute, learn, and grow.
    If you're hiring or know of an opportunity, I'd love to connect.
  </p>

 <a
  href="#contact"
  className="cta-btn"
>
  Contact Me
</a>
</motion.div>
{/* FOOTER */}

<footer className="portfolio-footer">






<div className="footer-line"></div>

<p className="copyright">

© {new Date().getFullYear()} Dattatray Savalkar.
<br />
Built with ❤️ using React.js, Framer Motion & Bootstrap.

</p>
<div className="footer-social">

<a
  href="https://github.com/Dattatray1705"
  target="_blank"
  rel="noreferrer"
>
  <FaGithub />
</a>



<a
href="https://www.linkedin.com/in/dattatray-savalkar-687103416/"
target="_blank"
rel="noreferrer"
>

<FaLinkedin />

</a>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=dattatraysavalkar1705@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>

<FaEnvelope />

</a>

</div>
</footer>


</div>

</section>

  );

}

export default Contact;