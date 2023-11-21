// script.js

// Function to show more information on the home page
function showMoreInfo() {
    var moreInfo = document.getElementById('more-info');
    var profileInfo = document.getElementById('profile-info');

    moreInfo.style.display = 'block';
    profileInfo.style.display = 'none';

    // Add a class to toggle visibility with smooth scroll
    document.getElementById('home').classList.add('expand');
}

// Function to show experience details
function showExperienceDetails(companyName) {
    // Replace the following lines with the actual details for each company
    var details = {
        'Accenture Solutions': {
            timeWorked: 'December 2020 - August 2023',
            role: 'Software Engineer(Application Development Analyst)',
            description: 'Analyzed and comprehended business processes, focusing on SAP SD, Order-to-Cash flows (from sales order to billing), and possess fundamental knowledge of other SAP modules, including SAP MM. ' +
            'Involved in Creating Tosca Automated test cases, designing test cases Execution, generating and sharing report with Stakeholders, analyzing reports as well as defect logging in Qtest. ' +
            'Created new Reusable test steps blocks (RTBs). Linking the Test case with Excel sheet to read and write data. ' +
            'Implemented TOSCA concepts like Libraries, Reusable test step blocks (RTB), Loops (If, While and Do-While), Dynamic wait, conditional statements, Templates, Date, and Math & Random Functions. '+
            'Maintained test scripts by executing and updating them in each sprint, while also reviewing and providing feedback on automated scripts developed by team members. ',
            
        },
        'IITH-IOT': {
            timeWorked: 'July 2019 - August 2019',
            role: 'Attended IOT Workshop at IIT Hyderabad',
            description: 'designed and implemented a temperature application sensor as part of an IoT workshop, showcasing my proficiency in sensor integration and IoT technology. ' +
            ' involved the selection and calibration of temperature sensors, interfacing with microcontrollers, and leveraging wireless communication protocols for real-time data transmission. ' +
            'Through this hands-on experience, I gained expertise in IoT device development, data acquisition, and remote monitoring. ' +
            'highlighting my ability to contribute to the rapidly evolving field of Internet of Things technology. ',
        },
        'Billiken Bounty': {
            timeWorked: 'Sept 2023 - Dec 2023',
            role: 'Volunteer at Billiken Bounty at saint louis university',
            description: 'Collaborated with a team to organize and execute food distribution initiatives to support individuals facing food insecurity in the local community. ' +
            ' Engaged with community members in a respectful and empathetic manner, fostering a positive and inclusive environment during distribution events. ' ,
        },
        // Add details for other companies as needed
    };

    var experienceDetails = document.getElementById('experience-details');

    // Check if details are available for the selected company
    if (details[companyName]) {
        var { timeWorked, role, description } = details[companyName];
        var descriptionList = description.split('. ').filter(Boolean); // Split by period and remove empty strings

        // Populate details based on the selected company
        experienceDetails.innerHTML = `
            <h3>${companyName}</h3>
            <p><strong>Time Worked:</strong> ${timeWorked}</p>
            <p><strong>Role:</strong> ${role}</p>
            <p><strong>Description:</strong></p>
            <ul>
                ${descriptionList.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
    } else {
        // Handle the case where details are not available
        experienceDetails.innerHTML = `<p>Details for ${companyName} are not available.</p>`;
    }

    experienceDetails.style.display = 'block';
}

// Function to show more information about yourself
function showProfileInfo() {
    var profileInfo = document.getElementById('profile-info');
    var moreInfo = document.getElementById('more-info');

    profileInfo.style.display = 'block';
    moreInfo.style.display = 'none';

    // Add a class to toggle visibility with smooth scroll
    document.getElementById('home').classList.add('expand');

    // Scroll to the bottom with smooth transition
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

// Function to send a message using the contact form
function sendMessage(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    var form = document.getElementById('contact-form');
    var formData = new FormData(form);

    // Disable the submit button to prevent multiple submissions
    var submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    // Make an AJAX request to Formspree
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formspree.io/f/xrgwvoal', true);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 201) {
                // Successful form submission
                alert("Thank you for your message! I will get back to you soon.");
                form.reset(); // Optional: Clear the form fields after submission
            } else {
                // Error handling (adjust as needed)
                alert("There was an error submitting the form. Please try again.");
            }

            // Re-enable the submit button after the response is received
            submitButton.disabled = false;
        }
    };

    // Send the form data
    xhr.send(formData);
}

// Function to toggle between light and dark mode
function toggleDarkMode() {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');

    // Save the user's preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Persist dark mode preference across pages
document.addEventListener('DOMContentLoaded', function () {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        toggleDarkMode();
    }
});

// Event listener for dark mode toggle button
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function () {
            toggleDarkMode();
        });
    }
});

// Event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            sendMessage(event);
        });
    }
});
