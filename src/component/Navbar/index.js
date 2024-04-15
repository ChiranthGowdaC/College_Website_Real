import collegeLogo from "../../Assets/collegeLogo.png";
import "./navbar.css";
function Navbar() {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="navbar">
      <div className="logo-container">
        <img src={collegeLogo} alt="Clglogo" />
      </div>
      <ul class="nav-links">
      <li onClick={() => scrollToSection("home")} >Home</li>
      <li onClick={() => scrollToSection("aboutus")}>About Us</li>
      <li onClick={() => scrollToSection("leadership")} >Leadership</li>
      <li onClick={() => scrollToSection("admissions")}>Admissions </li>
      <li onClick={() => scrollToSection("campuslife")}>Campus Life</li>
      <li onClick={() => scrollToSection("placement")}>Placement</li>
    </ul>      
      </div>
    
  );
}
export default Navbar;