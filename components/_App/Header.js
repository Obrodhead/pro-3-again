import { Menu, Container, Image, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { handleLogout } from '../../utils/auth';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header({ user }) {
  const router = useRouter();
  const isRoot = user && user.role === 'root';
  const isAdmin = user && user.role === 'admin';
  const isRootOrAdmin = isRoot || isAdmin;

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu stackable fluid id='menu' inverted>
      <Container text>
        <Link href='/'>
          <Menu.Item header active={isActive('/')}>
            Eat-2-Fit
          </Menu.Item>
        </Link>

        <Link href='/cart'>
          <Menu.Item header active={isActive('/cart')}>
            Cart
          </Menu.Item>
        </Link>

        {isRootOrAdmin && (
          <Link href='/create'>
            <Menu.Item header active={isActive('/create')}>
              Create
            </Menu.Item>
          </Link>
        )}

        {user ? (
          <>
            <Link href='/account'>
              <Menu.Item header active={isActive('/account')}>
                Account
              </Menu.Item>
            </Link>

            <Menu.Item onClick={handleLogout} header>
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Link href='/login'>
              <Menu.Item header active={isActive('/login')}>
                Login
              </Menu.Item>
            </Link>

            <Link href='/signup'>
              <Menu.Item header active={isActive('/signup')}>
                Signup
              </Menu.Item>
            </Link>
          </>
        )}
      </Container>
    </Menu>
  );
}

export default Header;
