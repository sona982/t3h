let returnYear = false;
let year, month;

while(!returnYear){
    year = prompt("Nhập số năm bạn muốn :");
    year = parseInt(year)

    if(isNaN(year)|| year < 1){
        alert("Năm không hợp lệ vui lòng nhập lại");
    }
    else{
        returnYear = true;
    }
}

let returnMonth = false;

while(!returnMonth){
    month = prompt("Nhập số tháng bằn muốn :");
    month = parseInt(month);

    if(isNaN(month)|| month < 1 || month > 12){
        alert("Tháng không hợp lệ vui bạn nhap lai");
    }
    else{
        returnMonth = true;
    }
}

let monthNumber
switch(month){
    case 2: if((year % 4 ===0 && year % 100 !== 0) || year % 400 === 0){
             monthNumber ="29 day";
        }
        else{
            monthNumber ="28 day";
        }
    
    break;

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        monthNumber = "31 day";
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        monthNumber ="30 day";
        break;
}

alert("năm " +year+ " tháng " + month +" có "+ monthNumber);