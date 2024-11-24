function HeaderComponent() {
    return `
        <div class="container">
            <h1>Header component 1</h1>
            <h1>Header component 2</h1>
            <h1>Header component 3</h1>
            <h1>Header component 4</h1>
        </div>
    `;
}
const headerElement = document.getElementsByTagName("HeaderComponent");
for(let item of headerElement){
    item.innerHTML = HeaderComponent();
}