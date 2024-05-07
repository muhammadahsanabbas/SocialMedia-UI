import './share.css'
import { Folders ,Tags ,MapPin ,SmilePlus} from 'lucide-react';

export const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="assets/Pp/sample-4.jpeg" alt="" />
                <input placeholder='Whats In Your Mind..?' className='shareInput'/>
            </div>
            <hr className='shareHr' />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <Folders style={{color:'tomato'}} className='shareIcon' />
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Tags style={{color:'blue'}} className='shareIcon' />
                        <span className='shareOptionText'>Tags</span>
                    </div>
                    <div className="shareOption">
                        <MapPin style={{color: 'green'}} className='shareIcon' />
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div  className="shareOption">
                        <SmilePlus style={{color: 'goldenrod'}} className='shareIcon' />
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className='shareBtn'>
                    Share
                </button>
            </div>
        </div>
    </div>
  )
}
