import { Link } from 'react-router-dom';

import { ROUTES } from '../../routes/paths';

export function RegisterPage() {
  return (
    <main>
      <h1>Sign up</h1>
      <p>
        Already have an account? <Link to={ROUTES.login}>Log in</Link>
      </p>
    </main>
  );
}
