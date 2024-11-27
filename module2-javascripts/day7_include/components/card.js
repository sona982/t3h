function CardComponent() {
    return `
        <div class="card">
            <img src="" alt="" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `;
}
const cardElement = document.getElementsByTagName('CardComponent')
for(let item of cardElement) {
    item.innerHTML = CardComponent();
}
