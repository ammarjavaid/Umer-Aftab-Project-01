import React from 'react'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Firebase';

const AdCard = ({ img, title, type, price, id }) => {

    function deletePost(id) {
        const docRef = doc(db, 'Ads', id)
        deleteDoc(docRef)
          .then(() => {
            console.log('Document Deleated')
          }).catch((error) => {
            console.log(error.message)
          })
      }


  return (
    <>
        <div className="card" style={{ width: "18rem" }}>
                {/* <img src={img} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                <video controls >
                  <source src={img} type="video/mp4" />
                </video>
                    <h2 className="card-title">{title}</h2>
                    {/* <p className="card-text">{desc}</p> */}
                    {/* <div className='butns'>
                        <div className='de'> <button> Details </button> </div>
                        <div className='re'> <button> Remove </button> </div>
                    </div> */}
                    <button className='details' type="button" data-toggle="modal" data-target="#myModal"> Details </button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">

                            {/* <!-- Modal content--> */}
                            <div className="modal-content">
                                {/* <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title"> Shoes </h4>
                                </div> */}
                                <div className="modal-body">
                                <video controls >
                                <source src={img} type="video/mp4" />
                                </video>
                                    <h3> {title} </h3>
                                    {/* <p>{desc}</p> */}
                                    <p> {price} </p>
                                    <div className='btns'>
                                        <div><button className='btn-defaul ok'> Approve </button></div>
                                        <div><button className='btn-defaul' onClick={() => deletePost(id)}> Remove </button></div>
                                    </div>
                                </div>
                                {/* <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default AdCard