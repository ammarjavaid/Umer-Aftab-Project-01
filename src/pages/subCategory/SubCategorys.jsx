import React, { useEffect, useState } from 'react'
import Topbar from '../../layout/topbar/Topbar'
import Sidebar from '../../layout/sidebar/Sidebar'
import { BsFillTrashFill } from 'react-icons/bs';
import { collection, addDoc, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Firebase';
import "./sub.scss"
import { toast } from 'react-toastify';

const SubCategorys = () => {

  const [subCategory, setSubCategory] = useState()
  const [open, setOpen] = useState(false)

  const handle = () => {
    setOpen(!open)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subCategory === '') {
      return
    }
    const categoryCollRef = collection(db, 'SubCategory')
    addDoc(categoryCollRef, { subCategory })
      .then((response) => {
        console.log(response)
        toast.success(`You created ${subCategory}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setSubCategory('')
      }).catch((error) => {
        console.log(error.message)
      })
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(posts)
  }, [])

  const getCollectionRef = collection(db, "SubCategory");
  useEffect(() => {
    const unsubscribe = onSnapshot(getCollectionRef, snapshot => (
      setPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    ))
    return () => {
      unsubscribe();
    }
  });

  function deletePost(id) {
    const docRef = doc(db, 'SubCategory', id)
    deleteDoc(docRef)
      .then(() => {
        console.log('Document Deleated')
      }).catch((error) => {
        console.log(error.message)
      })
  }

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} handle={handle} />
      <div className="layout-2">
        <Topbar open={open} setOpen={setOpen} handle={handle} />
        <div className='category' style={{ color: "#fff", padding: "40px" }}>
          <h2> Sub-Category </h2>
          <div className='input__field'>
            <select name="category" id="category">
              <option value="Select Category">Select Sub-Category</option>
              <option value="Baby Care">Baby Care</option>
              <option value="Shoes">Shoes</option>
              <option value="Electronic">Electronic</option>
              <option value="Computers">Computers</option>
            </select>
            <input type="text" placeholder='Enter here...' name='subCategory' value={subCategory} onChange={(e) => setSubCategory(e.target.value)} />
            <button className="sub__btn" onClick={handleSubmit}> Create </button>
          </div>

          <div className='box__sub-category'>
            {
              posts.map((item) => (
                <>
                  <div className='one__box'>
                    <h2> {item.subCategory} </h2>
                    <button onClick={() => deletePost(item.id)}> <BsFillTrashFill /> Delete </button>
                  </div>
                </>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default SubCategorys