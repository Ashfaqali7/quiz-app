

var displayQuestion = document.getElementById('displayQuestion');
var answerQuestion = document.getElementById('answerQuestion');
var currentQuestion = document.getElementById('currentQuestion');
var totalQuestion = document.getElementById('totalQuestion');
var questionDisplay = document.getElementById('questionDisplay');
var resultDisplay = document.getElementById('resultDisplay');


var indexValue = 0;
var mark = 0;


var quetions = [
    {
        question: "DOM stand for ______________ .",
        option: ["Document Object Module","Direct Objects Module ","Document Objects Module","Documents Object Module"],
        correctans: "Document Object Module",
    },
    {

        question: "HTML stand for ___________________ .",
        option: ["Hypertext Markup Language", "HTML", "HTML", "HTML"],
        correctans: "Hypertext Markup Language",
    },
    {
        question: "CSS stand for ___________________ .",
        option: ["casecading style sheet", "HTML", "HTML", "HTML"],
        correctans: "casecading style sheet",
    },

    {
        question: "RAM stand for ___________________ .",
        option: ["Random Access Memory", "Random Access Menagmen", "Runtime Access Memorey", "Randoms Acceses Memorey"],
        correctans: "Random Access Memory",
    },
    {
        question: "ROM stand for ___________________ .",
        option: ["Random Object Memory", "Read Object Memory", "Read Only Memory", "Read On Memory"],
        correctans: "Read Only Memory",
    },
    {
        question: "ALU stand for ___________________ .",
        option: ["Alternate Logic Unit", "Arthimatic Logic Unit", "Arthimatic Lowest Unit", "Alternative Logic Unit"],
        correctans: "Arthimatic Logic Unit",
    },
    {
        question: "LU stand for ___________________ .",
        option: ["Logic Unit", "Logics Units", "Logic Units", "Logics Unit"],
        correctans: "Logic Unit",
    },
    {
        question: "PSL stand for ___________________ .",
        option: ["Pakhtoon Supper Leage", "Pakistans Supper Leage", "Pakistan Supper Leage", "Pakistan Supper leak"],
        correctans: "Pakistan Supper Leage",
    },
    {
        question: "OLX stand for ___________________ .",
        option: ["On-line-Exchange", "On-line-xchange", "Off-line-exchange", "HTML"],
        correctans: "On-line-Exchange",
    },
    {
        question: "IP stand for ___________________ .",
        option: ["Internet Protocol", "Internet ProtocolL", "Internets Protocol", "Internet Protocols"],
        correctans: "Internet Protocol",
    }

];


function renderQustion(){
    displayQuestion.innerHTML = quetions[indexValue].question;
    for(var i = 0; i < quetions[indexValue].option.length; i++){
        answerQuestion.innerHTML += `<div class="col-md-6 py-2">
        <button
       onclick = "checkQuestion('${quetions[indexValue].option[i]}','${quetions[indexValue].correctans}')"
       class="
       
       btn
       p-4
        bg-white
       w-100 
       rounded
        shadow
       d-block
        fw-bold
        "
        > 
       ${quetions[indexValue].option[i]}
        </button> 
        </div>`
        
    }
    totalQuestion.innerHTML = quetions.length;
    currentQuestion.innerHTML = indexValue + 1;
}
renderQustion();

function nextquestion(){
   answerQuestion.innerHTML = "";
//    displayQuestion.innerHTML = "";
 if (indexValue + 1 == quetions.length) {
     alert("Your Marks is  " + mark);
    var percentage = (mark / quetions.length) * 100;
    resultDisplay.innerHTML = ` <h3 class="bg-success p-3 text-white text-center">Your Percentage is <span> ${percentage} </span> <span>%</span></h3>
     `
     resultDisplay.style.display = 'block';
     questionDisplay.style.display = 'none';
 }
   else{
    indexValue++;
    renderQustion();
   }
}

function checkQuestion(optionValue,correctValue){
    if(optionValue == correctValue){
        mark++;
        console.log(mark);
    
      
        
    }

   
    
    nextquestion();
}

   