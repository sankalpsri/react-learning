import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
// import viteLogo from '/images/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Headers() {
  return (
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    );
}

export default Headers;
