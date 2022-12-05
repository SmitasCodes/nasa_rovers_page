let main = document.querySelector("#main");

function fetchas(){
    let links = ['https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=2004-5-6&api_key=9t11eTG34zO6gjnLmtOqtxvZzP9xTpZfwxMXZ8u8','https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?earth_date=2010-2-4&api_key=9t11eTG34zO6gjnLmtOqtxvZzP9xTpZfwxMXZ8u8',
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-2-1&api_key=9t11eTG34zO6gjnLmtOqtxvZzP9xTpZfwxMXZ8u8'
    ]
    for(let i in links){
        fetch(links[i])
            .then((res) => res.json())
            .then((data) => {
                let arr =[];
                let div = document.createElement("div")
                let img = document.createElement("img");
                let h3 = document.createElement("h3");
                let h3_2 = document.createElement("h3");
                img.src = data.photos[0].img_src;
                h3.innerText = data.photos[0].rover.landing_date
                h3_2.innerText = "8";
                div.appendChild(img)
                div.appendChild(h3)
                div.appendChild(h3_2)
                main.appendChild(div)
            })
    }   
}

fetchas()