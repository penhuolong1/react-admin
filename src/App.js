import Routers from './router/index.jsx'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routers></Routers>
      </Provider>
    </div>
  );
}

export default App;
