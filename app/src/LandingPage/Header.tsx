import './styles.css'
function Header(){
return(
    <header>
    <nav className="navbar">
        <div className="logo">NFYI</div>
        <div className="nav-links">
            <a href="#">Who We Are</a>
            <a href="#">What We Do</a>
            <a href="#">Join Us</a>
            <a href="#" className="donate">Donate</a>
        </div>
    </nav>
</header>)
}

export default Header