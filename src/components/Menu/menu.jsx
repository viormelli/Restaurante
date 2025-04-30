import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu() {
    return (
        <div className="card" style={{
            margin: 0,
            padding: 0,
            box- sizing: 'border-box',
                text - decoration: 'none',
                    transition: '0.3s',
 }}>
  <div className="card-header">
    <img
      src="img/profile-image-placeholder.jpg"
      alt="Profile Image"
      className="profile-img"
    />
  </div>
  <div className="card-body">
    <p className="name">Your Name</p>
    <a href="#" className="mail">
      yourname@amail.com
    </a>
    <p className="job">Developer | Designer</p>
  </div>
  <div className="social-links">
    <a href="#" className="fab fa-github social-icon" />
    <a href="#" className="fab fa-twitter social-icon" />
    <a href="#" className="fab fa-youtube social-icon" />
    <a href="#" className="fab fa-linkedin social-icon" />
  </div>
  <div className="card-footer">
    <p className="count">
      <span>120k</span> Followers | <span>10k</span> Following
    </p>
  </div>
</div >
    )
}
