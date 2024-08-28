function frnz() {
    var img = document.getElementById('image');
    var form = document.getElementById('formimg');
    form.style.backgroundImage = "url('imgs/bg.png')";
    img.src = 'imgs/frnz-pic.png';
}

function Lov() {
    var img = document.getElementById('image');
    var form = document.getElementById('formimg');
    form.style.backgroundImage = "url('imgs/love-marage-bg.jpg')";
    img.src = 'imgs/lov-ic.png';

}

function aff() {
    var img = document.getElementById('image');
    var form = document.getElementById('formimg');
    form.style.backgroundImage = "url('imgs/sibl-affect-form.jpg')";
    img.src = 'imgs/affect-pic.jpg';
}

function marry() {
    var img = document.getElementById('image');
    var form = document.getElementById('formimg');
    form.style.backgroundImage = "url('imgs/love-marage-bg')";
    img.src = 'imgs/marage-pic.jpg';
}

function enim() {
    var img = document.getElementById('image');
    var form = document.getElementById('formimg');
    form.style.backgroundImage = "url('imgs/enimy-form.jpg')";
    img.src = 'imgs/enim-pic.jpeg';
}

function sibli() {
    var img = document.getElementById('image');
    var form = document.getElementById('formimg');
    form.style.backgroundImage = "url('imgs/sibl-affect-form.jpg')";
    img.src = 'imgs/sibling-pic.jpg';
}



function hideInputAndButton() {
    document.getElementById("name1").style.display = "none";
    document.getElementById("name2").style.display = "none";
    document.getElementById("btn").style.display = "none";
}



function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function flames() {
    var res = document.getElementById("output");
    var a = document.getElementById("name1").value.toLowerCase();
    var b = document.getElementById("name2").value.toLowerCase();
    if (a != "" && b != "") {
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < b.length; j++) {
                if (a[i] == b[j]) {
                    a = replaceAt(a, i, '*');
                    b = replaceAt(b, j, '*');
                }
            }
        }
        var countLetters = 0;
        for (i = 0; i < a.length; i++) {
            if (a[i] != '*') {
                countLetters++;
            }
        }
        for (i = 0; i < b.length; i++) {
            if (b[i] != '*') {
                countLetters++;
            }
        }
        if (countLetters > 1) {
            var flames = "FLAMES";
            c = 0;
            l = 1;
            for (i = 0; flames.length != 1; i++) {
                if (l == countLetters) {
                    if (c >= flames.length) {
                        c = 0;
                    }
                    flames = replaceAt(flames, c, '');
                    l = 1;
                }
                if (c >= flames.length) {
                    c = 0;
                }
                l++;
                c++;
            }
            switch (flames) {
                case 'F':
                    flames = " is your Friend";
                    frnz();
                    break;
                case 'L':
                    flames = " is your Love";
                    Lov();
                    break;
                case 'A':
                    flames = " is just an Affection";
                    aff();
                    break;
                case 'M':
                    flames = " will be Marring you";
                    marry();
                    break;
                case 'E':
                    flames = " is an Enemies to you";
                    enem();
                    break;
                case 'S':
                    flames = " is like a Sibling to you";
                    sib();
                    break;
            }
        }
        if (countLetters == 1) {
            flames = "is like a Sibling to you";
        }
        if (countLetters == 0) {
            flames = "Its Same Name";
        }
        res.innerHTML = "<b style='color:black;'>" + document.getElementById("name2").value + "</b> <b style='color:white;'>" + flames + "</b>";
    } else {
        res.innerHTML = "Please Enter Name";
    }
}

function verifie() {
    hideInputAndButton();
    var res = document.getElementById("output");
    var a = document.getElementById("name1").value.toLowerCase();
    var b = document.getElementById("name2").value.toLowerCase();
    var n1 = "basil";
    var n2 = "peter";


    if (a != "" && b != "") {
        if ((b == n1 || b == n2) && (a == "amruta" || a == "amru")) {
            res.innerHTML = "<b style='color:black;'>" + document.getElementById("name2").value + "</b> is Your <b style='color:blue;'>Love</b>";
            Lov();
        } else if ((a == n1 || a == n2) && (b == "amruta" || b == "amru")) {
            res.innerHTML = "<b style='color:black;'>" + document.getElementById("name2").value + "</b>  is Your <b style='color:blue;'>Love</b>";
            Lov();
        } else {
            flames();
        }
    } else {
        res.innerHTML = "Please Enter Name";
    }

}

//document.body.style.backgroundImage.URL("imgs/bgjpg")



/////////////////////////////////////////////////////////

const btn = document.querySelector('.btn');
const img = document.querySelector('.output-image');

btn.addEventListener('submit', () => {
    img.classList.toggle('show');
});

////////////////////