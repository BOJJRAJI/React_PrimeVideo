import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }
  const {moviesLists} = props
  return (
    <Slider {...settings}>
      {moviesLists.map(movie => (
        <MovieItem details={movie} key={movie.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
