import './styles.css'
function BodyMain(){
    return (
        <section className="hero">
        <div className="hero-content">
            <h1>This is Youthopia</h1>
            <p>Empowering youths to shape tomorrow's world with unwavering passion, purpose-driven initiatives, and boundless opportunities for growth and transformation.</p>
            <a href="/donations" className="donate-button">Donate Today</a>
        </div>
        <div className='empty-div'>

        </div>
        <div id="second-empty-div"className='empty-div'>

        </div>
        <img id="main-img" src='../Images/Main-landing-2.jpeg'></img>
    </section>
    )
}

export default BodyMain