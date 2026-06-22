import { Link } from 'react-router-dom';

import { ROUTES } from '../../routes/paths';

export function ProfilePage() {
  return (
    <main>
      <h1>Profile</h1>
      <p>
        <Link to={ROUTES.login}>Log out</Link>
      </p>
    </main>
  );
}
