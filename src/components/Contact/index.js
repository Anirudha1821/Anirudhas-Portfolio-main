
import styled from 'styled-components'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}

`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    font-family: 'Roboto Slab', serif;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 700px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
  @media only screen and (max-width: 730px){
    width: 90vw;
  }
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`



const Contact = () => {

  const form = useRef();
  const sucess = ()=>{
      toast.success('Message Sent !!', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    }
    const fail = ()=>{
      toast.error('Something went wrong, Please contact me on udgirkaranirudha@gmail.com, Thanks!! ', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    }
    emailjs.init({
      publicKey: "cQY416rxroTpA_Sq6",
    });
  const handleSubmit=(e)=>{

    console.log("inside ");
    e.preventDefault();
      var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
    
      const serviceID = process.env.REACT_APP_SERVICE_ID;
      const templateID = process.env.REACT_APP_TEMPLATE_ID;
      console.log("params -->>",params);
        emailjs.send(serviceID, templateID, params)
        .then(res=>{
            document.getElementById("name").value = "t";
            document.getElementById("email").value = "t";
            document.getElementById("message").value = "t";
            console.log(res);
            sucess();
            e.target.reset();
            alert("Your message sent successfully!!")
    
        })
        .catch(err=>{
          fail();
          console.log(err);

        });
  
    


    // emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_API)
    //   .then((result) => {
    //       sucess();
    //       e.target.reset();
    //   }, (error) => {
    //       fail();
    //   });
  }
  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm onSubmit={handleSubmit}>
        <ContactTitle>Email Me 🚀</ContactTitle>
        <ContactInput type='email' id="email" placeholder="Your Email" name="email" />
        <ContactInput type='text' id="name" placeholder="Your Name" name="name" />
        <ContactInputMessage id="message" type='text' placeholder="Message" rows="4" name="message"/>
        <ContactButton type="submit" value="Send" />
      </ContactForm>
        <ToastContainer style={{top:"75px"}}/>
      </Wrapper>
    </Container>
  )
}

export default Contact