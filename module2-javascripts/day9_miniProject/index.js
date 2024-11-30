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


const tbodyDom = document.getElementById("info-student");
(function renderStudents(Students) {
    tbodyDom.innerHTML = ''; 
    const limitedStudent = Students.slice(0,4); 
    limitedStudent.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.mathScore}</td>
            <td>${student.englishScore}</td>
            <td>${student.literatureScore}</td>
            <td>${((parseFloat(student.mathScore) + parseFloat(student.englishScore) + parseFloat(student.literatureScore)) / 3).toFixed(2)}</td>
            <td>
                <button type="button" class="btn btn-primary" onclick="editStudent(${student.id})">Edit</button>
                <button type="button" class="btn btn-danger" onclick="removeStudent(${student.id})">Remove</button>
            </td>
            `;
        tbodyDom.appendChild(row);
    });
})( );
// day la ham thuc thi truyen gia tri vao cuoi
// renderStudents(listStudent);
