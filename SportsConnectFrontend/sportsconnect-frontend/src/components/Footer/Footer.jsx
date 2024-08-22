import React from 'react'
import '../../components/Footer/Footer.css'

const Footer = () => {
  return (
    <div>
      <footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section about">
                <h3>SportsConnect</h3>
                <p>Your one-stop platform to connect with sports enthusiasts, book events, and stay updated with the latest sports news.</p>
            </div>
            <div class="footer-section links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section social">
                <h4>Follow Us</h4>
                <ul>
                    <li><a href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
                    <li><a href="#"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                </ul>
            </div>
            <div class="footer-section contact">
                <h4>Contact Us</h4>
                <p><i class="fas fa-map-marker-alt"></i> 123 Sports Avenue, City, Country</p>
                <p><i class="fas fa-phone"></i> +1 (123) 456-7890</p>
                <p><i class="fas fa-envelope"></i> contact@sportsconnect.com</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 SportsConnect. All Rights Reserved.</p>
        </div>
    </div>
</footer>

    </div>
  )
}

export default Footer
