import React from 'react'
import styled from 'styled-components'
import map from '../contact us/image/map.png';

function ContactBanner() {
    return (
        <ContactSectionStyled>
                <div className="contact-info">
                    <h3 className="contact-title">
                        Contact Us
                    </h3>
                    <p>Follow us on</p><br></br>
                    <a href='https://www.instagram.com/ictkerala/?hl=en'> <i className="icon fa-brands fa-instagram"></i></a>
                    <a href='https://www.facebook.com/ictkerala' ><i className="icon fa-brands fa-facebook-f"></i></a>
                    <a href='https://mobile.twitter.com/ictakerala'><i className="icon fa-brands fa-twitter"></i></a>
                    <a href='https://www.linkedin.com/company/ict-academy-of-kerala/'><i className="icon fa-brands fa-linkedin-in"></i></a>
                    
                    
                          
                </div>
                <div className="bg-image">
                    <img src={map} alt="" />
                </div>
        </ContactSectionStyled>
    )
}

const ContactSectionStyled = styled.div`
    background-color: #2c2c2e;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10rem 0;
    position: relative;
    z-index: 1;
    
    .bg-image{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        img{
            width: 100%;
            opacity: 0.08;
        }
    }
    .contact-title{
        position: relative;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        font-weight: 500;
        font-size: 500%;
        &::before{
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 4rem;
            height: 4px;
            background-color: #eb2633;   
        }
        
          }
          .icon {
            font-size: 25px;
            margin-right: 10px;
            color: #c6c6cf ;
            cursor: pointer;
          }
          .icon:hover{
              color:red;
              animation: pop 0.6s linear 2;
            }  
            @keyframes pop{
                50%  {transform: scale(1.2);}
              }     
        
`;

export default ContactBanner;
