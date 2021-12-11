const dirjson = "https://njessee99.github.io/wdd230/marasy_chamber_of_commerce/directoryJson.json";

fetch(dirjson)
    .then((response) => response.json())
    .then((djsObject) => {
        console.log(djsObject)
    const bus = djsObject["businesses"];
    bus.forEach((bus) => {
        let card = document.createElement("div")
        let h3 = document.createElement("h3");
        let info = document.createElement("div");
        let details = document.createElement('p');
        let logo = document.createElement("img");

        
        card.className = "list";
        h3.innerHTML = `${bus.name}`;
        card.appendChild(h3);
        card.append(info);
        logo.setAttribute("src", `images/${bus.logo}`);
        logo.setAttribute("alt", `${bus.name} logo`);
        info.appendChild(logo);
        details.innerHTML = `Visit Us Online: <a href="${bus.website}">${bus.website_txt}</a><br>Call Us: ${bus.phone}<br>Find Us: <a href="${bus.location}">Location</a>`;
        info.appendChild(details);
        document.querySelector("#busDirectory").appendChild(card);
    })        
    });

    function toggleGrid() {
        document.querySelector("#busDirectory").classList.toggle("dirGrid");
    };
 
