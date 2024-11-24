function MenuComponent() {
    return `
        <div class="container">
            <h1>Menu</h1>
        </div>
    `;
}
const MenuElement = document.getElementById("menu");
if(MenuElement){
    MenuElement.innerHTML = MenuComponent();
}