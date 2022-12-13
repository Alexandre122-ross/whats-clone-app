import { Routes, Route } from 'react-router-dom';
import RequireAuth from './privateRoutes';
import LoginScreen from '../components/loginModel';
import SignInScreen from '../screen/signIn';
import SignUpScreen from '../screen/signUp';
import HomeScreen from '../screen/home';

function MainRoutes() {
  return (
    <Routes>
      <Route path='/login' element={<LoginScreen />}>
        <Route path='' element={<SignInScreen />} />
        <Route path='signUp' element={<SignUpScreen />} />
      </Route>

      <Route path='/' element={<RequireAuth />}>
        <Route path='' element={<HomeScreen />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;