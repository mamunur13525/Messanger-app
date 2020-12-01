import React from 'react';
import './Main.css';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListIcon from '@material-ui/icons/List';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Main = () => {
    return (
        <div className="main_box">
            <header className="d-flex justify-content-between">
                <h1>Messages</h1>
                <div className="bell_profile d-flex">
                    <div className="bell"><NotificationsIcon/></div>
                    <div className="profile_pic ml-5"><AccountCircleIcon/></div>
                </div>

            </header>
            <div className="message_box">
                <div className="side_bar">
                        <div className="search_box">
                         <div className="icon">  <SearchIcon /></div> 
                            <input placeholder="Search People or Messages" type="text"/>
                        </div>
                    <div className="profile_icon">
                        <PermIdentityIcon style={{backgroundColor:'#F73F5E',color: 'white', borderRadius:'10px'}} />
                        <SupervisorAccountIcon />
                        <SettingsIcon />

                    </div>
                  
                    <div className="person_info active d-flex justify-content-around p-3">
                        <div className="person">
                            <AccountCircleIcon />
                        </div>
                        <div className="info ">
                            <div className="name">Anan</div>
                            <div className="description">This is  your anan recete sms</div>
                        </div>
                    </div>
                    <div className="person_info d-flex justify-content-around p-3">
                        <div className="person">
                            <AccountCircleIcon />
                        </div>
                        <div className="info">
                            <div className="name">Anan</div>
                            <div className="description">This is  your anan recete sms</div>
                        </div>
                    </div>
                    <div className="person_info d-flex justify-content-around p-3">
                        <div className="person">
                            <AccountCircleIcon />
                        </div>
                        <div className="info">
                            <div className="name">Anan</div>
                            <div className="description">This is  your anan recete sms</div>
                        </div>
                    </div>



                </div>
                <div className="main_body">
                    <div className="message_body_header">
                        <div className="chating_person d-flex">
                        <div className="person"> <AccountCircleIcon /></div>
                            <div className="chating_person_info">
                                <div className="name">Aninya Shegil</div>
                                <div className="status">Online</div>
                            </div>
                            <div className="list ml-auto">
                                <ListIcon />
                            </div>
                        </div>
                    </div>
                    <div className="message_body mt-5">
                        <div className="left_message">
                            <p className="mess">
                                this is message 
                            </p>
                        </div>
                        <div className="right_message">
                            <p className="mess">
                                this is message 
                            </p>
                        </div>
                    </div>
                  <div className="type_message">
                        <input className="type_message_input" placeholder="Enter a Message" type="text"/>
                        <ArrowForwardIcon style={{padding:'7px', backgroundColor:'#F73F5E',color:'white',borderRadius:"20px",width:'35px',height:'35px' }}/>
                  </div>
                </div>
                <div className="profile_section">
                   <AccountCircleIcon style={{width:'65px', height:'65px'}} />
                   <h2>Adnan Kabir</h2>
                   <p className="position">CEO Anjana Company</p>
                </div>
            </div>
         


        </div>
    );
};

export default Main;