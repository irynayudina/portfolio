import React, {useState} from 'react'
import'./Contact.scss'
import axios from 'axios';
const Contact = (props) => {
  const sendForm = () => {
    // this method doesnt work and is not used, i took from documentation https://formsubmit.co
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post('https://formsubmit.co/ajax/yudinaira4444@gmail.com', {
      name: "FormSubmit",
      message: "I'm from Devro LABS"
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }
  const [textInp, setTextInp] = useState("");
  const [subject, setSubject] = useState("")
  const [from, setFrom] = useState("")
  const textHandler = (e)=>{
    setTextInp(e.target.value)
  }
  const subjectHandler = (e)=>{
    setSubject(e.target.value)
  }
  const fromHandler = (e)=>{
    setFrom(e.target.value)
  }
  return (
    <div>
      <div className="section-name">
        <h1>Contact</h1>
      </div>
      <div className="content">
        <div className="content-contact">
          <div className="contact-links">
            <div className="contact-link">
              <h1>GitHub</h1>{" "}
              <a href="https://github.com/irynayudina" target={"_blank"}>
                https://github.com/irynayudina
              </a>
            </div>
            <div className="contact-link">
              <h1>LinkedIn</h1>{" "}
              <a href="https://www.linkedin.com/in/iryna-yudina-i4444/" target={"_blank"}>
                https://www.linkedin.com/in/iryna-yudina-i4444/
              </a>
            </div>
            <div className="contact-link">
              <h1>Gmail</h1>{" "}
              <a href="mailto:yudinaira4444@gmail.com" >
                yudinaira4444@gmail.com
              </a>
            </div>
            <div className="contact-link">
              <h1>Telegram</h1>{" "}
              <a href="https://telegram.me/irin423" target="_blank">
                +380681497779
              </a>
            </div>
          </div>
          <div className="form-wrap">
            <h1 style={{ float: "left", color: "#4a70ec" }}>Email me</h1>
            {/* before using u need to register on the site
             every field shoulld have name property 
            and shouldnt be one of reserveed names like from _subject etc https://formsubmit.co/help
            adding enctype="text/plain" to the form properties will always send empty forms so don't*/}
            <form id="f" className="contact-form" action="https://formsubmit.co/yudinaira4444@gmail.com" method="post" >
              <div className={`form-container ${props.theme}`}>
                <div className="form-container-header">
                  <input
                    name="sender"
                    className="form-container-input"
                    type="text"
                    placeholder="From"
                    onChange={fromHandler} 
                    value={from}
                  />
                  <input
                    name="subject"
                    className="form-container-input-subject"
                    type="text"
                    placeholder="Subject"
                    onChange={subjectHandler} 
                    value={subject}
                  />
                </div>
                <div className="form-container-message">
                  <textarea placeholder="Message"
                    name="message"
                    onChange={textHandler} 
                    value={textInp}
                  />
                </div>
                <div className="form-container-button">
                  <button type="submit">
                    <h2>Send</h2>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact