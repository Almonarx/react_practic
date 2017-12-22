import { Form } from '../../components/form';
import { Loader } from '../../components/loader';

export const Login = props => (
  props.isLoading ?
    <Loader /> :
    <Form
      exclude={['name', 'surname', 'repeat password']}
      submit={props.login}
    />
);
