var email=document.getElementById("exampleInputEmail1");
var password=document.getElementById("exampleInputPassword1");
var login=document.getElementById('login');
var signup=document.getElementById('signup');
// function login(){

//     if(email.value=="" && password.value==""){
//         alert("please enter details")
//     }
//     else if(email.value==""){
//         alert("please enter email")
//     }
//     else if(password.value==""){
//         alert("please enter password")
//     }
//     else{
//         var user_data={
//                 "email":email.value,
//                 "password":password.value
//             }

//             console.log(user_data)
//             // localStorage.setItem("user-data",JSON.stringify(user_data))
//     }
   
// }
login.addEventListener("click",()=>{
    if(email.value=="" && password.value==""){
        alert("please enter details")
    }
    else if(email.value==""){
        alert("please enter email")
    }
    else if(password.value==""){
        alert("please enter password")
    }
    else{
        var user_data={
                "email":email.value,
                "password":password.value
            }

            console.log(user_data)
            // localStorage.setItem("user-data",JSON.stringify(user_data))
    }
});

var username = document.getElementById("username");
var emailaddress = document.getElementById("emailaddress")
var phone = document.getElementById("phonenumber");
var regPassword = document.getElementById("password");
signup.addEventListener("click",()=>{
    if (username.value == "" || emailaddress.value == ""||phone.value== ""||regPassword.value == "") {
        alert('Please fill all the fields');
        }
    
    else{
        let data = {
            name: username.value,
            email: emailaddress.value,
            contact: phone.value,
            password: regPassword.value
            };
            console.log(data)
        }
});



const animationEle = document.getElementById("team1-card");
animationEle.style.animation="mynewmove 2s 1"
const headerEle = document.querySelector('.header');
    window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        headerEle.classList.add('nav-scrolled');
        headerEle.style.borderWidth = "thick";
        headerEle.style.borderBottomColor="red";
        headerEle.classList.remove('header');
    } else {
        headerEle.classList.add('header');
        headerEle.classList.remove('nav-scrolled');
    }
    });
const tabs = document.querySelectorAll(".scrollable-tabs-container a");
const rightArrow = document.querySelector(".scrollable-tabs-container .right-arrow svg");
const leftArrow = document.querySelector(".scrollable-tabs-container .left-arrow svg");
const tabsList = document.querySelector(".scrollable-tabs-container ul");
const leftArrowContainer = document.querySelector(".scrollable-tabs-container .left-arrow");
const rightArrowContainer = document.querySelector(".scrollable-tabs-container .right-arrow");

        const removeAllActiveClasses = () => {
            tabs.forEach((tab) => {
                tab.classList.remove("active");
                tab.style.borderBottomColor = ""; // Reset border color
            });
        };

        tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                removeAllActiveClasses();
                tab.classList.add("active");
                // Set different border-bottom color for each active tab
                const colors = ["red", "blue", "green", "orange", "purple","gray","white","tomato","yellow","skyblue"];
                tab.style.borderBottomColor = colors[index % colors.length];
            });
        });

        const manageIcons = () => {
            if (tabsList.scrollLeft >= 20) {
                leftArrowContainer.classList.add("active");
            } else {
                leftArrowContainer.classList.remove("active");
            }

            let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;

            if (tabsList.scrollLeft >= maxScrollValue) {
                rightArrowContainer.classList.remove("active");
            } else {
                rightArrowContainer.classList.add("active");
            }
        };

        rightArrow.addEventListener("click", () => {
            tabsList.scrollLeft += 200;
            manageIcons();
        });

        leftArrow.addEventListener("click", () => {
            tabsList.scrollLeft -= 200;
            manageIcons();
        });

        tabsList.addEventListener("scroll", manageIcons);

        let dragging = false;

        const drag = (e) => {
            if (!dragging) return;
            tabsList.classList.add("dragging");
            tabsList.scrollLeft -= e.movementX;
        };

        tabsList.addEventListener("mousedown", () => {
            dragging = true;
        });

        tabsList.addEventListener("mousemove", drag);

        document.addEventListener("mouseup", () => {
            dragging = false;
            tabsList.classList.remove("dragging");
        });

    