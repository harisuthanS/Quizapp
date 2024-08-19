
const QuestionsAnswer = [
    
    {

        question : "Who is the CEO of google",

        answers : [

            {answer: "Sundhar pichai" , result : true},
            {answer: "elon musk" , result : false},
            {answer: "Jeff bezoz" , result : false},

        ]



    },


    {

        question : "Who is the CEO of tesla",

        answers : [

            {answer: "Mark Zukerberg" , result : false},
            {answer: "elon musk" , result : true},
            {answer: "Jeff bezoz" , result : false},

        ]




    },


    {

        question : "Who is the CEO of Amazon",

        answers : [

            {answer: "Mark Zukerberg" , result : false},
            {answer: "elon musk" , result : false},
            {answer: "Jeff bezoz" , result : true},

        ]




    }


]




var question = document.querySelector(".question")
var answers = document.querySelector(".answers")
var next_button = document.querySelector(".next-btn")

var score = 0
var index = 0


function show_question(){


    answers.innerHTML = ""

    question.innerHTML = `${index + 1} . ` + QuestionsAnswer[index].question

    QuestionsAnswer[index].answers.forEach(ansobj => {

        var button = document.createElement("button")
        button.classList.add("btn");
        answers.appendChild(button)
    
    
        button.innerHTML = ansobj.answer


        button.addEventListener("click", function(e){

            select_answer(e , ansobj.result)
            next_button.style.display = "block"

        });

    
        
    });



}



function select_answer(e , isCorrect){

  
var user_select = e.target
 


 if(isCorrect){

     user_select.style.background = "yellow"
     score = score + 1
    
    }


 else{


    user_select.style.background = "red" 
 }
    


 document.querySelectorAll(".btn").forEach(btn => {
    btn.disabled = true;
});   




}


function next_btn(){


    next_button.addEventListener("click" , handlenext)

}


function handlenext(){

        index = index + 1
        

        if(index < QuestionsAnswer.length){

            next_button.style.display = "none"
            show_question()
        }

        else{

            question.innerHTML = `quiz completed your score is ${score}`
            answers.innerHTML = ""
            next_button.innerHTML = "play again"
            next_button.addEventListener("click", function() {
                location.reload();
        })

        


    }

}
   






show_question()
next_btn()