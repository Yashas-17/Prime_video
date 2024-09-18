import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = props => {
  const {details} = props
  const {thumbnailUrl, videoUrl} = details
  return (
    <div className="MovieItem-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="movie-img" />
        }
        className="popup-content"
      >
        {close => (
          <div className="video-container">
            <button
              type="button"
              onClick={() => close()}
              aria-label="close"
              className="close-btn"
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
            <ReactPlayer
              url={videoUrl}
              controls
              playing
              muted="false"
              width="auto"
              height="100%"
            />
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
