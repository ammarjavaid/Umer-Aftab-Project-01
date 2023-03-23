import React, { useEffect, useState } from 'react'
import "./dashboard.scss"
import Topbar from '../../layout/topbar/Topbar';
import Sidebar from '../../layout/sidebar/Sidebar';
import Card from './Card';
import SearchIcon from '@mui/icons-material/Search';
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../Firebase"
import { doc, updateDoc } from 'firebase/firestore';

const Dashboard = () => {

  const [open, setOpen] = useState(false)
  const [allUser, setAllUser] = useState([]);
  const [ban, setban] = useState(false);
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(allUser);

  const handle = () => {
    setOpen(!open)
  }

  const check = (id) => {
    setban(!ban)
    const docRef = doc(db, 'User', id)
    updateDoc(docRef, { ban: ban })
      .then(() => {
        console.log("yes!!")

      }).catch(error => {
        console.log(error.message)
      })
  }

  useEffect(() => {
    getUsers();
  }, [])

  function getUsers() {
    const usersCollectionRef = collection(db, 'Users')
    getDocs(usersCollectionRef)

      .then(response => {
        const user = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }))
        setAllUser(user)
        console.log(user)
      }).catch(error => {
        console.log(error.message)
      })
  }

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = allUser.filter((user) => {
        return user.data.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(allUser);
    }

    setName(keyword);
  };




  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className='layout-2'>
        <Topbar open={open} setOpen={setOpen} handle={handle} />
        <div className='dashboard'>
          <div className='search__bar'>
            <SearchIcon className='rightIcon' />
            <input type="text" placeholder='SEARCH' value={name} onChange={filter} />
          </div>
          <div className='dashboard__left'>
            {foundUsers && foundUsers.length > 0 ? (
              foundUsers.map((curElm) => (
                <>
                  <Card image={curElm.data.image} location={curElm.data.location} ban={ban} name={curElm.data.name} onClick={() => {
                    check(curElm.data.UserID)
                  }} />
                </>
              ))
            ) : (
              <h1>No results found!</h1>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
