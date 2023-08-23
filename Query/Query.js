document.getElementById('queryButton').addEventListener('click', function () {
    var inputText = document.getElementById('sqlQuery').value;
    var resultSection = document.getElementById('resultSection');
    var resultTable = document.getElementById('resultTable');

    resultTable.innerHTML = '';

    var regex = /SELECT \* FROM my_table WHERE date_column BETWEEN '(\d{8})' AND '(\d{8})' AND condition_column = '([^']+)'/;
    var matches = inputText.match(regex);

    if (matches) {
        var startDate = matches[1];
        var endDate = matches[2];
        var condition = matches[3];

        // 날짜 형식 검증을 위한 정규식
        var dateRegex = /^\d{8}$/;

        if (dateRegex.test(startDate) && dateRegex.test(endDate)) {
            var startYear = parseInt(startDate.substring(0, 4));
            var startMonth = parseInt(startDate.substring(4, 6));
            var startDay = parseInt(startDate.substring(6, 8));

            var endYear = parseInt(endDate.substring(0, 4));
            var endMonth = parseInt(endDate.substring(4, 6));
            var endDay = parseInt(endDate.substring(6, 8));

            // 년도, 월, 일 범위 검증
            if (
                startYear >= 1900 && startYear <= 2100 &&
                startMonth >= 1 && startMonth <= 12 &&
                startDay >= 1 && startDay <= 31 &&
                endYear >= 1900 && endYear <= 2100 &&
                endMonth >= 1 && endMonth <= 12 &&
                endDay >= 1 && endDay <= 31
            ) {
                resultSection.classList.remove('hidden');

                var tableHeaders = ['id', 'name', 'date_column', 'condition_column'];
                var headerRow = resultTable.insertRow();
                for (var i = 0; i < tableHeaders.length; i++) {
                    var headerCell = headerRow.insertCell(i);
                    headerCell.textContent = tableHeaders[i];
                }

                var exampleData = [
                    { id: 1, name: 'John', date_column: startDate, condition_column: condition },
                    { id: 2, name: 'Jane', date_column: endDate, condition_column: condition },
                ];

                for (var i = 0; i < exampleData.length; i++) {
                    var dataRow = resultTable.insertRow();
                    for (var j = 0; j < tableHeaders.length; j++) {
                        var dataCell = dataRow.insertCell(j);
                        dataCell.textContent = exampleData[i][tableHeaders[j]];
                    }
                }
            } else {
                resultSection.classList.add('hidden');
                alert('유효한 날짜 형식이 아니거나 날짜 범위가 잘못되었습니다.');
            }
        } else {
            resultSection.classList.add('hidden');
            alert('유효한 날짜 형식이 아닙니다. "YYYYMMDD" 형식으로 입력해주세요.');
        }
    } else {
        resultSection.classList.add('hidden');
        alert('입력된 텍스트에서 원하는 형식의 데이터를 찾을 수 없습니다.');
    }
});
