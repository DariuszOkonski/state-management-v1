import { useReducer, useState } from 'react';
import authReducer from './reducers/authReducer';

const LoginStatus = () => {
  // const [user, setUser] = useState('');
  const [user, dispatch] = useReducer(authReducer, '');

  if (user)
    return (
      <>
        <div>
          <span className='mx-2'>{user}</span>
          <a
            onClick={
              // () => setUser('')
              () => dispatch({ type: 'LOGOUT' })
            }
            href='#'
          >
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={
          // () => setUser('mosh.hamedani')
          () => dispatch({ type: 'LOGIN', user: 'mosh.hamedani' })
        }
        href='#'
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
