let bntClose = document.getElementsByClassName("close-btn");
document.addEventListener("click", function (event) {
const sidebar = document.querySelector(".sideBar");
const toggleBtn = document.querySelector(".menu-toggle");
if (window.innerWidth <= 899) {
    if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
        sidebar.classList.remove("show");
    }
}
else{
    bntClose.display = "none";
}
});

function MenuToggle() {
let menu = document.querySelector(".sideBar");
menu.classList.toggle("show");
}
    
let imageUploader = document.getElementById('fileInput');
imageUploader.addEventListener('change', function (event) {
    const file = event.target.files[0];

    const preview1 = document.getElementById('preview');
    const preview2 = document.getElementById('preview2');
    const preview3 = document.getElementById('preview3');

    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageUrl = `url('${e.target.result}')`;

            [preview1, preview2, preview3].forEach(preview => {
                preview.style.backgroundImage = imageUrl;
                preview.style.backgroundSize = 'cover';
                preview.style.backgroundPosition = 'center';
                preview.style.display = 'block';
            });
        };
        reader.readAsDataURL(file);
    } else {
        [preview1, preview2, preview3].forEach(preview => {
            preview.style.backgroundImage = '';
        });
        alert("Please select a valid image file.");
    }
});




const today = new Date(2024, 5, 10); // Month is 0-based: 5 = June
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('en-US', options);
document.getElementById('myFormattedDate').value = formattedDate;
const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');      // ម៉ោង
const minutes = String(now.getMinutes()).padStart(2, '0');  // នាទី
const currentTime = `${hours}:${minutes}`;
document.getElementById('myTime').value = currentTime;


function loadPage(event, page) {
    event.preventDefault(); // Stop full reload
    fetch(page)
        .then(res => res.text())
        .then(data => {
        document.getElementById("content").innerHTML = data;
        window.history.pushState({}, "", page); // Update URL
    });
}
