// $("#queryButton").click(function () {
//     var startDate = document.getElementById("startDate").value;
//     var endDate = document.getElementById("endDate").value;

//     // 입력된 날짜가 유효한지 검사
//     if (isValidDate(startDate) && isValidDate(endDate)) {
//         // 날짜 순서와 범위 검사
//         if (startDate <= endDate) {
//             // 다운로드 버튼 표시
//             document.getElementById("downloadSection").classList.remove("hidden");
//         } else {
//             // 날짜 순서가 올바르지 않을 경우 다운로드 버튼 숨김
//             document.getElementById("downloadSection").classList.add("hidden");
//             alert("시작 날짜와 종료 날짜의 순서가 올바르지 않습니다.");
//         }
//     } else {
//         // 날짜 형식이 올바르지 않을 경우 다운로드 버튼 숨김
//         document.getElementById("downloadSection").classList.add("hidden");
//         alert("올바른 날짜 형식을 입력해 주세요.");
//     }
// });

// function isValidDate(dateString) {
//     // yyyy-MM-dd 형식의 날짜 유효성 검사
//     var regex = /^\d{4}-\d{2}-\d{2}$/;

//     if (!regex.test(dateString)) {
//         return false; // 형식에 맞지 않으면 유효하지 않음
//     }

//     var year = parseInt(dateString.substr(0, 4));
//     var month = parseInt(dateString.substr(5, 2));
//     var day = parseInt(dateString.substr(8, 2));

//     if (isNaN(year) || isNaN(month) || isNaN(day)) {
//         return false; // 숫자가 아닌 경우 유효하지 않음
//     }

//     if (year < 1900 || year > 2100) {
//         return false; // 년도가 범위를 벗어난 경우 유효하지 않음
//     }

//     if (month < 1 || month > 12) {
//         return false; // 월이 범위를 벗어난 경우 유효하지 않음
//     }

//     // 각 월에 따른 최대 일수를 계산하여 일이 범위를 벗어난 경우 유효하지 않음
//     var maxDay = new Date(year, month, 0).getDate();
//     if (day < 1 || day > maxDay) {
//         return false;
//     }

//     return true; // 모든 검사를 통과한 경우 유효함
// }


function autoHyphen(obj) {
    var str = obj.value.replace(/-/g, '');
    if (str.length < 5) {
        obj.value = str;
    } else if (str.length < 7) {
        obj.value = str.substr(0, 4) + '-' + str.substr(4);
    } else {
        obj.value = str.substr(0, 4) + '-' + str.substr(4, 2) + '-' + str.substr(6);
    }
}
function generateCode() {
    var startdate = document.getElementById('startdate');
    var enddate = document.getElementById('enddate');
	var datePattern = /^\d{4}-\d{2}-\d{2}$/;
    
	if (startdate.value !== '' || enddate.value !== '') {
		
		if (datePattern.test(startdate.value)){
			
			if (enddate.value >= startdate.value){
				
				document.getElementById("downloadSection").classList.remove("hidden");
		
        }
			else{
				alert('시작 날짜와 종료 날짜의 순서가 올바르지 않습니다.');
            	document.getElementById('downloadSection').classList.add('hidden');
			}
		}
		else{
				alert('날짜 형식에 맞지 않습니다.')
				document.getElementById('downloadSection').classList.add('hidden');
			}
			}else {
				alert('날짜를 모두 입력해 주세요')
				document.getElementById('downloadSection').classList.add('hidden');
			}
}