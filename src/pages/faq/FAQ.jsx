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
  const [posts, setPosts] = useState([]);

  const handle = () => {
    setOpen(!open)
  }

  useEffect(() => {
    console.log(posts)
  }, [])

  const getCollectionRef = collection(db, "Post");
  useEffect(() => {
    const unsubscribe = onSnapshot(getCollectionRef, snapshot => (
      setPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    ))
    return () => {
      unsubscribe();
      // console.log(unsubscribe());
    }
  });

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className="layout-2">
        <Topbar open={open} setOpen={setOpen} handle={handle} />
        <div style={{ color: "#fff", padding: "40px" }}>
          <h1> Approve Ads </h1>
          <div className='approve'>
            {
              posts.map((item) => (
                <AdCard img={item.images[0]} title={item.Title} desc={item.Description} postType={item.PostType} id={item.id}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ