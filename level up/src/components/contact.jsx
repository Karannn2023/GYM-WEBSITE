import Footer from "./footer";
function contact() {
  return (
    <>
      <div className="contact_us">
        <h1>Contact Us</h1>
        <form action="">
          <input type="text" placeholder="Enter Your Name" />
          <br />
          <input type="email" placeholder="Enter Your Email" />
          <br />

          <input type="number" placeholder="Enter Your Number" />
          <br />

          <textarea placeholder="Enter Your Message" />
          <br />
          <button className="contact_btn" id="message_btn">
            Send Message
          </button>
          <button className="contact_btn" id="call_btn">
            Start a Call
          </button>
        </form>
      </div>
      <iframe
        id="google_map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55839.543256398676!2d77.68447191839172!3d28.98821691044624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c65829d4183bf%3A0x29ed868ae82af008!2sAesthetik%20Fitness%20Gym!5e0!3m2!1sen!2sin!4v1709566933000!5m2!1sen!2sin"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </>
  );
}
export default contact;
