import Link from 'next/link';
import Image from 'next/image'
import logo from '../../utils/img/Nairarefill_logo.webp';
import regIcon from '../../utils/img/reg.svg';

const Header = () => {
  return (
    <header className="p-3">
        <nav className="d-flex align-items-center justify-content-between">
            <Image src={logo} alt="brand-logo" />
            <div className="d-flex gap-3">
                <Link className="nav-reg" href=""><Image src={regIcon} alt="brand-logo" width="15px" /> Register </Link>
                <Link className="nav-log" href="">Login</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header