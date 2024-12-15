const listStudent =[
    {   
        id:12,
        name:"phong",
        gender:'male',
        mathScore:'5',
        englishScore:'5',
        literatureScore:'9',
    },
    {   
        id:1,
        name:"cuong",
        gender:'male',
        mathScore:'8',
        englishScore:'9',
        literatureScore:'5',
    },
    {   
        id:123,
        name:"cung",
        gender:'male',
        mathScore:'8',
        englishScore:'7',
        literatureScore:'9',
    },
    {   
        id:22,
        name:"phuog",
        gender:'female',
        mathScore:'8',
        englishScore:'9',
        literatureScore:'10',
    },
    {   
        id:22,
        name:"phuog",
        gender:'female',
        mathScore:'8',
        englishScore:'9',
        literatureScore:'10',
    },
    {   
        id:22,
        name:"phuog",
        gender:'female',
        mathScore:'8',
        englishScore:'9',
        literatureScore:'10',
    },
    {   
        id:22,
        name:"phuog",
        gender:'female',
        mathScore:'8',
        englishScore:'9',
        literatureScore:'10',
    },
    {   
        id:22,
        name:"phuog",
        gender:'female',
        mathScore:'8',
        englishScore:'9',
        literatureScore:'10',
    },
    {   
        id:22,
        name:"phuog",
        gender:'female',
        mathScore:'8',
        englishScore:'9',
        literatureScore:'10',
    },
    {   
        id:22,
        name:"phuog",
        gender:'female',
        mathScore:'8',
        englishScore:'9',
        literatureScore:'10',
    },
    {   
        id:22,
        name:"phuog",
        gender:'female',
        mathScore:'8',
        englishScore:'9',
        literatureScore:'10',
    },
    {   
        id:22,
        name:"phuog",
        gender:'female',
        mathScore:'8',
        englishScore:'9',
        literatureScore:'10',
    },
    {   
        id:22,
        name:"phuog",
        gender:'female',
        mathScore:'8',
        englishScore:'9',
        literatureScore:'10',
    },
    {   
        id:22,
        name:"phuog",
        gender:'female',
        mathScore:'8',
        englishScore:'9',
        literatureScore:'10',
    },
    {   
        id:22,
        name:"phuog",
        gender:'female',
        mathScore:'8',
        englishScore:'9',
        literatureScore:'10',
    },
    {   
        id:22,
        name:"phuog",
        gender:'female',
        mathScore:'8',
        englishScore:'9',
        literatureScore:'10',
    }
];


// const tbodyDom = document.getElementById("info-student");
// function renderStudents(Students) {
//     tbodyDom.innerHTML = ''; 
//     const limitedStudent = Students.slice(0,4); 
//     limitedStudent.forEach((student, index) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${index + 1}</td>
//             <td>${student.name}</td>
//             <td>${student.gender}</td>
//             <td>${student.mathScore}</td>
//             <td>${student.englishScore}</td>
//             <td>${student.literatureScore}</td>
//             <td>${((parseFloat(student.mathScore) + parseFloat(student.englishScore) + parseFloat(student.literatureScore)) / 3).toFixed(2)}</td>
//             <td>
//                 <button type="button" class="btn btn-primary" onclick="editStudent(${student.id})">Edit</button>
//                 <button type="button" class="btn btn-danger" onclick="removeStudent(${student.id})">Remove</button>
//             </td>
//             `;
//         tbodyDom.appendChild(row);
//     });
// }
// renderStudents(listStudent);


// day la ham thuc thi truyen gia tri vao cuoi
// const tbodyDom = document.getElementById("info-student");
// (function renderStudents(Students){
//     tbodyDom.innerHTML = ''; 
//     const limitedStudent = Students.slice(0,4); 
//     limitedStudent.forEach((student, index) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${index + 1}</td>
//             <td>${student.name}</td>
//             <td>${student.gender}</td>
//             <td>${student.mathScore}</td>
//             <td>${student.englishScore}</td>
//             <td>${student.literatureScore}</td>
//             <td>${((parseFloat(student.mathScore) + parseFloat(student.englishScore) + parseFloat(student.literatureScore)) / 3).toFixed(2)}</td>
//             <td>
//                 <button type="button" class="btn btn-primary" onclick="editStudent(${student.id})">Edit</button>
//                 <button type="button" class="btn btn-danger" onclick="removeStudent(${student.id})">Remove</button>
//             </td>
//             `;
//         tbodyDom.appendChild(row);
//     });
// })(listStudent);


//Ham lay du lieu khi btn click
// let btn = document.getElementById("btn");
// function createStudent(){
//     btn.addEventListener("click",function(){
//         const name = document.getElementById("name").value
//         const gender = document.querySelector("input[name='gender']:checked")?.value || "Not selected";
//         const mathScore = document.getElementById("math").value;
//         const englishScore = document.getElementById("english").value;
//         const literatureScore = document.getElementById("literature").value
    
//         console.log("FullName: "+ name);
//         console.log("Gender: "+ gender);
//         console.log("Math Score: "+ mathScore);
//         console.log("English Score: "+ englishScore);
//         console.log("Literature Score: "+ literatureScore);
//     })
// }
// createStudent();

// Hàm lưu danh sách sinh viên vào Local Storage
function saveToLocalStorage(students) {
    localStorage.setItem("students", JSON.stringify(students));
}

// Hàm lấy danh sách sinh viên từ Local Storage
function getFromLocalStorage() {
    const students = localStorage.getItem("students");
    return students ? JSON.parse(students) : [];
}

// Hàm thêm sinh viên vào bảng
function addStudentToTable(student, index) {
    const tbodyDom = document.getElementById("info-student");
    const row = document.createElement("tr");

    // Tính điểm trung bình
    const averageScore = (
        (parseFloat(student.mathScore) + parseFloat(student.englishScore) + parseFloat(student.literatureScore)) / 3
    ).toFixed(2);

    // Tạo nội dung cho dòng
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${student.name}</td>
        <td>${student.gender}</td>
        <td>${student.mathScore}</td>
        <td>${student.englishScore}</td>
        <td>${student.literatureScore}</td>
        <td>${averageScore}</td>
        <td>
            <button type="button" class="btn btn-primary btn-sm" onclick="editStudent(${index})">Edit</button>
            <button type="button" class="btn btn-danger btn-sm" onclick="removeStudent(${index})">Remove</button>
        </td>
    `;

    // Thêm dòng vào bảng
    tbodyDom.appendChild(row);
}

// Hàm hiển thị danh sách sinh viên
function renderStudents(students = getFromLocalStorage()) {
    const tbodyDom = document.getElementById("info-student");
    tbodyDom.innerHTML = ""; // Xóa bảng cũ
    students.forEach((student, index) => addStudentToTable(student, index));
}


// Hàm thêm sinh viên mới vào Local Storage
function addNewStudent() {
    const btnCreate = document.getElementById("btn");

    btnCreate.addEventListener("click", function (event) {
        event.preventDefault();

        // Lấy thông tin từ form
        const name = document.getElementById("name").value.trim();
        const gender = document.querySelector("input[name='gender']:checked")?.value || "Not selected";
        const mathScore = document.getElementById("math").value.trim();
        const englishScore = document.getElementById("english").value.trim();
        const literatureScore = document.getElementById("literature").value.trim();

        // Kiểm tra dữ liệu hợp lệ
        if (!name || !gender || !mathScore || !englishScore || !literatureScore) {
            alert("Please fill in all fields!");
            return;
        }

        // Tạo đối tượng sinh viên
        const student = { name, gender, mathScore, englishScore, literatureScore };

        // Lưu vào Local Storage
        const students = getFromLocalStorage();
        students.push(student);
        saveToLocalStorage(students);

        // Cập nhật giao diện
        renderStudents();

        // Reset form
        document.getElementById("student-form").reset();
    });
}

// Hàm xóa sinh viên
function removeStudent(index) {
    const students = getFromLocalStorage(); // Lấy danh sách sinh viên từ Local Storage
    students.splice(index, 1); // Xóa sinh viên tại vị trí 'index'
    saveToLocalStorage(students); // Lưu lại danh sách đã thay đổi
    
    renderStudents(); // Cập nhật lại giao diện sau khi xóa
}



//---------------- ham edit ------------------------------------------------
// Lưu chỉ mục của sinh viên đang chỉnh sửa
let editingIndex = null;

// Hàm chỉnh sửa sinh viên
function editStudent(index) {
    const students = getFromLocalStorage();
    const student = students[index];

    // Đưa thông tin sinh viên vào form
    document.getElementById("name").value = student.name;
    document.getElementById("math").value = student.mathScore;
    document.getElementById("english").value = student.englishScore;
    document.getElementById("literature").value = student.literatureScore;
    document.querySelector(`input[name='gender'][value='${student.gender}']`).checked = true;

    // Lưu chỉ mục
    editingIndex = index;

    // Đổi nút "Create Student" thành "Update Student"
    const btnCreate = document.getElementById("btn");
    btnCreate.textContent = "Update Student";
    btnCreate.classList.replace("btn-primary", "btn-success");
}

// Thêm logic cập nhật sinh viên
function addNewStudent() {
    const btnCreate = document.getElementById("btn");

    btnCreate.addEventListener("click", function (event) {
        event.preventDefault();

        // Lấy thông tin từ form
        const name = document.getElementById("name").value.trim();
        const gender = document.querySelector("input[name='gender']:checked")?.value || "Not selected";
        const mathScore = document.getElementById("math").value.trim();
        const englishScore = document.getElementById("english").value.trim();
        const literatureScore = document.getElementById("literature").value.trim();

        // Kiểm tra dữ liệu hợp lệ
        if (!name || !gender || !mathScore || !englishScore || !literatureScore) {
            alert("Please fill in all fields!");
            return;
        }

        const students = getFromLocalStorage();

        if (editingIndex === null) {
            // Thêm sinh viên mới
            const student = { name, gender, mathScore, englishScore, literatureScore };
            students.push(student);
        } else {
            // Cập nhật sinh viên
            students[editingIndex] = { name, gender, mathScore, englishScore, literatureScore };
            editingIndex = null; // Reset trạng thái
            btnCreate.textContent = "Create Student";
            btnCreate.classList.replace("btn-success", "btn-primary");
        }

        // Lưu vào Local Storage và cập nhật giao diện
        saveToLocalStorage(students);
        renderStudents();

        // Reset form
        document.getElementById("student-form").reset();
    });
}
// ---------------------------------------

// ---------------------------- ham tim kiem --------------------------------
function searchStudents() {
    const searchInput = document.querySelector(".input-group input");
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase().trim();
        const students = getFromLocalStorage();

        // Lọc danh sách sinh viên
        const filteredStudents = students.filter((student) =>
            student.name.toLowerCase().includes(query)
        );

        // Cập nhật danh sách hiển thị
        renderStudents(filteredStudents);
    });
}

// ----------------------------------------------------------------------------------

// --------------------------- function phan trang -------------------------------------
let currentPage = 1;
const rowsPerPage = 4; // Số dòng trên mỗi trang

function paginateStudents(page = 1) {
    const students = getFromLocalStorage();
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    // Lấy danh sách sinh viên cho trang hiện tại
    const paginatedStudents = students.slice(start, end);

    renderStudents(paginatedStudents);
    renderPaginationControls(students.length);
}

function renderPaginationControls(totalStudents) {
    const paginationContainer = document.getElementById("pagination-controls");
    if (!paginationContainer) return;

    paginationContainer.innerHTML = ""; // Xóa các nút phân trang cũ

    const totalPages = Math.ceil(totalStudents / rowsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.classList.add("btn", "btn-outline-primary", "m-1");
        if (i === currentPage) {
            button.classList.add("active");
        }
        button.addEventListener("click", function () {
            currentPage = i;
            paginateStudents(i);
        });
        paginationContainer.appendChild(button);
    }
}

// Gọi hàm phân trang khi tải trang:
document.addEventListener("DOMContentLoaded", function () {
    paginateStudents(); // Hiển thị trang đầu tiên
    addNewStudent();
    searchStudents();
    renderStudents();
});

// ----------------------------------------------------------------------------