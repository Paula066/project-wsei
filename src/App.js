import React from 'react';
import './App.scss';

const handleClick = () => {
    console.log('lala');
}
class App extends React.Component {

  render() {
    return (
        <div>
        <Header />
        <Box />
        </div>
    );
  }
}

const Header = () => {
    return (
        <div className="header">
            <div className="hamburger" onClick={handleClick}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="popup">
                <ul>
                    <li>
                        <a href="#">Zaloguj sie</a>
                    </li>
                    <li>
                        <a href="#">Zarejestruj sie</a>
                    </li>
                    <li>
                        <a href="#">Twoje rezerwacje</a>
                    </li>
                    <li>
                        <a href="#">Kontakt</a>
                    </li>
                    <li>
                        <a href="#">O nas</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const Box = () => {
    return (
        <div className="box">
            <div className="container flex">
                <div className="localization">
                    <h2>Lokalizacja</h2>
                    <input type="text" />
                    <button>Szukaj</button>
                </div>
                <div className="localization">
                    <h2>Znajdz restaurcje</h2>
                    <input type="text" />
                    <button>Szukaj</button>
                </div>
            </div>
        </div>
    )
}
export default App;
