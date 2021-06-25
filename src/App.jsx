import { useSelector } from 'react-redux';
import FormLogin from './components/FormLogin';
import Welcome from './components/Welcome';

function App() {
  const user = useSelector((state) => state.user);

  return <div className="App">{user?.id ? <Welcome /> : <FormLogin />}</div>;
}

export default App;
