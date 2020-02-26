import React from 'react';
import MyForm from '../form/MyForm';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkLogin} from '../../store/actions/authActions';
import { AppState } from '../../store/reducers/rootReducer';
import { AsyncActionStatus } from '../../store/types/models';
import { Redirect } from 'react-router-dom';


const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const loginStatus = useSelector((state: AppState) => state.auth.status);

  const handleSubmit = (password: string, userName: string) => {
    dispatch(ThunkLogin(userName, password));
  }

  if(loginStatus === AsyncActionStatus.SUCCEEDED){
    return <Redirect to='/'/>
  }

  return(
    <div className="container">
      <MyForm onSubmit={({password, userName}) => handleSubmit(password, userName)}></MyForm>
    </div>
  )
}

export default SignIn;