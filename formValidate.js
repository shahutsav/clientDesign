function validateForm(which) {
    if (which.first.value == '' || which.last.value == '') {
        alert('Please fill out the name field(s)');
        return false;
    }

    var fRegExp = /[A-Za-z0-9]/;
    if (!fRegExp.test(which.first.value) || !fRegExp.test(which.last.value)) {
        alert('Enter valid data in the name field(s)');
        return false;
    }
    var emRegExp = /[A-Za-z0-9]@[A-Za-z0-9].[A-Za-z]/;
    {
        if (!emRegExp.test(which.mail.value)) {
            alert('Please enter email in the format abc@def.edu');
            return false;
        }
    }//end of email reg exp

    if (localStorage) {
        for (var i = 0, len = selOpt.length; i < len; i++) {
            localStorage.setItem('Select' + i, selOpt[i]);
        }
        localStorage.setItem('first', which.first.value);
        localStorage.setItem('last', which.last.value);
        localStorage.setItem('mail', which.mail.value);
    }

    return true;
}