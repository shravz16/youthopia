import './styles.css'
function Leadership(){
return (
    <section className="leadership-section">
    <h2>Youthopia offers a wide range of Camps and Activities</h2>
    <p className="leadership-intro">that allows young minds to find and create camps, activities and much more on their own. Register for an existing camp or an activity or post your own ideas.</p>

    <div className="leadership-areas">
        <div className="area" id='camp-area'>
            <img src="../Images/camps.jpeg" alt="Building Relationships" />
            <div className='area-content'>
                <h3>Camps that offer much more than entertainment</h3>
                <p>Engage in meaningful action on our platform by joining or creating campaigns tailored to your passions. Whether advocating for social justice, environmental conservation, or community development, our user-friendly interface empowers you to make a difference. Register or initiate campaigns today and inspire positive change within your community and beyond.</p>
            </div>

        </div>
        <div className="area" id='acti-area'>
            <img src="../Images/activities.jpeg" alt="Empowering Foster Youth"/>
            <div className='area-content'>
                <h3>Activities that are absolutely entertaining</h3>
                <p>Dive into a world of diverse activities on our platform, from energetic dance classes to exhilarating marathons and beyond. Explore a myriad of interests, from sports to arts, and discover new passions. With something for everyone, our platform fosters community engagement and personal growth through exciting and enriching experiences.</p>
            </div>

        </div>
    </div>

    <a href="#" className="campaign-button">Explore Camps & Activities</a>
</section>
)
}

export default Leadership;