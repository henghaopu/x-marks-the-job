spotX = function(searchBarId) {
    var searchInputText = document.getElementById(searchBarId).value
    if (searchInputText.toLowerCase() === "lawyer") {
        //console.log(document.getElementById("square-4-7"))
        //document.getElementById("square-4-7").style.background = "grey"
        document.getElementById("square-4-7").children[0].children[0].src = "/images/houses-blue.svg"
        document.getElementById("square-4-7").children[0].children[0].style.width = '100%';   
    } else {
        document.getElementById("square-4-7").children[0].children[0].src = "/images/3d-house.svg"
    }
} 