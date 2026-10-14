import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Analyze', to: '/analyze' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="FabricAI home">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-900 text-sm font-bold text-white shadow-luxe">
            F
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-stone-900">FabricAI</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-stone-200 bg-stone-50/80 p-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-white text-stone-900 shadow-sm ring-1 ring-stone-200'
                    : 'text-stone-600 hover:bg-white hover:text-stone-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/analyze"
          className="inline-flex items-center justify-center rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700"
        >
          Analyze Fabric
        </Link>
      </div>
    </header>
  );
}
