// Scrolling Animation
document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scroll({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// scroll animation for icon 
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopLink = document.querySelector('.scroll-top-link');
    scrollToTopLink.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            window.scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// This is for the ABOUT ME Animation 
function typeWriter(text, i, id) 
{
    if (i < text.length) 
    {
        document.getElementById(id).innerHTML += text.charAt(i);
        i++;
        setTimeout(function () 
        {
            typeWriter(text, i, id);        
        }, 100); // Adjust the typing speed here (milliseconds)
    } 
    else 
    {
        setTimeout(function () 
        {
            document.getElementById(id).innerHTML = ''; // Clear the text after typing is complete
            i = 0;
            typeWriter(text, i, id); // Restart typing
        }, 2000); // Adjust the delay before restart (milliseconds)
    }
}

function startTyping() 
{
    var title = "About Me";
    var i = 0;
    var id = "about-title"; // Assign an ID to your h1 element, like class="sub-title" id="about-title"
    typeWriter(title, i, id);
}
window.onload = startTyping;


// Animation Skill Bars
const skillBars = document.querySelectorAll('.skill-progress');

// Loop through each skill bar
skillBars.forEach(skill => {
    const progress = skill.style.width;
    skill.style.width = '0'; // Set initial width to 0
    setTimeout(() => {
        skill.style.width = progress; // Animate width to the actual progress percentage
    }, 500); // You can adjust the delay as needed
});

document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.personal-image-container');
    let descriptionArea;

    // Define sentences for each image title
    const imageSentences = {
        'Yoga': '"Embracing the calming discipline of yoga, fostering balance and well-being for the mind and body."',
        'Technology': '"Explore new technologies while embracing the world of innovation and learning."',
        'Travel': '"Passionate about embarking on adventurous journeys, exploring diverse cultures through travel experiences."'
    };

    imageContainers.forEach(container => {
        container.addEventListener('click', function() {
            const title = this.getAttribute('data-desc'); // Get the data-desc attribute (title)
            const description = imageSentences[title]; // Get the corresponding sentence

            if (descriptionArea) {
                descriptionArea.remove();
                descriptionArea = null;
            }

            descriptionArea = showDescription(title, description);

            setTimeout(() => {
                descriptionArea.remove();
                descriptionArea = null;
            }, 5000); // Adjust the duration (in milliseconds) before the description disappears
        });
    });

    function showDescription(title, description) {
        const titleElement = document.createElement('h2');
        titleElement.textContent = title;

        const descElement = document.createElement('p');
        descElement.textContent = description;

        const newDescriptionArea = document.createElement('div');
        newDescriptionArea.classList.add('description');
        newDescriptionArea.appendChild(titleElement);
        newDescriptionArea.appendChild(descElement);

        const personalContent = document.querySelector('.personal-content');
        personalContent.appendChild(newDescriptionArea);

        return newDescriptionArea;
    }
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

// Function to open the modal with the clicked image
function openModal(imageSrc, altText) {
    modal.style.display = "block";
    modalImg.src = imageSrc;
    captionText.innerHTML = altText; // You can use alt text or any other text for the caption
}

// Close the modal when the 'x' (close) button is clicked
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Contacts Section Sending Success Message
document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Perform your form submission to Formspree
    // This is handled by Formspree itself

    // Display the success message
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';

    // Hide the success message after 5 seconds (5000 milliseconds)
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 3000);
});

// Contacts Section - Connection with EmailJS to get sent to my email address
function sendMail(){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };

    const serviceID = "service_3sznct4";
    const templateID = "template_73pziqs";

    emailjs.send(serviceID,templateID,params)
    .then((rest) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
    .catch ((err) => console.log(err));
}


