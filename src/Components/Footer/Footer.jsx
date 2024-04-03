import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          <p>Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.</p>
          <p>Questions? Contact us.</p>
        </div>
        <div className="footer-column">
          <table>
            <tbody>
              <tr>
                <td><a href=" ">FAQ</a></td>
                <td><a href=" ">Help Centre</a></td>
                <td><a href=" ">Account</a></td>
              </tr>
              <tr>
                <td><a href=" ">Media Centre</a></td>
                <td><a href=" ">Investor Relations</a></td>
                <td><a href=" ">Jobs</a></td>
              </tr>
              <tr>
                <td><a href=" ">Ways to Watch</a></td>
                <td><a href=" ">Terms of Use</a></td>
                <td><a href=" ">Privacy</a></td>
              </tr>
              <tr>
                <td><a href=" ">Cookie Preferences</a></td>
                <td><a href=" ">Corporate Information</a></td>
                <td><a href=" ">Contact Us</a></td>
              </tr>
              <tr>
                <td><a href=" ">Speed Test</a></td>
                <td><a href=" ">Legal Notices</a></td>
                <td><a href=" ">Only on Netflix</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="disclaimer">
        <p style={{paddingTop:30}}>Netflix is a registered trademark of Netflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
