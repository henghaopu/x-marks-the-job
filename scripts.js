var isSerious = true

window.onload = function() {
    var searchBar = document.getElementById("search-bar");
    if (searchBar !== null) {
        if (searchBar.value.trim() === "lawyer") {
            // two maps
            //markLawyerJobPosition()    
        } else {
            //clearLawyerJobPosition()
        }
    }
    // use window.name property to store data between pages
    if (window.name !== undefined) {
        if (window.name === "true") {
            // hide sign in icon
            document.getElementById("sign-in-list-item").style.display = "none"
            // show anonymous icon
            document.getElementById("profile-list-item").style.display = "block"
        }
    } 
    
    // check whether current page is job.html or not
    var apply = document.getElementById("apply-btn");
    if (apply !== null) {
        if (window.name !== undefined) {
            if (window.name === "true") {
                
            } else {
                document.getElementById("interview-question-image").setAttribute("src", "images/lock-red.svg")
                document.getElementById("test-image").setAttribute("src", "images/lock-red.svg")
                document.getElementById("qualifications-image").style.visibility = "hidden"
                //document.getElementById("interview-questions-content").style.visibility = "hidden"
            }
        } else {
            
        }
    }
    
    // two maps
    /*
    var themeChangeBtn = document.getElementById("theme-change-btn")
    if (!this.isSerious) {
        document.getElementsByClassName("dragontown-map1")[0].style.display = "none"
        document.getElementsByClassName("dragontown-map2")[0].style.display = "grid"
        themeChangeBtn.innerHTML = "Yeah, bright!"
        themeChangeBtn.style.backgroundColor = "#2BB0EA"
    } else {
        document.getElementsByClassName("dragontown-map1")[0].style.display = "grid"
        document.getElementsByClassName("dragontown-map2")[0].style.display = "none"
        themeChangeBtn.innerHTML = "Seriously, calm?"
        themeChangeBtn.style.backgroundColor = "#909090"
    }
    */
}

spotX = function(searchBarId) {
    var searchInputText = document.getElementById(searchBarId).value
    if (searchInputText.toLowerCase().trim() === "lawyer") {
        // two maps
        //markLawyerJobPosition()
        markLawyerJobPositionAtMap2()
    } else {
        // two maps
        //clearLawyerJobPosition()
        clearLawyerJobPositionAtMap2()
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

function markLawyerJobPositionAtMap2() {
    var block4 = document.getElementById("block-2-5")
    var block5 = document.getElementById("block-2-6")
    var block6 = document.getElementById("block-2-7")
    // building links
    block4.children[0].setAttribute("href", "job.html")
    block5.children[0].setAttribute("href", "job.html")
    block6.children[0].setAttribute("href", "job.html")
    // building images
    block4.children[0].children[0].setAttribute("src", "images/houses-3jobs.svg")
    block5.children[0].children[0].setAttribute("src", "images/houses-3jobs.svg")
    block6.children[0].children[0].setAttribute("src", "images/houses-3jobs.svg")
    block4.children[0].children[0].style.width = '100%' 
    block5.children[0].children[0].style.width = '100%' 
    block6.children[0].children[0].style.width = '100%'
}

function clearLawyerJobPositionAtMap2() {
    var block4 = document.getElementById("block-2-5")
    var block5 = document.getElementById("block-2-6")
    var block6 = document.getElementById("block-2-7")
    // building links
    block4.children[0].setAttribute("href", "javascript:void(0)")
    block5.children[0].setAttribute("href", "javascript:void(0)") 
    block6.children[0].setAttribute("href", "javascript:void(0)")
    // building images
    // file path reference: https://www.w3schools.com/html/html_filepaths.asp
    block4.children[0].children[0].setAttribute("src", "images/houses.svg") 
    block5.children[0].children[0].setAttribute("src", "images/houses.svg") 
    block6.children[0].children[0].setAttribute("src", "images/houses.svg") 
}

function openNav() {
    // document.getElementById("mainNav").style.width = "25vw";
    document.getElementById("mainNav").style.right = "0";
}

function closeNav() {
    //  document.getElementById("mainNav").style.width = "0";
    document.getElementById("mainNav").style.right = "-100%";
}

function changeFace(id) {
    document.getElementById(id).children[0].setAttribute("src", "images/happy-round-eyes.svg")
}

function changeFaceBack(id) {
    document.getElementById(id).children[0].setAttribute("src", "images/happy.svg")
}

function changeTheme(id) {
    var themeChangeBtn = document.getElementById(id)
    if (themeChangeBtn.innerHTML === "Seriously, calm?") {
        document.getElementsByClassName("dragontown-map1")[0].style.display = "none"
        document.getElementsByClassName("dragontown-map2")[0].style.display = "grid"
        themeChangeBtn.innerHTML = "Yeah, bright!"
        themeChangeBtn.style.backgroundColor = "#2BB0EA"
        
        document.getElementById("search-bar").style.backgroundColor = "#FFFF00"
        
        document.getElementById("sign-in-list-item").style.backgroundColor = "#FEEF35"
        document.getElementById("sign-in-anchor").style.color = "#07273B"
        
        document.getElementsByClassName("dragontown-map2")[0].style.setProperty("-webkit-transition", "0.5s linear");
        // not functioning
        //document.getElementsByClassName("dragontown-map2")[0].style.opacity = 1
        
        isSerious = false
    } else {
        document.getElementsByClassName("dragontown-map1")[0].style.display = "grid"
        document.getElementsByClassName("dragontown-map2")[0].style.display = "none"
        themeChangeBtn.innerHTML = "Seriously, calm?"
        themeChangeBtn.style.backgroundColor = "#909090"
        
        document.getElementById("search-bar").style.backgroundColor = "white"
        
        document.getElementById("sign-in-list-item").style.backgroundColor = "#07273B"
        document.getElementById("sign-in-anchor").style.color = "white"
        // not functioning
        document.getElementsByClassName("dragontown-map2")[0].style.opacity = 0
        
        isSerious = true
    }
}

// job.html 
function apply() {
    console.log(window.name)
    if (window.name === "true") {
        alert('Application has been sent to this company.')
    } else {
        alert('Please sign in first.')
    }
}