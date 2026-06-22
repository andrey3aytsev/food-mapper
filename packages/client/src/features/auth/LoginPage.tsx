import { Link } from 'react-router-dom';

import { ROUTES } from '../../routes/paths';

export function LoginPage() {
  return (
    <main>
      <h1>Log in</h1>
      <p>
        No account? <Link to={ROUTES.register}>Sign up</Link>
      </p>
    </main>
  );
}
