import React, { useEffect, useState } from 'react'
import "./dashboard.scss"
import Topbar from '../../layout/topbar/Topbar';
import Sidebar from '../../layout/sidebar/Sidebar';
// import { Data } from './cardApi';
import Card from './Card';
import SearchIcon from '@mui/icons-material/Search';
import { collection, getDocs} from "firebase/firestore"
import { db } from "../../Firebase"

const Dashboard = () => {

  const [open, setOpen] = useState(false)
  const [allUser, setAllUser] = useState([]);
  const [ban, setban] = useState(false);

  const handle = () => {
    setOpen(!open)
  }
  
  


      const check = (id) => {
      setban(!ban)
        const docRef = doc(db, 'User', id)
        updateDoc(docRef, { ban:ban })
            .then(() => {
                console.log("yes!!")
           
            }).catch(error => {
                console.log(error.message)
            })
    }
  
  
  useEffect(()=>{
    getUsers();
}, [])

  function getUsers(){
    const usersCollectionRef = collection( db, 'Users' )
    getDocs(usersCollectionRef)
    
    .then(response =>{
        const user = response.docs.map(doc =>({
            data: doc.data(),
            id: doc.id,
        }))
        setAllUser(user)
        console.log(user)
    }).catch(error =>{
        console.log(error.message)
    })
}

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className='layout-2'>
        <Topbar open={open} setOpen={setOpen} handle={handle} />
        <div className='dashboard'>
          <div className='search__bar'>
            <SearchIcon className='rightIcon' />
            <input type="text" placeholder='SEARCH' />
          </div>
          <div className='dashboard__left'>
            {
              allUser.map((curElm) => (
                <>
                  <Card image={curElm.data.image} location={curElm.data.location} ban={ban} name={curElm.data.name} onClick={check(curElm.data.UserID)}/>
                </>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
