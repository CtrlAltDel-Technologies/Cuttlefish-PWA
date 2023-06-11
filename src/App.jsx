// import { useEffect } from 'react';
import './App.css';

function App() {
  const handleConnectToDevice = () => {
    navigator.bluetooth.requestDevice({ acceptAllDevices: true, services: [0xFFE5] }).then((device) => {
      console.log('HERE Device', device)
      return device.gatt.connect();
    }).then((service) => {
      console.log('HERE', service);
    })
  };

  return (
    <>
      <div>
        <button onClick={handleConnectToDevice}>Connect</button>

      </div>
    </>
  )
}

export default App;
