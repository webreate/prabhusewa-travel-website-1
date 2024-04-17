import React from 'react'
import "../../style/aboutus/Aboutvid.css"

const Aboutvid = () => {
  return (
    <>
      <div className="video-main">

        <video className='video' controls autoPlay>
          <source src="https://media.istockphoto.com/id/1316196625/video/timelapse-apple-prores-422-of-maha-kumbh-haridwar-2021.mp4?s=mp4-640x640-is&k=20&c=uF7jIp2ArzN-l8t550BMfTlp4Kex4YZj-UMyClXPQQg=" type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default Aboutvid
