import React, { createContext, Dispatch, PureComponent } from 'react';
import { AuthAction } from './AuthProvider';

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
