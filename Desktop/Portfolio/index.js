// Home Page Information
const homePageContent = {
    video: "lv_0_20240414170232.mp4",
    picture: "IMG_20240414_161145_886.jpg",
    bio: "Nasiphi Ndzumo ,I am passionate junior web devoloper andoftware engineer with knack for problem solving and love for innovation.",
    address: "20 Paradysvink road KemptonPark"
};

// About Page Information
const aboutPageContent = {
    name: "Nasiphi",
    surname: "Ndzumo",
    educationalBackground: "I'm a Web Developer-Leaner based in KemptonPark,Bircly",
    cv: "NASIPHI.docx",
    hobbies: ["gammer", "Coding",] 
};

// Function to populate Home Page content
function populateHomePage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h1>Home</h1>
        <video controls>
            <source src="${homePageContent.video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <img src="${homePageContent.picture}" alt="Your Picture">
        <p>${homePageContent.bio}</p>
    `;
}

// Function to populate About Page content
function populateAboutPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h1>About</h1>
        <p>Name: ${aboutPageContent.name}</p>
        <p>Surname: ${aboutPageContent.surname}</p>
        <p>Educational Background: ${aboutPageContent.educationalBackground}</p>
        <a href="${aboutPageContent.cv}" download>Download CV</a>
        <h2>Hobbies</h2>
        <ul>
            ${aboutPageContent.hobbies.map(hobby => `<li>${hobby}</li>`).join('')}
        </ul>
    `;
}

// Function to populate Footer content
function populateFooter(address) {
    const footerContent = document.getElementById('footer-content');
    footerContent.textContent = address;
}

//  variables for each page
const currentPage = window.location.pathname.split('/').pop();
let pageContent;
let footerAddress;


// Which page is currently being viewed and populate content accordingly
if (currentPage === 'index.html' || currentPage === '') {
    pageContent = homePageContent;
    footerAddress = homePageContent.address;
    populateHomePage();
} else if (currentPage === 'about.html') {
    pageContent = aboutPageContent;
    footerAddress = ""; // 
    populateAboutPage();
}

// Populate footer content
populateFooter(footerAddress);
