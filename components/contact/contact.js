import {
  ContactContainer,
  ContactSection,
  FormCol,
  FormRow,
  StyledForm,
} from "./contact.styles";
import { StyledButton } from "../../styles/styledbtn.styles";
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';

const inititalState = {
  name: '',
  email: '',
  message: '',
}

const Contact = () => {
  const recaptchaKey = '6LeyZuscAAAAACNo-yLQQhW4y7lEEbK857LVoXQS';
  const recaptchaRef = useRef();

  const [state, setState] = useState(inititalState);
  const [submitting, setSubmitting] = useState(false);
  const [recaptchaToken, setReCaptchaToken] = useState();
  const [message, setMessage] = useState();
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (recaptchaToken !== null) {
      grecaptcha.execute();

      emailjs.sendForm('service_mwihdnt', 'template_l7wqe3k', form.current, 'user_aRyqERSIkRT7xK8O4txAM')
        .then((result) => {
          setMessage({
            className: 'bg-green-500',
            text: 'Thanks! I\'ll be in contact shortly!'
          })
          e.target.reset();
          recaptchaRef.current.reset();
          console.log(result.text);
        })
    } else {
      setMessage({
        className: 'bg-red-500',
        text: 'Sorry, there was a problem. Please try again!'
      })
      console.log(recaptchaToken);
    }
    setSubmitting(false);
  }

  const handleInput = e => {
    e.preventDefault();
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;


    setState(prev => ({ ...prev, [inputName]: value }))
  }

  const updateRecaptchaToken = (token) => {
    setReCaptchaToken(token = 'g-recaptcha-response');
  };

  return (
    <ContactSection id='contact'>
      <ContactContainer className='container'>
        <h2 className='text-2xl'><svg xmlns="http://www.w3.org/2000/svg" className="contactSVG" fill="none" viewBox="0 0 22 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg> Contact Me</h2>
        <StyledForm ref={form} onSubmit={handleSubmit}>
          <FormRow className='row100'>
            <FormCol className='col'>
              <div className='inputBox'>
                <input
                  htmlFor='name'
                  type='text'
                  name=''
                  // value={state.name}
                  onChange={handleInput}
                  required
                />
                <span className='text'>Name</span>
                <span className='line'></span>
              </div>
            </FormCol>
          </FormRow>

          <FormRow className='row100'>
            <FormCol className='col'>
              <div className='inputBox'>
                <input
                  htmlFor='email'
                  type='text'
                  name=''
                  // value={state.email}
                  onChange={handleInput}
                  required
                />
                <span className='text'>Email</span>
                <span className='line'></span>
              </div>
            </FormCol>
          </FormRow>

          <FormRow className='row100'>
            <FormCol className='col'>
              <div className='inputBox'>
                <textarea
                  htmlFor='message'
                  className='inputBox textarea'
                  htmlFor='message'
                  required
                />
                <span class="text">Type Your Message Here...</span>
                <span class="line"></span>
              </div>
            </FormCol>
          </FormRow>

          <FormRow className='row100 sendMsgBtn'>
            <FormCol className='col'>
              {/* <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={recaptchaKey}
                onChange={updateRecaptchaToken}
              // size='invisible'
              /> */}
              <StyledButton
                disabled={submitting}
                type='submit'
              >{submitting ? 'Submitting...' : 'Send Message'}</StyledButton>
            </FormCol>
          </FormRow>
        </StyledForm>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact;