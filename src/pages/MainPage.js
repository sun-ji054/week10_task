import React from 'react';
import ProfileImg from '../components/ProfileImg';
import Info from '../components/Info';
import Box from '../components/Box';
//import Blogbar from '../components/Blogbar';

export default function MainPage() {
  return (
    <div className="mainContent">
      <div className="wrapper">
      <ProfileImg />
      <Info />
      <Box className="box3" title={"SKILLS"} />
      <Box className="box4" />
      <Box className="box5" />
      </div>
   </div>
  );
}