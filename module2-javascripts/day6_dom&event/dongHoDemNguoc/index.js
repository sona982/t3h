// Lấy các phần tử HTML
const startBtn = document.getElementById("startBtn");
const timeInput = document.getElementById("timeInput");
const timerDisplay = document.getElementById("timerDisplay");
const message = document.getElementById("message");

let countdownInterval; // Lưu trữ ID của setInterval

// Xử lý khi bấm nút Start
startBtn.addEventListener("click", function () {
    const inputTime = timeInput.value.trim(); // Lấy giá trị người dùng nhập

    // Kiểm tra định dạng (hh:mm:ss)
    const timeRegex = /^\d{2}:\d{2}:\d{2}$/;
    if (!timeRegex.test(inputTime)) {
        message.textContent = "Vui lòng nhập thời gian hợp lệ (hh:mm:ss)!";
        return;
    }

    // Chuyển đổi sang giây
    const timeParts = inputTime.split(":").map(Number);
    let totalSeconds = timeParts[0] * 3600 + timeParts[1] * 60 + timeParts[2];

    if (totalSeconds <= 0) {
        message.textContent = "Thời gian phải lớn hơn 0!";
        return;
    }

    // Reset thông báo và dừng timer trước đó (nếu có)
    message.textContent = "";
    clearInterval(countdownInterval);

    // Bắt đầu đếm ngược
    countdownInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = "00:00:00";
            message.textContent = "Đã hết giờ!";
            alert("Đồng hồ đếm ngược đã kết thúc!");
            return;
        }

        totalSeconds--; // Giảm 1 giây

        // Cập nhật giờ, phút, giây còn lại
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
        const seconds = String(totalSeconds % 60).padStart(2, "0");

        timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
});
