const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");


const apiKey = "7f66fbfa7512ea35780f19e77b0d70e7";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;

    // check if there's already a city
    const listcity = list.querySelectorAll(".ajax-section .city");
    const listItems = Array.from(listcity);

    console.log('listItems:', listItems);

    if (listItems.length > 0) {
        const filterArray = listItems.filter(item => {
            let content = "";
            // handle input value
            if (inputVal.includes(",")) {
                if (inputVal.split(",")[1].length > 2) {
                    inputVal = inputVal.split(",")[0];
                    content = item
                        .querySelector(".city-name span").textContent.toLowerCase();
                } else {
                    content = item.querySelector(".city-name").dataset.name.toLowerCase();
                }
            } else {
                content = item.querySelector(".city-name span").textContent.toLowerCase();
            }

            console.log('content:', content);
            console.log('inputVal:', inputVal.toLowerCase());
            
            return content == inputVal.toLowerCase();
        });

        if (filterArray.length > 0) {
            msg.textContent = `You already know the weather for ${
            filterArray[0].querySelector(".city-name span").textContent
            } ...otherwise be more specific by providing the country code as well 😉`;
            
            form.reset();
            input.forcus();
        }
    }


    // api call
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    // fetch api
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            const { main, name, sys, weather } = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
                weather[0]["icon"]
            }.svg`;

            const li = document.createElement("li");
            li.classList.add("city");
            const markup = `
                <h2 class="city-name" data-name="${name}, ${sys.country}">
                    <span>${name}</span>
                    <sup>${sys.country}</sup>
                </h2>
                <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
                <figure>
                    <img class="city-icon" src="${icon}" alt="${weather[0]["description"]}">
                    <figcaption>${weather[0]["description"]}</figcaption>
                </figure>`;
            
            li.innerHTML = markup;
            list.appendChild(li);
        })
        .catch(() => {
            msg.textContent = "Please search for a valid city 😩";
        });
    
    msg.textContent = "";
    form.reset();
    input.focus();
});


