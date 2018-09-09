class Teacher extends HTMLElement{
    get uri(){
        return this.getAttribute("uri");
    }
    connectedCallback(){
        fetch(this.uri).then(r => r.json()).then(j => {
            j.forEach(element => {

                var img = document.createElement("img");
                var ul = document.querySelector("ul");
                var listItem = document.createElement("li");
                listItem.className = "list-group-item";
                listItem.textContent = element.number+" "+element.area;
                img.src = element.area;
                listItem.appendChild(img);
                ul.appendChild(listItem);
                console.log(element.number);
            });
            
        });
    }
}
customElements.define("a-post", Teacher);