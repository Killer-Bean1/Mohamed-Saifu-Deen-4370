let sidemenu = document.getElementById("sideMenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}
      
      
      
      
      
      
      
      
      
      
      /* =================================================================
         MOBILE HAMBURGER MENU FUNCTIONALITY
         =================================================================
         Controls the mobile navigation menu behavior:
         
         Features:
         - Toggles menu visibility when hamburger icon is clicked
         - Automatically closes menu when navigation link is selected
         - Uses CSS classes for smooth open/close animations
         - Provides better user experience on mobile devices
         
         Technical Details:
         - hamburger.classList.toggle('active'): Switches hamburger to X icon
         - navLinks.classList.toggle('active'): Shows/hides navigation menu
         - Event listeners handle user interactions
         ================================================================= */

      // Get DOM elements for menu control
      const hamburger = document.querySelector(".hamburger"); // Hamburger icon
      const navLinks = document.querySelector(".nav-links"); // Navigation menu links
      const navbar = document.querySelector(".navigation"); // Navigation menu

      /* =================================================================
         HAMBURGER CLICK HANDLER
         =================================================================
         Purpose: Opens/closes the mobile navigation menu
         Action: Toggles 'active' class on both hamburger and nav links
         Result: Menu appears/disappears with smooth animation
         ================================================================= */
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active"); // Animate hamburger to X or back
        navLinks.classList.toggle("active"); // Show or hide navigation menu
      });

      /* =================================================================
         NAVIGATION LINK CLICK HANDLERS
         =================================================================
         Purpose: Automatically close menu after user selects a page
         Why: Improves user experience by not leaving menu open
         Action: Removes 'active' class from both elements
         Result: Menu closes and hamburger returns to normal state
         ================================================================= */
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active"); // Reset hamburger to lines
          navLinks.classList.remove("active"); // Hide navigation menu
        });
      });
    


      if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach((link) => {
          link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
          });
        });
      }

      // Minimal UI feedback for form submit (works with Formspree or server POST)
      const form = document.getElementById("contactForm");
      const formNotice = document.getElementById("formNotice");
      if (form) {
        form.addEventListener("submit", () => {
          formNotice.textContent = "Sending message...";
        });
      }

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');    // Animate hamburger to X
        navLinks.classList.toggle('active');     // Show/hide navigation menu
      });

      // Close menu when any navigation link is clicked
      // This provides better UX by automatically closing menu after selection
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');   // Reset hamburger icon
          navLinks.classList.remove('active');    // Hide navigation menu
        });
      });

      // Get all tab buttons and content sections
      const tabButtons = document.querySelectorAll('.tab-button');
      const matchesContent = document.querySelectorAll('.matches-content');

      // Add click event listener to each tab button
      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Get the target content ID from data-tab attribute
          const targetTab = button.getAttribute('data-tab');
          
          /* =================================================================
             TAB SWITCHING LOGIC
             =================================================================
             Process:
             1. Remove 'active' class from all buttons and content
             2. Add 'active' class to clicked button
             3. Add 'active' class to corresponding content section
             This ensures only one tab is visible at a time
             ================================================================= */
          
          // Remove active class from all elements
          tabButtons.forEach(btn => btn.classList.remove('active'));
          matchesContent.forEach(content => content.classList.remove('active'));
          
          // Add active class to clicked elements
          button.classList.add('active');
          document.getElementById(targetTab).classList.add('active');
        });
      });
    
        
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');    // Animate hamburger to X or back
        navLinks.classList.toggle('active');     // Show or hide navigation menu
      });

      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');   // Reset hamburger to lines
          navLinks.classList.remove('active');    // Hide navigation menu
        });
      });

      
    