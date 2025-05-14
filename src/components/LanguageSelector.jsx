import '../components/css/languageSelector.css';
import { useTranslations } from '../i18n/utils';

const LanguageSelector = ({ currentLang }) => {
  const translateLabels = useTranslations(currentLang);

  function handleBigSelector(e) {
    e.stopPropagation();
    const themesMenu = document.getElementById('themes-menu');
    const dropDownDefault = document.querySelector('#dropdownDefaultButton');
    const dropdownMenu = document.querySelector('#dropdown');

    if (e.currentTarget === dropDownDefault) {
      themesMenu.classList.remove('open');
      dropdownMenu.classList.toggle('visible');
    }
  }

  function handleSmallSelector(e) {
    e.stopPropagation();
    const themesMenu = document.getElementById('themes-menu');
    const dropDownDefault = document.querySelector(
      '#dropdownDefaultButtonSmartphone'
    );
    const dropdownMenu = document.querySelector('#dropdownSmartphone');

    if (e.currentTarget === dropDownDefault) {
      themesMenu.classList.remove('open');
      dropdownMenu.classList.toggle('visible');
    }
  }

  return (
    <div id='dropdownContainer' className='relative inline-block'>
      <button
        transition:persist='true'
        title={translateLabels('nav.aria.changeLanguage')}
        aria-label={translateLabels('nav.aria.changeLanguage')}
        onClick={handleBigSelector}
        id='dropdownDefaultButton'
        className='w-30 text-black bg-white/90 focus:outline-none font-medium text-sm tablet:text-lg px-3 py-1 text-center inline-flex items-center justify-baseline dark:bg-neutral-900 dark:text-white/80'
        type='button'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          title={`${translateLabels('nav.aria.changeLanguage')} logo`}
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 5h7' />
          <path d='M9 3v2c0 4.418 -2.239 8 -5 8' />
          <path d='M5 9c0 2.144 2.952 3.908 6.7 4' />
          <path d='M12 20l4 -9l4 9' />
          <path d='M19.1 18h-6.2' />
        </svg>
        {translateLabels('nav.language')}{' '}
        <svg
          className='w-2.5 h-2.5 ms-3'
          aria-hidden='true'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>
      <button
        transition:persist='true'
        onClick={handleSmallSelector}
        id='dropdownDefaultButtonSmartphone'
        arria-label={translateLabels('nav.aria.changeLanguage')}
        title={translateLabels('nav.aria.changeLanguage')}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M4 5h7' />
          <path d='M9 3v2c0 4.418 -2.239 8 -5 8' />
          <path d='M5 9c0 2.144 2.952 3.908 6.7 4' />
          <path d='M12 20l4 -9l4 9' />
          <path d='M19.1 18h-6.2' />
        </svg>
      </button>

      <div
        id='dropdown'
        transition:persist='true'
        className='z-10 hidden rounded-md  bg-white/90 top-4 w-full shadow-md dark:bg-gray-700 border-gray-500/20 border-[1.5px]'
      >
        <ul
          className='rounded-md p-1 w-full dark:bg-neutral-900 dark:text-white/90 text-sm text-black'
          aria-labelledby='dropdownDefaultButton'
        >
          <li>
            <a
              href='/es/'
              className='hover:bg-neutral-400/40 hover:text-black block px-4 py-2 dark:hover:bg-gray-500/50 dark:hover:text-white rounded-sm'
            >
              {currentLang === 'es' ? 'Español' : 'Spanish'}
            </a>
          </li>
          <li>
            <a
              href='/en/'
              className='hover:bg-neutral-400/40 hover:text-black block px-4 py-2 dark:hover:bg-gray-500/50 dark:hover:text-white rounded-sm'
            >
              {currentLang !== 'es' ? 'English' : 'Inglés'}
            </a>
          </li>
        </ul>
      </div>
      <div
        id='dropdownSmartphone'
        transition:persist='true'
        className='z-10 hidden bg-white top-4 right-0 w-[110px] dark:bg-gray-700 rounded-md'
      >
        <ul
          className=' py-0 w-full dark:bg-neutral-900 dark:text-white/90 border-gray-500/20 border-[1.5px] text-sm text-gray-900 rounded-md'
          aria-labelledby='dropdownDefaultButton'
        >
          <li className='p-1'>
            <a
              href='/es/'
              className='hover:bg-gray-500/20 hover:text-black block px-4 py-1 dark:hover:bg-gray-500/50 dark:hover:text-white rounded-sm'
            >
              {currentLang === 'es' ? 'Español' : 'Spanish'}
            </a>
          </li>
          <li className='p-1'>
            <a
              href='/en/'
              className='hover:bg-gray-500/20 hover:text-black block px-4 py-1 dark:hover:bg-gray-500/50 dark:hover:text-white rounded-sm'
            >
              {currentLang !== 'es' ? 'English' : 'Inglés'}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelector;
