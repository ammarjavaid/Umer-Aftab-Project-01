import React, { useState } from "react"
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Firebase';

const ServiceCard = ({ img, title, desc, price, id }) => {

    const [modalData, setModalData] = useState({ title, desc, price, id })
    const showDetails = (id) =>{
        setModalData({title, desc, id, price})
        console.log(modalData)
    }

    function deletePost(id) {
        const docRef = doc(db, 'Post', id)
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
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{desc}</p>
                    <div className='butns'>
                        <div className='de'> <button type="button" data-toggle="modal" data-target="#myModal" onClick={()=> showDetails(id)}> Details </button> </div>
                        <div className='re'> <button onClick={() => deletePost(id)}> Remove </button> </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <p> {modalData.id} </p> */}
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title"> {modalData.title} </h4>
                        </div>
                        <div className="modal-body">
                            <div className="main">
                                <div className="left">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="right">
                                    <img src={img} alt=""/>
                                    <img src={img} alt=""/>
                                </div>
                            </div>
                            <p>{ modalData.desc }</p>
                            <p> ${modalData.price} </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ServiceCard