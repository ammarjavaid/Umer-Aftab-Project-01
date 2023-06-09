import React, { useEffect, useState } from 'react'
import Topbar from '../../layout/topbar/Topbar'
import Sidebar from '../../layout/sidebar/Sidebar'
import "./allservices.scss"
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../Firebase';
import ServiceCard from './ServiceCard'
import SearchIcon from '@mui/icons-material/Search';

const AllServices = () => {

  const [open, setOpen] = useState(false)
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(posts);

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
    }
  }, []);

  const handleSearch = event => {
    const value = event.target.value;
    setSearchTerm(value);
    const filtered = posts.filter(item => item.Title.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
  }


  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className="layout-2">
        <Topbar open={open} setOpen={setOpen} handle={handle} />
        <div className='search__bar'>
              <SearchIcon className='rightIcon' />
              <input type="text" placeholder='SEARCH' value={searchTerm} onChange={handleSearch} />
          </div>
        <div className='Services' style={{ color: "#fff", padding: "40px" }}>

          {filteredData.map((item) => (
              <ServiceCard img={item.images} title={item.Title} desc={item.Description} id={item.id} price={item.Price}/>
           ))}
        </div>
      </div>
    </>
  )
}

export default AllServices