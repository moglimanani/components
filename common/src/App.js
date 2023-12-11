import './App.css';
import GlobalProvider from './contexts/provider/GlobalProvider';

import ButtonSupportComponent from './buttonSupportComponent';
function App(props) {

  return (
    <GlobalProvider>
      <h1>Mogli developers</h1>
      <ButtonSupportComponent />
    </GlobalProvider>
  )
}

export default App;
