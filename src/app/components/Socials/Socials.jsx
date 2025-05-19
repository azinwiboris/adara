
import { LogoLinkedin,LogoX,LogoFacebook,LogoInstagram } from "@carbon/icons-react";
import "../Socials/social.scss";

function Socials(){
   
    return(
   <>
       
           <div className="logo">
           <LogoX size={32} className="x"></LogoX>
           <LogoLinkedin size={42} className="linkedIn"></LogoLinkedin>
            <LogoFacebook size={42} className="facebook"></LogoFacebook>
            <LogoInstagram size={32} className="instagram"></LogoInstagram>
           </div>
           
    </>
    )
}
export default Socials;