let isValid = false;
let year, month;

while (!isValid) {
    year = prompt("Nhập một năm dương lịch (ví dụ: 2023):");
    year = parseInt(year);

    if (isNaN(year) || year < 1 || !isValid.isInteger(year)) {
        alert("Năm không hợp lệ. Vui lòng nhập lại một năm dương lịch hợp lệ.");
    } else {
        isValid = true;
    }
}

let isMonthValid = false;
while (!isMonthValid) {
    month = prompt("Nhập tháng (1-12):");
    month = parseInt(month);

    if (isNaN(month) || month < 1 || month > 12 || !isMonthValid.isInteger(month)) {
        alert("Tháng không hợp lệ. Vui lòng nhập lại một tháng từ 1 đến 12.");
    } else {
        isMonthValid = true;
    }
}

let monthNumber;
switch (month) {
    case 1:
        monthNumber = "31 ngày";
        break;
    case 2:
        monthNumber = "29 ngày";
        break;
    case 3:
        monthNumber = "31 ngày";
        break;
    case 4:
        monthNumber = "30  ngày";
        break;
    case 5:
        monthNumber = "31 ngày";
        break;
    case 6:
        monthNumber = "30  ngày";
        break;
    case 7:
        monthNumber = "31 ngày";
        break;
    case 8:
        monthNumber = "30 ngày";
        break;
    case 9:
        monthNumber = "31 ngày";
        break;
    case 10:
        monthNumber = "30 ngày";
        break;
    case 11:
        monthNumber = "31 ngày";
        break;
    case 12:
        monthNumber = "30 ngày";
        break;
    default:
        monthNumber = "Không có tháng này.";
        break;
}
alert("Năm " + year + " tháng " + month + ": " + monthNumber);
