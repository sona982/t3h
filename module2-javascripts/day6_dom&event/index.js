document.getElementById('submitBtn').addEventListener('click', function () {
    const fullName = document.getElementById('fullName').value.trim();
    const birthYear = document.getElementById('birthYear').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const errorElement = document.getElementById('error');
    const outputElement = document.getElementById('output');

    if(!fullName || !birthYear|| !age||!gender||!phone){
        errorElement.textContent = 'Vui long nhap du thong tin';
        outputElement.style.display = 'none';
        return;
    }

    document.getElementById('displayName').textContent= fullName;
    document.getElementById('displayBirthYear').textContent= birthYear;
    document.getElementById('displayAge').textContent= age;
    document.getElementById('displayGender').textContent= gender;
    document.getElementById('displayPhone').textContent= phone;

    errorElement.textContent='';
    outputElement.style.display = 'block';
});










// document.getElementById('submitBtn').addEventListener('click', function () {
//     // Lấy giá trị từ các input
//     const fullName = document.getElementById('fullName').value.trim();
//     const birthYear = document.getElementById('birthYear').value.trim();
//     const age = document.getElementById('age').value.trim();
//     const gender = document.getElementById('gender').value.trim();
//     const phone = document.getElementById('phone').value.trim();
//     const errorElement = document.getElementById('error');
//     const outputElement = document.getElementById('output');

//     // Kiểm tra dữ liệu
//     if (!fullName || !birthYear || !age || !gender || !phone) {
//         errorElement.textContent = 'Vui lòng nhập đầy đủ thông tin!';
//         outputElement.style.display = 'none'; // Ẩn vùng hiển thị nếu lỗi
//         return;
//     }

//     // Hiển thị thông tin
//     document.getElementById('displayName').textContent = fullName;
//     document.getElementById('displayBirthYear').textContent = birthYear;
//     document.getElementById('displayAge').textContent = age;
//     document.getElementById('displayGender').textContent = gender;
//     document.getElementById('displayPhone').textContent = phone;

//     // Hiển thị vùng kết quả và xóa thông báo lỗi
//     errorElement.textContent = '';
//     outputElement.style.display = 'block'; // Hiện vùng thông tin
// });
