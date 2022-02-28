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
                    <i className="icon fa-brands fa-google"></i>
                    <i className="icon fa-brands fa-facebook-f"></i>
                    <i className="icon fa-brands fa-twitter"></i>
                    <i className="icon fa-solid fa-envelope"></i>
                    <i className="icon fa-brands fa-linkedin-in"></i>
                    
                          
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
            width: 80%;
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
            font-size: 20px;
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
