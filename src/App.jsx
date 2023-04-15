import './App.css';
import React from 'react';

function App() {


   return (
      <div className="App">
         <div className="content">
            <div className="header">
               <div className="header__title">InFly</div>
               <div className="header__img1 qq"></div>
               <div className="header__img2 qq"></div>
               <div className="header__img3 qq"></div>
               <div className="header__img7 qq"></div>
               <div className="header__img10 qq"></div>
               <div className="header__img17 qq"></div>

               <div className="imgF1">
                  <img src="img/1.png" alt="#" />
               </div>
               <div className="imgF2">
                  <img src="img/2.png" alt="#" />
               </div>

            </div>
            <div className="main">
               <div className="main__hi">Привет, <br></br>я Сми Рад!</div><br />
               <div className="main__contacts tool">Контакты</div>
               <div className="main__row block">
                  <div className="row__pnone row">
                     <img src="img/4.png" alt="#" className='imgrow' />
                     <div className="row__title text">Звонок</div>
                  </div>
                  <div className="row__mail row">
                     <img src="img/5.png" alt="#" className='imgrow' />
                     <div className="row__title text">Email</div>
                  </div>
                  <div className="row__what row">
                     <img src="img/6.png" alt="#" className='imgrow' />
                     <div className="row__title text">WhatsApp</div>
                  </div>
               </div>
               <div className="main__contacts tool">Соцсети</div>
               <div className="main__row block">
                  <div className="row__pnone row">
                     <img src="img/8.png" alt="#" className='imgrow' />
                     <div className="row__title text">VK</div>
                  </div>
                  <div className="row__mail row">
                     <img src="img/9.png" alt="#" className='imgrow' />
                     <div className="row__title text">Телеграмм</div>
                  </div>
               </div>
               <div className="main__contacts tool">Обо мне</div>
               <div className="main__row block">
                  <div className="row__pnone row">
                     <img src="img/11.png" alt="#" className='imgrow2' />
                     <img src="img/12.png" alt="#" className='imgrow3' />
                     <div className="row__title text text1">Обучение</div>
                  </div>
                  <div className="row__mail row">
                     <img src="img/13.png" alt="#" className='imgrow' />
                     <div className="row__title text text2">Биография</div>
                  </div>
                  <div className="row__what row">
                     <img src="img/14.png" alt="#" className='imgrow' />
                     <div className="row__title text text2">Фото</div>
                  </div>
               </div>
               <div className="main__contacts tool">О компании</div>
               <div className="main__row block">
                  <div className="row__pnone row1">
                     <img src="img/15.png" alt="#" className='imgrow4' />
                     <div className="row__title text">Описание</div>
                  </div>
                  <div className="row__mail row1">
                     <img src="img/16.png" alt="#" className='imgrow4' />
                     <div className="row__title text">Контакты</div>
                  </div>
               </div>

               <div className="main__balls balls">
                  <div className="balls__my">Мои баллы!</div>
                  <div className="balls__count">235</div>
               </div>

               <div className="main__contacts tool">Поделиться</div>
               <div className="main__row block">
                  <div className="row__pnone row">
                     <img src="img/19.png" alt="#" className='imgrow' />
                     <div className="row__title text">QR-код</div>
                  </div>
                  <div className="row__mail row">
                     <img src="img/20.png" alt="#" className='imgrow' />
                     <div className="row__title text">NFC</div>
                  </div>
               </div>


            </div>
         </div>



         {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
         >
            Download Vizitky-app

         </a> */}
      </div>
   );
}

export default App;
