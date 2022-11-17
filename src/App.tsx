import React from 'react';
import './assets/css/App.css';
import Header from './header';
import Banner from './assets/images/banner.avif';
import ProfileImg from './assets/images/profile-img.avif';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ProfileDetail from './ProfileDetail';
import Content from './content';

function App() {
  const [profileImgModal, setProfileImgModal] = React.useState(false);

  return (
    <div className="App">
      <Header />
      <img src={Banner} height="230" />
      <img src={ProfileImg} onClick={() => setProfileImgModal(true)} width="150" className="profile-img" />
      <Modal
        aria-labelledby="profile image modal"
        aria-describedby="profile image modal"
        open={profileImgModal}
        onClose={() => setProfileImgModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={profileImgModal}>
          <img src={ProfileImg} onClick={() => setProfileImgModal(true)} style={{position: 'absolute', top:'30%', left: '30%'}}  />
        </Fade>
      </Modal>
      <ProfileDetail />
      <Content />
    </div>
  );
}

export default App;
