import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from './Header.module.css';
export default function Header() {
  return (
    <section className={styles.HeaderContainer}>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">
            <svg
              width={140}
              height={102}
              viewBox="0 0 183 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sc-AxiKw eSbheu iconSvg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M51.9202 8.50019H9.2342L12.314 0H55L51.9202 8.50019ZM50.3792 12.7499H7.69243L4.61262 21.2501H47.2994L50.3792 12.7499ZM45.7658 25.4998H3.07981L0 34H42.686L45.7658 25.4998Z"
                fill="#00AAFF"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M156.927 55.4413H164.722C167.679 55.4413 169.471 54.7351 170.725 53.1474C171.352 52.3527 172.248 50.9411 172.248 48.2941C172.248 45.6471 171.352 43.794 169.561 42.4709C168.486 41.6763 167.052 41.2355 164.632 41.2355H156.927V55.4413ZM146.623 64V13H180.312L177.355 21.5595H156.927V32.8529H165.26C171.98 32.8529 175.474 34.4414 177.893 36.4707C179.775 38.0592 183 41.5885 183 48.5588C183 55.4413 179.685 59.2352 176.907 61.1761C173.682 63.3823 170.278 64 163.379 64H146.623ZM116.788 64V21.5595H101.825V13H143.398L140.441 21.5595H127.181V64H116.788ZM75.304 33.3829H81.1281C82.9193 33.3829 83.8152 33.3829 84.712 33.1175C87.1311 32.4121 88.6536 30.2944 88.6536 27.3827C88.6536 23.9411 87.0413 22.4418 84.712 21.7356C83.7262 21.471 82.7404 21.3826 80.7696 21.3826H75.304V33.3829ZM75.3938 42.2063V55.6174H82.5615C84.712 55.6174 86.6828 55.4413 88.1162 54.1174C89.5496 52.7943 90.1768 51.1181 90.1768 48.9118C90.1768 47.2356 89.7292 45.6471 88.8332 44.5002C87.31 42.647 85.4283 42.2063 82.203 42.2063H75.3938ZM91.9695 36.8238V37C93.9403 37.7061 95.8213 38.9415 96.8071 39.7354C99.8535 42.2063 101.198 45.471 101.198 49.7057C101.198 56.6767 97.4343 61.7061 91.2524 63.2938C89.3707 63.8231 87.3999 64 83.7262 64H65V13H81.5757C84.9807 13 87.31 13.1769 89.3707 13.7062C95.3737 15.2947 99.3161 19.3533 99.3161 25.7942C99.3161 29.2359 98.0616 32.1475 96.0009 34.0883C95.105 34.9707 93.8505 36.0299 91.9695 36.8238Z"
                fill="white"></path>
            </svg>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className={styles.HeaderContainer__navBlock}>
        <div className={styles.HeaderContainer__navBlock__upper}>
          <div className={styles.HeaderContainer__navBlock__upper__buttons}>
            <a target="_blank" href="https://www.vtb.ru/">
              Частным лицам
            </a>
            <a target="_blank" href="https://www.vtb.ru/samozanyatym/">
              Самозанятым
            </a>
            <a target="_blank" href="https://www.vtb.ru/malyj-biznes/">
              Малый и средний бизнес
            </a>
            <a target="_blank" href="#">
              Группа ВТБ
            </a>
          </div>
          {/* <button>
            <img src="/images/uiimages/dark_switch.png" alt="dark" width={30} height={30} />
          </button> */}
        </div>
        <div className={styles.HeaderContainer__navBlock__bottom}>
          <a target="_blank" href="https://www.vtb.ru/">
            Банк ВТБ
          </a>
          <a target="_blank" href="https://www.vtb.ru/about/">
            Группа ВТБ
          </a>
          <a target="_blank" href="https://www.vtb.ru/about/press/">
            Пресс-служба
          </a>
          <a target="_blank" href="https://www.vtb.ru/about/contacts/">
            Контакты
          </a>
          <a target="_blank" href="https://vtbcareer.com/">
            Вакансии
          </a>
        </div>
      </div>
    </section>
  );
}
/*
<button>
            <img src="/images/uiimages/dark_switch.png" alt="dark" width={30} height={30} />
          </button>
*/
