function generateCode() {
    var companyName = document.getElementById('company-name');
    var product = document.getElementById('product');
    var date = document.getElementById('date');
    var email = document.getElementById('email');
    var tel = document.getElementById('tel');
    var result = document.getElementById('result');
 	var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (
        companyName.value == '' ||
        product.value == '' ||
        date.value == '' ||
        email.value == '' ||
        tel.value == ''
    ) {
        alert('모든 항목을 입력해주세요.');
    } 
	else if (!emailPattern.test(email.value)){
		alert("이메일 형식을 맞춰주세요.");
	}
	else {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var code = '';
        for (var i = 0; i < 20; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        result.value = code;
    }
}

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
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const ulBefore = sidebar.querySelector('ul::before');

    sidebar.classList.toggle('collapsed');
    ulBefore.style.display = sidebar.classList.contains('collapsed') ? 'block' : 'none';
}