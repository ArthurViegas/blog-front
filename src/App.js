import AllRoutes from './router/AllRoutes'
import './App.css';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <AllRoutes />
    </AppProvider>
  );
}

export default App;
