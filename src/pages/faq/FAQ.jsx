import React, { useEffect, useState } from 'react'
import Topbar from '../../layout/topbar/Topbar'
import Sidebar from '../../layout/sidebar/Sidebar'
import { Data } from './AdApi'
import AdCard from './AdCard'
import "./add.scss"
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase';

const FAQ = () => {

  const [open, setOpen] = useState(false)
  const [myAds, setMyAds] = useState([]);

  const handle = () => {
    setOpen(!open)
  }

  useEffect(() => {
    console.log(myAds)
  }, [])

  const getCollectionRef = collection(db, "Ads");
  useEffect(() => {
    const unsubscribe = onSnapshot(getCollectionRef, snapshot => (
      setMyAds(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    ))
    return () => {
      console.log(unsubscribe)
      unsubscribe();
      // console.log(unsubscribe());
    }
  }, []);

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className="layout-2">
        <Topbar open={open} setOpen={setOpen} handle={handle} />
        <div style={{ color: "#fff", padding: "40px" }}>
          <h1> Approve Ads </h1>
          <div className='approve'>
            {
              myAds.map((item) => (
                <AdCard img={item.AdGraphicLink} type={item.MediaType} title={item.Adtype} price={item.ads} id={item.UserID}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ