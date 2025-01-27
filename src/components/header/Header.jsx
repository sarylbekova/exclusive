import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import svg1 from '../../assets/svg/search.svg';
import image1 from '../../assets/image/1.png';
import image2 from '../../assets/image/2.png';
import { CiHeart } from 'react-icons/ci';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  function handleChangeLng(event) {
    let lng = event.target.value;
    i18n.changeLanguage(lng);
  }

  return (
    <header className='header'>
      <div className='top-header'>
        <div className='header-content container'>
          <p>
            {t('summerSale')} <Link>{t('shopNow')}</Link>
          </p>

          <select onChange={handleChangeLng}>
            <option value="kg">KGZ</option>
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>

      <div className='main-header'>
        <div className='header-left'>
          <h2>{t('exclusive')}</h2>
          <ul>
            <li>
              <Link to="/">{t('home')}</Link>
            </li>
            <li>
              <Link to="/contact">{t('contact')}</Link>
            </li>
            <li>
              <Link to="/about">{t('about')}</Link>
            </li>
            <li>
              <Link to="/register">{t('register')}</Link>
            </li>
          </ul>
        </div>

        <div className='header-right'>
          <div className='search'>
            <input type="text" placeholder={t('searchPlaceholder')} />
          </div>
          <Link to={'/wishlist'}>
          <CiHeart />
          </Link>
          
          
         
          <Link to="/cart"> 
            <div className='icons'>
              <img src={image2} alt="Icon" />
              <div className='count'>2</div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
