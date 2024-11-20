
// Lấy các phần tử HTML qua ID
const startBtn = document.getElementById("startBtn"); // Nút bắt đầu
const timeInput = document.getElementById("timeInput"); // Ô nhập thời gian
const timerDisplay = document.getElementById("timerDisplay"); // Hiển thị đồng hồ đếm ngược
const message = document.getElementById("message"); // Hiển thị thông báo lỗi hoặc thông báo hoàn thành

let countdownInterval; // Biến lưu trữ ID của setInterval để có thể clear (dừng) sau này

// Thêm sự kiện lắng nghe click vào nút startBtn
startBtn.addEventListener("click", function () {
    // Lấy giá trị người dùng nhập vào ô timeInput và loại bỏ khoảng trắng thừa ở đầu và cuối
    const inputTime = timeInput.value.trim(); // Lấy giá trị thời gian nhập vào và loại bỏ khoảng trắng

    // Chia chuỗi thời gian nhập vào thành các phần giờ, phút, giây
    const timeParts = inputTime.split(":");

    // Kiểm tra định dạng thời gian nhập vào có đúng không (phải có 3 phần và các phần phải là số >= 0)
    if (timeParts.length !== 3 || timeParts.some(part => isNaN(part) || part < 0)) {
        message.textContent = "Vui lòng nhập thời gian hợp lệ (hh:mm:ss)!"; // Hiển thị thông báo lỗi
        return; // Dừng hàm nếu không hợp lệ
    }

    // Chuyển đổi thời gian sang giây (totalSeconds)
    let totalSeconds =
        parseInt(timeParts[0]) * 3600 + // Chuyển giờ sang giây
        parseInt(timeParts[1]) * 60 +   // Chuyển phút sang giây
        parseInt(timeParts[2]);         // Giây giữ nguyên

    // Kiểm tra nếu thời gian nhập vào <= 0 thì không hợp lệ
    if (totalSeconds <= 0) {
        message.textContent = "Thời gian phải lớn hơn 0!"; // Hiển thị thông báo lỗi
        return; // Dừng hàm nếu thời gian <= 0
    }

    message.textContent = ""; // Xóa thông báo lỗi (nếu có)

    // Dừng lại nếu có một timer trước đó đang chạy
    clearInterval(countdownInterval);

    // Cập nhật đồng hồ đếm ngược mỗi giây
    countdownInterval = setInterval(() => {
        // Nếu thời gian hết, dừng đồng hồ và hiển thị thông báo
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval); // Dừng đồng hồ
            timerDisplay.textContent = "00:00:00"; // Hiển thị 00:00:00 khi kết thúc
            message.textContent = "Đã hết giờ!"; // Hiển thị thông báo hết giờ
            alert("Đồng hồ đếm ngược đã kết thúc!"); // Hiển thị thông báo qua alert
            return; // Dừng hàm khi đồng hồ kết thúc
        }

        totalSeconds--; // Giảm đi 1 giây mỗi lần

        // Tính toán giờ, phút, giây còn lại từ totalSeconds
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0"); // Tính giờ
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0"); // Tính phút
        const seconds = String(totalSeconds % 60).padStart(2, "0"); // Tính giây

        // Hiển thị đồng hồ lên màn hình
        timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000); // Cập nhật mỗi giây (1000ms)
});
 