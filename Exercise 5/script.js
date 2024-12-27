function createCard(title, cName, views, Monthold, duration, thumbnail) {
  let viewstr
    if(views < 1000000){
       viewstr = views/ 1000 + "k"}
    else if(views > 1000000){
        viewstr = views/ 1000000 + "M"
    }
    else {
        viewstr= views/1000 + "k"
    }
    let html = `<div class="card">
            <div class="image">
                <img src=${thumbnail}
                    alt="">
                <div class="capsule">${duration}</div>

            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewstr} views .${Monthold} months ago </p>
            </div>
            </div>`
            
           document.querySelector(".container").innerHTML =document.querySelector(".container").innerHTML + html
}

createCard("Introduction to backend |Sigma web development","CodewithHarry",56000,7,"5:45","https://i.ytimg.com/vi/KB7GzBv5p4Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDVLIUfmrskNAha1yNa-7ygsEeNEA")