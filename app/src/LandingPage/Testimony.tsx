import './styles.css'
function Testimony(){
    return (
        <section className="testimonial-section">
        <div className="testimonial-container">
            <blockquote className="testimonial-quote">
                NFYI members have had a huge impact on my office and the work we do. I truly rely on them to tell me what's happening in our community and how the federal child welfare legislation we pass is being implemented. NFYI supports these young adults in speaking
                effectively and in recognizing that their experience can be a strength. I'm thankful that they've made it possible for me to better serve my district and our nation's children and families.
            </blockquote>
            <p className="testimonial-author">
                THE HONORABLE KAREN BASS, MAYOR OF LOS ANGELES <br/> FOUNDER, NFYI <br/> CO-CHAIR, CONGRESSIONAL CAUCUS ON FOSTER YOUTH
            </p>
           
            <div className="carousel-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    </section>
    )
}

export default Testimony;