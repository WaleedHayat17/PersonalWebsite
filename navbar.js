// Create a function to generate the navbar HTML
function createNavbar() {
    let currentDirectory = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
    let pathPrefix = '';

    // If we are in a subdirectory, adjust the prefix
    if (currentDirectory.includes("examples") || currentDirectory.includes("gallery")) {
        pathPrefix = '../';
    }

    // Set all the path variables (using the pathPrefix to adjust for subdirectories)
    let indexPage = pathPrefix + 'index.html';
    let resumePage = pathPrefix + 'resume.html';
    let contactMePage = pathPrefix + 'ContactMe.html';
    let examplesIndexPage = pathPrefix + 'examples/index.html';
    let examplesTablePage = pathPrefix + 'examples/table.html';
    let examplesFormPage = pathPrefix + 'examples/form.html';
    let galleryIndexPage = pathPrefix + 'gallery/index.html';
    let galleryPhoto1Page = pathPrefix + 'gallery/photo1.html';
    let galleryPhoto2Page = pathPrefix + 'gallery/photo2.html';
    let galleryPhoto3Page = pathPrefix + 'gallery/photo3.html';

    // Build the navigation using the path variables
    const navbarHTML = `
    <nav> <ul>
        <li><a href="${indexPage}">Home</a></li>
        <li><a href="${resumePage}">Resume</a></li>
        <li><a href="${contactMePage}">Contact Me</a></li>
        <li><a href="${examplesIndexPage}">Examples</a>
            <ul>
                <li><a href="${examplesTablePage}">Table</a></li>
                <li><a href="${examplesFormPage}">Form</a></li>
            </ul>
        </li>
        <li><a href="${galleryIndexPage}">Photo Gallery</a>
            <ul>
                <li><a href="${galleryPhoto1Page}">Photo 1</a></li>
                <li><a href="${galleryPhoto2Page}">Photo 2</a></li>
                <li><a href="${galleryPhoto3Page}">Photo 3</a></li>
            </ul>
        </li>
    </ul></nav>`;

    // Insert the navbar HTML into the element with the ID 'navbar'
    document.getElementById('navbar').innerHTML = navbarHTML;
}

// Call the function to create the navbar when the page loads
window.onload = createNavbar;