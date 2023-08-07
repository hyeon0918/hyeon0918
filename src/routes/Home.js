import React, { Component } from 'react'
import Movie from '../components/Movie'
import axios from 'axios'
import '../styles/Home.css'

export class Home extends Component {

  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count')
    // 서버에서 영화 데이터를 가져오는 동안 기다렸다가 처리함. async + await
    // 내가 가져오고 싶은 데이터는 콘솔창에 date > data > movies라는 배열 20개짜리 있음. 그 안에 내가 가져오고 싶은 영화 데이터 있음.
    // 구조 분해 할당으로 movies에 영화 20개 저장할 것임. ↓
    const { 
      data : {
        data : {movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count')
    console.log('movies',movies);
    // 내가 가져온 영화 데이터는 state의 movies 배열안에 넣어줄 것임 + isLoading 값도 false로 바뀌어야 함.
    this.setState({isLoading : false, movies}) // 키 : 키 값 이름이 동일하면 하나만 써도 상관없음
  } 

  componentDidMount(){
    this.getMovies();
    // setTimeout(() => {
    //   this.setState({isLoading : false});
    // }, 6000);
  }

  render() {
    // 화면에 그려지는 함수
    const { isLoading, movies} = this.state; // 구조 분해 할당
    return (
      <section className="container">
        {isLoading ? 
          <div className='loader'>
            <span className='loader_text'>'Loading....'</span>
          </div>
          : 
          <div className='movies'>
            {movies.map(movie => (
              <Movie
                // key = { index } 
                // key부분 주석 없애면 오류남;;
                propsid = { movie.id }
                propsimage = { movie.medium_cover_image }
                propstitle = { movie.title }
                propsyear = { movie.year }
                propsgenres = { movie.genres }
                propssummary = { movie.summary}
              />
            ))}
            {/* medium_cover_image, title, year, summary */}
          </div>
        }
      </section>
    )
  }
}

export default Home