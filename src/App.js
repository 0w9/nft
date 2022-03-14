import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import ShareTweet from './components/shareTweet';
import InfoText from './components/infoText';
import NavBar from './components/navBar';

import UrlChecker from './components/urlChecker';

function App() {
  return (
    <div className="App">
      <Header />
      <InfoText />
      <ShareTweet />

      <UrlChecker />
    </div>
  );
}

export default App;
