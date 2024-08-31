import React from 'react'
import { useState } from 'react'
import Lottie from 'lottie-react'
import Exam from '../assets/Exam.json'
import { Navigate } from 'react-router-dom'
import harry from '../assets/harry.jpg'



import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";



const Hero = () => {
    const [showQuiz,setShowQuiz] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    if(showQuiz) {
        return <Navigate to='/Quiz' />;
        
    }


    
    const menuOptions = [
      {
        text: "Dashboard",
        icon: <HomeIcon />,
        location:"home-banner-container",
        offset:50,
        duration:150
      },
      {
        text: "About",
        icon: <InfoIcon />,
        location:"about-section-container",
        offset:-75,
        duration:200
      },
      {
        text: "Testimonials",
        icon: <CommentRoundedIcon />,
        location:"work-section-wrapper",
        offset:-50,
        duration:220
      },
      {
        text: "Contact",
        icon: <PhoneRoundedIcon />,
        location:"footer",
        offset:50,
        duration:270
      },
      
    ];
  

  return (
    <div>
      <div id="main">
        
        
        <div className="bar--container"  >
            <div className="bar-container" >
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div> 
        </div>

        <div className="pplimg--container">
            <Lottie className ="imgif" animationData={Exam}></Lottie>
        </div>
        
        <div className="start-button">
        <button type='button' id="start" onClick={() => setShowQuiz(true)}>Start quiz</button> 
        
        
        </div>
    </div>

    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="left">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >

          <div className='profile-pic-container'>
            <img src={harry} alt={harry}  />
          </div>
          <div className='profile-name-container'>Pratham</div>
          <List className='mui--list'>
            {menuOptions.map((item) => (
              <ListItem key={item.text} className='list--item--text' disablePadding>
                <ListItemButton>
                   
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>


    </div>
  )
}

export default Hero
