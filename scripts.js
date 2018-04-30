window.onload = function() {
    var searchBar = document.getElementById("search-bar");
    if (searchBar !== null) {
        if (searchBar.value.trim() === "lawyer") {
            markLawyerJobPosition()    
        } else {
            //clearLawyerJobPosition()
        }
    }
    // use window.name property to store data between pages
    if (window.name !== undefined) {
        if(window.name === "true") {
            document.getElementById("sign-in-list-item").style.display = "none"
            document.getElementById("profile-list-item").style.display = "block"
        }
    }
}



spotX = function(searchBarId) {
    var searchInputText = document.getElementById(searchBarId).value
    if (searchInputText.toLowerCase().trim() === "lawyer") {
        markLawyerJobPosition()
    } else {
        clearLawyerJobPosition()
    }
} 

spotKeyword = function(keywordId) {
    var id = keywordId.toLowerCase()
    var jobTitle = document.getElementById(id).innerHTML.trim()
    switch (jobTitle) {
        case "lawyer":
            var searchBar = document.getElementById("search-bar")
            searchBar.value = "lawyer"
            searchBar.onchange()
            break
        case "baker":
            break;
        case "carpenter":
            break;
    }
}

switchToProfile = function() {
    window.name = "true"
    window.location.href = "index.html"
}

switchToSignIn = function() {
    document.getElementById("sign-in-list-item").style.display = "block"
    document.getElementById("profile-list-item").style.display = "none"
    closeNav()
    window.name = undefined
}

//goToJobs = function(imageId) {
//    var id = imageId.toLowerCase()
//    var anchor = document.getElementById(id).parentNode.click()
//    var imageSource = document.getElementById(id).src
//    var imageSourceArray = imageSource.split('/')
//    var imageName = imageSourceArray[imageSourceArray.length - 1]
//    console.log(imageName)
//    if(imageName === "building5Yellow.svg") {
//        window.location.href = "job.html";
//    }
//}

function markLawyerJobPosition() {
    var square1 = document.getElementById("square-5-6")
    var square2 = document.getElementById("square-2-5")
    var square3 = document.getElementById("square-2-6")
    // building links
    square1.children[0].setAttribute("href", "job.html")
    square2.children[0].setAttribute("href", "job.html")
    square3.children[0].setAttribute("href", "job.html")
    // building images
    square1.children[0].children[0].setAttribute("src", "images/building5-yellow.svg")
    square2.children[0].children[0].setAttribute("src", "images/building4-yellow.svg")
    square3.children[0].children[0].setAttribute("src", "images/building4-yellow.svg")
    square1.children[0].children[0].style.width = '100%' 
    square2.children[0].children[0].style.width = '100%' 
    square3.children[0].children[0].style.width = '100%'
}

function clearLawyerJobPosition() {
    var square1 = document.getElementById("square-5-6")
    var square2 = document.getElementById("square-2-5")
    var square3 = document.getElementById("square-2-6")
    // building links
    square1.children[0].setAttribute("href", "javascript:void(0)")
    square2.children[0].setAttribute("href", "javascript:void(0)") 
    square3.children[0].setAttribute("href", "javascript:void(0)")
    // building images
    // file path reference: https://www.w3schools.com/html/html_filepaths.asp
    square1.children[0].children[0].setAttribute("src", "images/building5.svg") 
    square2.children[0].children[0].setAttribute("src", "images/building4.svg") 
    square3.children[0].children[0].setAttribute("src", "images/building4.svg") 
}

function openNav() {
    // document.getElementById("mainNav").style.width = "25vw";
    document.getElementById("mainNav").style.right = "0";
}

function closeNav() {
    //  document.getElementById("mainNav").style.width = "0";
    document.getElementById("mainNav").style.right = "-100%";
}