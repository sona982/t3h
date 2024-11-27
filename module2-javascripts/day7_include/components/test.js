// const demoFetch = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
// demoFetch
//     .then(function(res){
//         console.log(res)
//     }).catch(function(error){
//         console.log(error)
//     })

//.then la resolved(lay api thanh cong) => tra ve voi status:200
//.catch la rejected(lay api that bai) => tra ve TypeError: Failed to fetch


// const demoFetch = fetch("https://dummyjson.com/users")
// .then(function(res){
//     return res.json();
// })
// // muon lay ra du lieu cuoi cung thi .then tiep tuc
// .catch(function(error){
//     console.log(error)
// })

// let dataResponse;
// demoFetch
// .then((data) => {
//     console.log(data);
// })
// .catch((errr) => {
//     console.log(errr);
// })


// toi uu hon bang async await
// (async function getData() {
//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();
//     console.log(data)
// })();


// get thong tin 
// const list_user = document.getElementById("list_user");

// (async function getData() {
//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();

//     list_user.innerHTML = data.users.map((user,index) => {
//         return`
//             <div class="card">
//                 <h3>STT: ${ index + 1 }</h3>
//                 <img src="${user.image}" alt="" class="card-img-top">
//                 <div class="card-body">
//                     <h3 class="card-title">${user.username}</h3     >
//                     <p class="card-text">${user.email}</p>
//                     <p>${user.address.address} - ${user.address.city} - ${user.address.country}</p>
//                 </div>
//             </div>
//         `;
//     }).join("")

//     console.log(data.users);
// })();

// lay 4 phan tu dau 
    const list_user = document.getElementById("list_user");
    (async function getData() {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();

        const limitedUsers = data.users.slice(0, 4);
        list_user.innerHTML = limitedUsers.map((user,index) => {
            return`
                <div class="card">
                    <h3>Stt: ${index+1}</h3>
                    <img src="${user.image}" alt="" class="card-img-top">
                    <div class="card-body">
                        <h3 class="card-title">${user.username}</h3>
                        <p class="card-text">${user.email}</p>
                        <p>${user.address.address} - ${user.address.city} - ${user.address.country}</p>
                    </div>
                </div>
            `;
        }).join("")

        console.log(limitedUsers)
    })();