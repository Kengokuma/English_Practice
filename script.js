var questions = [];
var answers = [];
var QandA = [];
window.onload = function () {
    var form = document.forms.myform;

    form.myfile1.addEventListener('change', function (e) {

        var result = e.target.files[0];

        //FileReaderのインスタンスを作成する
        var reader = new FileReader();

        //読み込んだファイルの中身を取得する
        reader.readAsText(result);

        //ファイルの中身を取得後に処理を行う
        reader.addEventListener('load', function () {
            questions = reader.result.split("\r\n");
        })

    })
    form.myfile2.addEventListener('change', function (e) {

        var result = e.target.files[0];

        //FileReaderのインスタンスを作成する
        var reader = new FileReader();

        //読み込んだファイルの中身を取得する
        reader.readAsText(result);

        //ファイルの中身を取得後に処理を行う
        reader.addEventListener('load', function () {
            answers = reader.result.split("\r\n");
        })
    })
}

function make_question() {
    QandA.push(questions);
    QandA.push(answers);
    var mondai_name = document.getElementById('mondai_name').value;
    if (localStorage.hasOwnProperty(mondai_name)) {
        localStorage.removeItem(mondai_name);
        localStorage.setItem(mondai_name,JSON.stringify(QandA));
    }else{
        localStorage.setItem(mondai_name,JSON.stringify(QandA));
    }
    var clicked = document.getElementById('make_button');
    clicked.disabled = true;
    clicked.style.backgroundColor = '#BFBFBF';
    window.location.href = "index.html";
}
function show() {
    if (time <= 20) {
        num = Math.floor(Math.random() * 100);
        document.getElementById("mondai").innerHTML = mondai[num];
        document.getElementById("nanmonme").innerHTML = "第" + time + "問";
        time++;
    } else {
        document.getElementById("nanmonme").innerHTML = "正解数";
        document.getElementById("score").innerHTML = seikai + "/20";
        document.getElementById("answerform").style.display = "none";
        document.getElementById("mondai").style.display = "none";
    }
}

function judge() {
    var answer = document.getElementById("answer").value;
    if (answer == kotae[num]) {
        alert("正解です!");
        seikai++;
    } else {
        alert("残念!不正解です。正解は" + kotae[num]);
    }
    show()
    var answer = document.getElementById("answer").value = "";
}
