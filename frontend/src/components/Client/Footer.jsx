import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-r from-black via-gray-950 to-yellow-800 text-white pt-10 pb-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {/* Column 1 */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Company</h2>
        <ul>
          <li className="mb-2 hover:text-yellow-500"><a href="/about">About Us</a></li>
          <li className="mb-2 hover:text-yellow-500"><a href="/contact">Contact Us</a></li>
          <li className="mb-2 hover:text-yellow-500"><a href="/location">Location</a></li>
          <li className="mb-2 hover:text-yellow-500"><a href="/blog">Blog</a></li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h2 className="text-lg font-semibold mb-4">For Foodies</h2>
        <ul>
  <li className="mb-2 hover:text-yellow-500">
    <a href="#">Restaurants</a>
  </li>
  
  <li className="mb-2 hover:text-yellow-500">
    <a href="#">Hours of Operation:</a>
    <ul className="ml-4 mt-2">
      <li><i className="fas fa-arrow-right mr-2"></i>Sunday to Thursday - 11 am to 11 pm</li>
      <li><i className="fas fa-arrow-right mr-2"></i>Friday and Saturday- 11am to 12am</li>
    </ul>
  </li>
</ul>


      </div>

      {/* Column 3 */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Legal</h2>
        <ul>
          <li className="mb-2 hover:text-yellow-500"><a href="/term">Terms & Conditions</a></li>
          <li className="mb-2 hover:text-yellow-500"><a href="/privacy">Privacy Policy</a></li>
          {/* <li className="mb-2 hover:text-yellow-500"><a href="/faqs">FAQs</a></li> */}
          
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
        <ul>
        <li className="mb-2 hover:text-yellow-500"><a href="/order">Order Now</a></li>
          <li className="mb-2 hover:text-yellow-500"><a href="/contact">Help & Support</a></li>
          <li className="mb-2 hover:text-yellow-500"><a href="/location">Location</a></li>
         
         
        </ul>
      </div>
    </div>

    {/* Divider */}
    <hr className="my-8 border-gray-700" />

    {/* Footer Bottom Section */}
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Footer Logo */}
      <div className="mb-4 md:mb-0">
        <h1 className="text-2xl font-bold">Indian Rasoi</h1>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4">
        <a href="https://www.facebook.com/profile.php?id=61565750174731&mibextid=LQQJ4d" className="hover:text-yellow-500"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.tiktok.com/@yourindianrasoi?_t=8q2IB4l5SyX&_r=1" className="hover:text-yellow-500">
  <i className="fab fa-tiktok"></i>
</a>

        <a href="https://www.instagram.com/indianrasoiabbotsford?igsh=Y2owZXNia3gzYXpw&utm_source=qr" className="hover:text-yellow-500"><i className="fab fa-instagram"></i></a>
       
      </div>

      {/* Legal Text */}
      <p className="mt-4 md:mt-0 text-sm text-gray-400">&copy; 2024 Techxpert.in | All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  )
}
