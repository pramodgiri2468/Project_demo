import { Link } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';

export const Navbar = () => {
  const links = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Shop',
      path: '/shop',
    },
    {
      label: 'Product',
      path: '/product',
    },
    {
      label: 'Blog',
      path: '/blog',
    },
    {
      label: 'About',
      path: '/about',
    },
  ];

  return (
    <header className='w-full'>
      <div className='container mx-auto py-5 flex justify-between'>
        <div className='font-serif'>Miralou</div>
        <nav className='flex gap-4 items-center'>
          {links.map((link) => (
            <Link to={link.path}>{link.label}</Link>
          ))}
        </nav>
        <div className='flex gap-8'>
          <button>
            <SearchIcon />
          </button>
          <button>
            <HeartIcon />
          </button>
          <button>
            <CartIcon />
          </button>
        </div>
      </div>
    </header>
  );
};