// JavaScript to handle menu item clicks and content loading
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = ["batches", "contact", "telegram", "copyright", "switch"];
    const contentContainer = document.getElementById("content");

    menuItems.forEach((item) => {
        const menuItem = document.getElementById(`menu-${item}`);
        menuItem.addEventListener("click", function () {
            contentContainer.innerHTML = ""; // Clear existing content
            switch (item) {
                case "batches":
                    showBatches();
                    break;
                // Add other cases for different menu items
            }
        });
    });
});

function showBatches() {
    // Create batch elements here, e.g., Arjuna Jee 1.0 and Lakshya Jee 1.0
    // You can add view now buttons with click event listeners to load subjects and lessons.
    // Example:
    const arjunaJeeBatch = createBatch("Arjuna Jee 1.0", "https://i.ytimg.com/vi/A1JdXKKKOwc/maxresdefault.jpg");
    const lakshyaJeeBatch = createBatch("Lakshya Jee 1.0", "https://th.bing.com/th/id/OIP.8YsP5_uWGyzv6Z2QtUuV1AHaDt?w=337&h=174&c=7&r=0&o=5&pid=1.7");
    
    appendToContent(arjunaJeeBatch);
    appendToContent(lakshyaJeeBatch);
}

function createBatch(batchName, imageUrl) {
    const batch = document.createElement("div");
    batch.classList.add("batch");

    const image = document.createElement("img");
    image.src = imageUrl;
    image.style.width = "300px";

    const batchInfo = document.createElement("div");
    const batchNameElement = document.createElement("h2");
    batchNameElement.textContent = batchName;
    
    const viewNowButton = document.createElement("button");
    viewNowButton.textContent = "View Now";
    viewNowButton.classList.add("view-now-button");
    viewNowButton.addEventListener("click", () => {
        // Load subjects and lessons for this batch
        showSubjects(batchName);
    });

    batchInfo.appendChild(batchNameElement);
    batchInfo.appendChild(viewNowButton);
    
    batch.appendChild(image);
    batch.appendChild(batchInfo);

    return batch;
}

function appendToContent(element) {
    const contentContainer = document.getElementById("content");
    contentContainer.appendChild(element);
}

function showSubjects(batchName) {
    // Implement the subject selection logic here
    // You can create subject shapes with event listeners to show the lessons.
    // Example:
    const subjects = ["Physics", "Mathematics", "Chemistry"];

    const subjectContainer = document.createElement("div");

    subjects.forEach((subject) => {
        const subjectShape = document.createElement("div");
        subjectShape.textContent = subject;
        subjectShape.classList.add("subject-shape");
        subjectShape.addEventListener("click", () => {
            // Load lessons for this subject in the tabular form
            showLessons(batchName, subject);
        });
        
        subjectContainer.appendChild(subjectShape);
    });

    appendToContent(subjectContainer);
}

function showLessons(batchName, subject) {
    // Implement the lesson selection logic here
    // You can create a tabular form with lessons and "View Content" buttons.
    // Example:
    const lessons = getLessonsForBatchAndSubject(batchName, subject);

    const lessonsTable = document.createElement("table");
    lessonsTable.classList.add("lessons-table");

    // Create table header with columns
    const headerRow = lessonsTable.insertRow(0);
    const srNoHeader = headerRow.insertCell(0);
    srNoHeader.textContent = "Sr. No";
    const lessonNameHeader = headerRow.insertCell(1);
    lessonNameHeader.textContent = "Lesson Name";
    const contentHeader = headerRow.insertCell(2);
    contentHeader.textContent = "Content";

    // Create rows for each lesson
    lessons.forEach((lesson, index) => {
        const row = lessonsTable.insertRow(index + 1);
        const srNoCell = row.insertCell(0);
        srNoCell.textContent = index + 1;
        const lessonNameCell = row.insertCell(1);
        lessonNameCell.textContent = lesson.name;

        // Add "View Content" button
        const contentCell = row.insertCell(2);
        const viewContentButton = document.createElement("button");
        viewContentButton.textContent = "View Content";
        viewContentButton.classList.add("view-now-button");
        viewContentButton.addEventListener("click", () => {
            // Handle opening the content file for this lesson
            openContent(lesson.path);
        });
        contentCell.appendChild(viewContentButton);
    });

    appendToContent(lessonsTable);
}

function getLessonsForBatchAndSubject(batchName, subject) {
    // Implement a function to retrieve lessons for a specific batch and subject
    // This can be based on your data source or a static definition
    // Example:
    const lessons = {
        "Arjuna Jee 1.0": {
            "Physics": [
                { name: "Units and Dimensions", path: "C:/lessons/physics/units.html" },
                { name: "Basics Mathematics", path: "C:/lessons/physics/basics.html" },
                { name: "Motion in 1 Dimensions", path: "C:/lessons/physics/motion.html" }
            },
            "Chemistry": [
                { name: "Mole Concept", path: "C:/lessons/chemistry/mole.html" },
                { name: "Some Basics Concept of Chemistry", path: "C:/lessons/chemistry/basics.html" },
                { name: "Chemical Bonding", path: "C:/lessons/chemistry/bonding.html" }
            ],
            "Mathematics": [
                { name: "Basics Mathematics", path: "C:/lessons/mathematics/basics.html" },
                { name: "Sets Theory", path: "C:/lessons/mathematics/sets.html" },
                { name: "Relation and Function", path: "C:/lessons/mathematics/relation.html" }
            }
        },
        "Lakshya Jee 1.0": {
            "Physics": [
                { name: "Electrostatics", path: "C:/lessons/physics/electrostatics.html" },
                { name: "Electro Potential and Capacitance", path: "C:/lessons/physics/electro_potential.html" }
            ],
            "Mathematics": [
                { name: "Relation and Functions", path: "C:/lessons/mathematics/relation.html" },
                { name: "Inverse Trigonometric Function", path: "C:/lessons/mathematics/inverse_trig.html" },
                { name: "Matrices", path: "C:/lessons/mathematics/matrices.html" },
                { name: "Determinants", path: "C:/lessons/mathematics/determinants.html" },
                { name: "Limits, Continuity and Differentiability", path: "C:/lessons/mathematics/limits.html" },
                { name: "Application of Derivative", path: "C:/lessons/mathematics/application.html" }
            ],
            "Chemistry": [
                { name: "Solutions", path: "C:/lessons/chemistry/solutions.html" },
                { name: "Chemical Kinematics", path: "C:/lessons/chemistry/kinematics.html" }
            ]
        }
    };

    return lessons[batchName] && lessons[batchName][subject] ? lessons[batchName][subject] : [];
}

function openContent(path) {
    // Implement the logic to open content based on the provided path
    // You can use JavaScript's window.open or other methods for this purpose
    // Example:
    window.open(path);
}
