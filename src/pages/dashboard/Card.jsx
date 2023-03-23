import React from 'react'
import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../Firebase';

const Card = ({ image, location, name, onClick ,ban }) => {

//     const [bans, setBans] = useState(true);
    // const [banUser, setBanUser] = useState('');
//     const [id, setId] = useState('');



//     const checkOne = () => {
//         setBans(true)
//     }

    // const handleSubmit = (e)=>{
    //    const docRef = doc(db, 'Buttons' )
    //     updateDoc(docRef, {ban})
    //     .then((response)=>{
    //         console.log(response)
    //         alert("success")
    //     }).catch(error =>{
    //         console.log(error.message)
    //         alert("error!")
    //     })
    // }

    // const docRef = doc(db, 'Users', banUser)
    // updateDoc(docRef, {banUser})
    // .then((response)=>{
    //     console.log(response)
    // }).catch(error =>{
    //     console.log(error.message)
    // })

    return (
        <>
            <div className='one'>
                <div className='left'>
                    <div className='pic'>
                        <img src={image} alt='' />
                    </div>
                    <div>
                        <h3> {name} </h3>
                        <h6> {location} </h6>
                    </div>
                </div>
                <div className='right'>
                     {ban ? <div className='unban' onClick={onClick}><button>  Unban</button></div>
                        :
                        <div className='ban' onClick={onClick}><button>  Ban</button></div>
                    } 
                    
{/* //                     {bans ? <div className='ban' onClick={check}> <input type="submit" value="Ban" onChange={(e) => setBans(e.target.value)}/> </div> */}
{/* //                         : */}
{/* //                         <div className='unban' onClick={checkOne}> <input type="submit" value="Unban" onChange={(e) => setBans(e.target.value)}/> </div> */}
{/* //                     } */}

                </div>
            </div>
        </>
    )
}

export default Card
