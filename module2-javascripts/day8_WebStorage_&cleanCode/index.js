// const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric';
// const container = document.getElementById('weatherContainer');

// fetch(API_URL)
//     .then(response => response.json())
//     .then(data => {
//         const forecasts = data.list;
//         forecasts.forEach(forecast => {
//             const date = new Date(forecast.dt * 1000).toLocaleString();
//             const temp = `${forecast.main.temp.toFixed(1)}°C`;
//             const icon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
//             const weather = forecast.weather[0].description;

//             const card = document.createElement('div');
//             card.className = 'card';
//             card.innerHTML = `
//                 <h2>${date}</h2>
//                 <img src="${icon}" alt="${weather}">
//                 <h3>${temp}</h3>
//                 <p>${weather}</p>
//             `;
//             container.appendChild(card);
//         });
//     })
//     .catch(err => console.log("err fetching data",err));


const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric';
const container = document.getElementById('weatherContainer');

// Hàm bất đồng bộ để xử lý lấy dữ liệu thời tiết
async function fetchWeatherData() {
    try {
        // Đợi kết quả từ fetch API
        const response = await fetch(API_URL);
        // Đợi phân tích dữ liệu JSON
        const data = await response.json();
        
        // Duyệt qua danh sách dự báo thời tiết và hiển thị
        const forecasts = data.list;
        forecasts.forEach(forecast => {
            const date = new Date(forecast.dt * 1000).toLocaleString(); // Chuyển đổi thời gian từ Unix timestamp
            const temp = `${forecast.main.temp.toFixed(1)}°C`; // Lấy nhiệt độ
            const icon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`; // Lấy biểu tượng thời tiết
            const weather = forecast.weather[0].description; // Mô tả tình trạng thời tiết

            // Tạo phần tử card mới để hiển thị
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h2>${date}</h2>
                <img src="${icon}" alt="${weather}">
                <h3>${temp}</h3>
                <p>${weather}</p>
            `;
            // Thêm card vào container
            container.appendChild(card);
        });
    } catch (err) {
        // Nếu có lỗi khi fetch dữ liệu, in ra lỗi
        console.log("Error fetching data", err);
    }
}

// Gọi hàm fetchWeatherData để thực thi
fetchWeatherData();
