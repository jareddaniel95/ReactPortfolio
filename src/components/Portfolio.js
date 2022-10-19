import React from 'react';

export default function Portfolio() {
  return (
    <div className='d-flex flex-column justify-content-center p-2'>
      <div className='content section-head'>Portfolio</div>
      <div className='content portfolio'>

      <div className='card m-2'>
          <h2>Trivia App</h2>
          <div className='preview'>
            <img src={process.env.PUBLIC_URL + '/images/trivia.png'} alt='Trivia App preview'/>
          </div>
          <div className='m-2'>A trivia game you can play with friends.</div>
          <div>
            <a href='https://triviyaa.herokuapp.com/' className="btn btn-med btn-block btn-outline-primary m-2">View Deployment</a>
            <a href='https://github.com/jareddaniel95/triviyaa' className="btn btn-med btn-block btn-outline-primary m-2">View Repository</a>
          </div>
        </div>

        <div className='card m-2'>
          <h2>Poll Together</h2>
          <div className='preview'>
            <img src={process.env.PUBLIC_URL + '/images/poll_together.png'} alt='Poll Together preview'/>
          </div>
          <div className='m-2'>An app that allows you to create and vote on polls.</div>
          <div>
            <a href='https://poll-together.herokuapp.com/' className="btn btn-med btn-block btn-outline-primary m-2">View Deployment</a>
            <a href='https://github.com/jareddaniel95/PollTogether' className="btn btn-med btn-block btn-outline-primary m-2">View Repository</a>
          </div>
        </div>

        <div className='card m-2'>
          <h2>Tech Blog</h2>
          <div className='preview'>
            <img src={process.env.PUBLIC_URL + '/images/tech_blog.png'} alt='Tech Blog preview'/>
          </div>
          <div className='m-2'>A forum that allows users to create an account, write blog posts, and comment on other blog posts.</div>
          <div>
            <a href='https://tech-blog-jd95.herokuapp.com/' className="btn btn-med btn-block btn-outline-primary m-2">View Deployment</a>
            <a href='https://github.com/jareddaniel95/TechBlog' className="btn btn-med btn-block btn-outline-primary m-2">View Repository</a>
          </div>
        </div>

        <div className='card m-2'>
          <h2>Note Taker</h2>
          <div className='preview'>
            <img src={process.env.PUBLIC_URL + '/images/note_taker.png'} alt='Note Taker preview'/>
          </div>
          <div className='m-2'>An app that allows you to write and save notes.</div>
          <div>
            <a href='https://notes-taker-jd95.herokuapp.com/' className="btn btn-med btn-block btn-outline-primary m-2">View Deployment</a>
            <a href='https://github.com/jareddaniel95/NoteTaker' className="btn btn-med btn-block btn-outline-primary m-2">View Repository</a>
          </div>
        </div>

        <div className='card m-2'>
          <h2>Gif Source</h2>
          <div className='preview'>
            <img src={process.env.PUBLIC_URL + '/images/gif_source.png'} alt='Gif Source preview'/>
          </div>
          <div className='m-2'>A dashboard that allows you to enter a search term and uses the Giphy API to show relevant gifs.</div>
          <div>
            <a href='https://jareddaniel95.github.io/GifSource/' className="btn btn-med btn-block btn-outline-primary m-2">View Deployment</a>
            <a href='https://github.com/jareddaniel95/GifSource' className="btn btn-med btn-block btn-outline-primary m-2">View Repository</a>
          </div>
        </div>

        <div className='card m-2'>
          <h2>Weather Dashboard</h2>
          <div className='preview'>
            <img src={process.env.PUBLIC_URL + '/images/weather_dashboard.png'} alt='Weather Dashboard preview'/>
          </div>
          <div className='m-2'>A dashboard that allows you to search for a city and uses a weather API to fetch weather data.</div>
          <div>
            <a href='https://jareddaniel95.github.io/WeatherDashboard/' className="btn btn-med btn-block btn-outline-primary m-2">View Deployment</a>
            <a href='https://github.com/jareddaniel95/WeatherDashboard' className="btn btn-med btn-block btn-outline-primary m-2">View Repository</a>
          </div>
        </div>

      </div>
    </div>
  );
}