import { Link } from 'react-router-dom';

import Form from './SignInForm';

import styles from '../SingUp/SignUp.module.scss';

const SingIn = () => (
  <div className="w-full h-100">
    <h1 className="text-4xl md:text-2xl font-bold leading-tight mt-12 text-center uppercase">
      Iniciar sesión
    </h1>
    <Form />
    <p className="mt-8 text-center">
      ¿Aun no tienes una cuenta?{' '}
      <Link to="/registro" className={styles.link}>
        Registrarte
      </Link>
    </p>
  </div>
);

export default SingIn;
