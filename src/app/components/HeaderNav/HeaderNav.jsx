import Overflow from "../OverflowMenu/UserAvatar"
import GradientText from '../Shiny/ShinyText';
import "@/components/HeaderNav/header-nav.scss"
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    HeaderSideNavItems,
    Button,
    MenuItemDivider,
  } from '@carbon/react';
  import Socials from '../Socials/Socials';
  import Link from 'next/link';
  import Image from 'next/image';
  import { Chat } from '@carbon/icons-react';
  import DDSButton from '@carbon/ibmdotcom-web-components/es/components-react/button/button';
  import C4DButtonGroup from '@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group';
import C4DButtonGroupItem from '@carbon/ibmdotcom-web-components/es/components-react/button-group/button-group-item';
  const HeaderNav = () => (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Adara Institute">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName className="headerName" href="/" prefix="">
          <h4>Adara Institute</h4>
      
          {/* <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  <h3>Adara Institute</h3>
</GradientText> */}
  
          </HeaderName>
          <HeaderNavigation aria-label="Adara Institute">
            
          
            <HeaderMenuItem href="/">
              Home
            </HeaderMenuItem>
           
            
            <HeaderMenuItem href="/">About Us</HeaderMenuItem>
          
         
           
            <HeaderMenuItem http="/Admission">Admissions & Aids</HeaderMenuItem>
            
          
            
            <HeaderMenuItem href="/Academics">Academic Programs</HeaderMenuItem>
           
          
           
            <HeaderMenuItem>Students Life</HeaderMenuItem>
           
          
           
            <HeaderMenuItem href="/Contactus">Contact Us</HeaderMenuItem>
           
           
          </HeaderNavigation>
         
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}>
            <SideNavItems>
              <HeaderSideNavItems>
              
                <HeaderMenuItem href="/">Home</HeaderMenuItem>
                
                <MenuItemDivider />
               
                <HeaderMenuItem href="/aboutUs">About Us</HeaderMenuItem>
               
                <MenuItemDivider />
                
                <HeaderMenuItem>Admissions & Aids</HeaderMenuItem>
               
                <MenuItemDivider />
               
                <HeaderMenuItem href="/Academics">Academic Programs</HeaderMenuItem>
                
                <MenuItemDivider />
               
                <HeaderMenuItem href="StudentsLife">Students Life</HeaderMenuItem>
               
                <MenuItemDivider />
               
                <HeaderMenuItem href="Conatactus">Contact Us</HeaderMenuItem>
               
                <MenuItemDivider />
                
                <HeaderMenuItem href="/">Students Portal</HeaderMenuItem>
             
                <MenuItemDivider />

                
             
                <C4DButtonGroup>
      
      <C4DButtonGroupItem  cta-type="local">
        Apply Now
      </C4DButtonGroupItem>
      <C4DButtonGroupItem  cta-type="local">
        Join Our WhatsApp Community
      </C4DButtonGroupItem>
      <MenuItemDivider />
    </C4DButtonGroup>
               
                
                <center>
                <Image src="/../public/images/logoImage.png" 
                  alt="The Official Logo of the Adara Instutute"
                  width={96} 
                  height={96}
                  priority={true} // For LCP (Largest Contentful Paint) images
                  quality={100} // Quality from 1-100 (default 75)
                />
                <p><b>Adara Institute</b></p>
                
                <MenuItemDivider />
               
              
               </center> 

              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
 
  <HeaderGlobalAction className="paddy" aria-label="Chat on WhatsApp" tooltipAlignment="end">
    <Chat size={24} />

  </HeaderGlobalAction>
  
  <HeaderGlobalAction aria-label="Login" tooltipAlignment="end">
    
<Overflow />
  </HeaderGlobalAction>
   <Link href="./applynow">
   <Button >Apply Now</Button>
   </Link>
  
</HeaderGlobalBar>
        </Header>
      )}
    />
  ); 
  export default HeaderNav;