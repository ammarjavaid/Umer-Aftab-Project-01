import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { BsCreditCard2Front, BsQuestion, BsQuestionCircle, BsTrophy } from 'react-icons/bs';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

const Sidebar = ({open, setOpen, handle}) => {

const navigate = useNavigate();

const logout = ()=>{

    const auth = getAuth();
    signOut(auth).then(() => {
        navigate("/")
    }).catch((error) => {
        alert(error);
    });

}

  return (
    <>
        <div className={`sidebar ${open ? "openSidebar" : ""}`}>
            <div className='sidebarTop'>
                <h2> ADMIN PANEL </h2>
            </div>
            <div className='sidebarBottom'>
                <ul>
                    <Link className='link' to="/home" onClick={handle}><li> <PeopleAltIcon style={{fontSize: "17px"}}/> <span> Users </span>  </li></Link>
                    <Link className='link' to="/subscription" onClick={handle}><li> <PaymentIcon style={{fontSize: "17px"}}/> <span> Subscription </span>  </li></Link>
                    <Link className='link' to="/category" onClick={handle}><li> <LocalAtmIcon style={{fontSize: "17px"}}/> <span> Category </span>  </li></Link>
                    <Link className='link' to="/sub-category" onClick={handle}><li> <LightbulbIcon style={{fontSize: "17px"}}/> <span> Sub Category </span>  </li></Link>
                    <Link className='link' to="/approve" onClick={handle}><li> <LiveHelpIcon style={{fontSize: "17px"}}/> <span> Approve Ads </span>  </li></Link>
                    <Link className='link' to="/all-services" onClick={handle}><li> <DesignServicesIcon style={{fontSize: "17px"}}/> <span> All Services </span>  </li></Link>
                </ul>
            </div>
            <div className='logout'>
                <div onClick={logout}>
                <LogoutIcon style={{fontSize: "17px"}}/><span> Logout </span>
                </div>
            </div>
            {/* <div className='sideBarCard'>
                <BsQuestionCircle className='icon' />
                <div className='cardContent'>
                    <div className='circle1'></div>
                    <div className='circle2'></div>

                    <h3> Help Center </h3>
                    <p> Having Trouble in Planti, please contact us from for more questions. </p>
                    <button className='btn'> Go to help center </button>
                </div>
            </div> */}
        </div>
    </>
  )
}

export default Sidebar