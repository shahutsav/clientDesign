var selOpt=[];
function build(which) {
    if (which == 'init') {
        var hold = data[which];
        var mainDiv = document.createElement('div');
        mainDiv.setAttribute('id', 'main');
        document.getElementsByTagName('body')[0].appendChild(mainDiv);
    }
    else {
        var hold = data[which.value];
        while (which.parentNode !== which.parentNode.parentNode.lastChild) {
            which.parentNode.parentNode.removeChild(which.parentNode.parentNode.lastChild);
        }

    }
    if (hold[0] == null) {

        var dEle = document.createElement('div');
        var sEle = document.createElement('select');
        sEle.setAttribute('onchange', 'build(this)');
        //document.getElementsByTagName('body')[0].appendChild(sEle);

        var len = hold.length;
        for (i = 1; i < len; i++) {
            var optEle = document.createElement('option');
            optEle.setAttribute('value', hold[i]);
            optEle.appendChild(document.createTextNode(hold[i]));


            sEle.appendChild(optEle);
            dEle.appendChild(sEle);
            document.getElementById('main').appendChild(dEle);
        } //for loop ends here


    } // if ends here
    else {
        var sel = document.getElementsByTagName('select');
        for (var i = 0; i < sel.length; i++) {
            selOpt.push((sel[i].options[sel[i].selectedIndex].value));
            localStorage.setItem('select' + i, selOpt[i]);
        }
        var x = selOpt[selOpt.length-1];

        if(images[x][0]!==null) {
            var divEle = document.createElement('div');
            for (var i = 1; i <= 2; i++) {
                var imgEle = document.createElement('img');
                var groupDiv = document.createElement('div');
                imgEle.setAttribute('src', hold[0] + '/' + selOpt[selOpt.length - 1] + i + '.jpg');
                imgEle.setAttribute('width', '96px');
                imgEle.setAttribute('height', '96px');
                groupDiv.appendChild(imgEle);
                divEle.appendChild(groupDiv);
                document.getElementById('main').appendChild(divEle);
            }
        }else{
            var grDiv = document.createElement('div');
            for(var i=1;i<=images[x][1];i++){
                var grImg = document.createElement('img');
                grImg.setAttribute('src',hold[0] + '/' + selOpt[selOpt.length - 1] + i + '.jpg');
                grImg.setAttribute('width','64px');
                grImg.setAttribute('height','64px');
                grDiv.appendChild(grImg);
                document.getElementById('main').appendChild(grDiv);
            }
        }


            //form goes here
            var fEle = document.createElement('form');
            fEle.setAttribute('id', 'contact');
            fEle.setAttribute('action', 'form.html');
            fEle.setAttribute('method', 'get');
            fEle.setAttribute('class', 'form-style');
            fEle.setAttribute('onsubmit', 'return validateForm(this)');

            //create a header for form
            var fHead = document.createElement('h2');
            var headTxt = document.createTextNode('Contact Form');
            fHead.appendChild(headTxt);
            var spEle = document.createElement('span');
            var spTxt = document.createTextNode('Please fill out all the details');
            spEle.appendChild(spTxt);
            fHead.appendChild(spEle);

            //append the header stuff to the form
            fEle.appendChild(fHead);


            //create first name element
            var fnLabel = document.createElement('label');
            var fnSpan = document.createElement('span');
            var fnSpTxt = document.createTextNode('First Name:');
            fnSpan.appendChild(fnSpTxt);
            fnLabel.appendChild(fnSpan);
            var fnEle = document.createElement('input');
            fnEle.setAttribute('type', 'text');
            fnEle.setAttribute('name', 'first');
            fnEle.setAttribute('id', 'fName');
            fnLabel.appendChild(fnEle);

            //append the first name to the form
            fEle.appendChild(fnLabel);

            //create last name element
            var lnLabel = document.createElement('label');
            var lnSpan = document.createElement('span');
            var lnSpTxt = document.createTextNode('Last Name:');
            lnSpan.appendChild(lnSpTxt);
            lnLabel.appendChild(lnSpan);
            var lnEle = document.createElement('input');
            lnEle.setAttribute('type', 'text');
            lnEle.setAttribute('name', 'last');
            lnEle.setAttribute('id', 'lName');
            lnLabel.appendChild(lnEle);

            //append the last name to the form
            fEle.appendChild(lnLabel);

            //create an email field
            var emLabel = document.createElement('label');
            var emSpan = document.createElement('span');
            var emSpTxt = document.createTextNode('Your email:');
            emSpan.appendChild(emSpTxt);
            emLabel.appendChild(emSpan);
            var emEle = document.createElement('input');
            emEle.setAttribute('type', 'text');
            emEle.setAttribute('name', 'mail');
            emEle.setAttribute('id', 'email');
            emLabel.appendChild(emEle);

            //append the email field to the form
            fEle.appendChild(emLabel);

            // create a submit button
            var btnLabel = document.createElement('label');
            var btnEle = document.createElement('button');
            btnEle.setAttribute('type', 'submit');
            btnEle.setAttribute('value', 'submit');
            btnEle.setAttribute('class', 'button');
            var btnTxt = document.createTextNode('Submit');
            btnEle.appendChild(btnTxt);
            btnLabel.appendChild(btnEle);

            //append the send button to the form
            fEle.appendChild(btnLabel);

            //attach the form to the main div
            document.getElementById('main').appendChild(fEle);

        } //the form ends here

    }//build function ends here