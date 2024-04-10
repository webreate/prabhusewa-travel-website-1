import React, { useEffect } from 'react'
import "../../style/aboutus/Populartour.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchmaxvisit } from "../../store/features/Maxvisitapi";
import Lodder from '../lodder/Lodder';
const Populartour = () => {
  const dispatch = useDispatch()
  const selectedMaxvisit = useSelector((state) => state.maxvisit.maxproduct);
  const selectMaxstatus = useSelector((state) => state.maxvisit.status);


  useEffect(() => {
    dispatch(fetchmaxvisit())
  }, [dispatch])

  if (selectMaxstatus === "loading") {
    return <Lodder />
  }
  if (selectMaxstatus === "failed") {
    alert("something want worng !")
  }

  return (
    <>
      <div className="tour-main">
        <div className="tour-head">
          <h1 id='head' >Popular Tours</h1>
          <h2 id='head2'>View All</h2>
        </div>
        <div className="img-section">
          {
            selectedMaxvisit?.map((res) => {
              // console.log(res)
              return (
                < div className="img-div">
                  <img className='tour-img' src={res?.gallery[0].galleryImage} alt='Tour' />
                 <div className='text-box'>
                 <h3 className='img-head'>{res?.packageName}</h3>
                  <p className='img-p'>{res?.shortDescription.slice(0, 150)}</p>
                 </div>
                <div className='btn-box'>
                <button id='img-btn'>Book Now</button>
                </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )

}

export default Populartour 
