import React from 'react'
import MusicList from '../music-list/music-list';
import ArticlesList from '../articles-list/articles-list';
import SubscribeForm from '../subscribe-form/subscribe-form';
import ReviewsList from '../reviews-list/reviews-list';

import './main-layout.scss';


const MainLayout = () => {
  return (
    <main className="page-main">
      <div className="container">
        <section className="main-preview">
          <div className="main-preview__img decor decor--top-left">
            <img src='/images/media/content-img-1.jpg' className="border-round" alt="main img" width="650" height="873" loading="lazy" />
          </div>
          <div className="main-preview__desc">
            <h1>Take your podcast to the <span className="underline">next</span> <span className="bold">level</span></h1>

            <div className="small-title">Listen on</div>
            <MusicList />

          </div>
        </section>

        <section className="articles">
          <header className="articles__header">
            <h2>Latest episodes</h2>

            <a href="#" className="button" role="button">View all episodes</a>
          </header>
          <ArticlesList />
        </section>

        <section className="main-preview main-preview--reverse">
          <div className="main-preview__img">
            <img src='/images/media/content-img-2.jpg' className="border-round" alt="main img" width="650" height="873" loading="lazy" />
          </div>
          <div className="main-preview__desc">
            <a href="#" className="arrow-link">
              <img src="/images/arrow-right.png" alt="arrow right" width="71" height="38" />
            </a>

            <div className="small-title small-title--color-light-green">Meet your host</div>
            <h2>Jacob Paulaner</h2>
            <p>Jacob has a background in audio engineering, and has been podcasting since the early days.</p>
            <p>He’s here to help you level up your game by sharing everything he’s learned along the way.</p>
          </div>
        </section>

        <section className="subscribe decor decor--left-bottom">
          <div className="subscribe__inner border-round">
            <div className="subscribe__desc">
              <div className="small-title small-title--color-light-green">Email Newsletter</div>
              <div className="title-h2">Subscribe <br /> for updates</div>
            </div>
            <div className="subscribe__form">
              <SubscribeForm />
            </div>
          </div>
        </section>

        <section className="reviews">
          <ReviewsList />
        </section>

      </div>
    </main>
  )
}

export default MainLayout