import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )

  return (
    <div className="home-bg-container">
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="logo-img"
        />
      </div>
      <div className="card-container">
        <div className="slider-container">
          <h1>Action Movies</h1>
          <MoviesSlider details={actionMoviesList} className="slider-ele" />
          <h1>Comedy Movies</h1>
          <MoviesSlider details={comedyMoviesList} className="slider-ele" />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
