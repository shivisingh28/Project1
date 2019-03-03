function populate(){
	if(quiz.isEnded()){
		showScores();
	}
	else{
		//show question
		 var element = document.getElementById("question");
		 element.innerHTML = quiz.getQuestionIndex().text;
		 //show choices
		 var choices = quiz.getQuestionIndex().choices;
		 for (var i = 0.; i < choices.length; i++) {
		 	var element = document.getElementById("choice" + i);
		 	element.innerHTML=choices[i]; 
		 	guess("btn"+ i,choices[i]);
		 }
		 showProgress();
	}
};
function guess(id,guess){ 
	var button = document.getElementById(id);
	button.onclick=function(){
		quiz.guess(guess);
		populate();
	}
};
function showProgress(){
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML="Question" + currentQuestionNumber +" of "+ quiz.questions.length;
}
function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml +="<h2 id='score'> Your scores: " + quiz.score + "</h2>";
	var element=document.getElementById("quiz");
	element.innerHTML=gameOverHtml;
};
var questions =[
        new Question("Breadth First Search is used in?",["Binary Trees","Graphs","Stacks","Both a and b"],"Both a and b"),
                      new Question("Which language is used for styling web pages?",["HTML","JQuery","CSS","XML"],"CSS"),
                      new Question("Which protocol is used to receive e-mail?",["SMTP","POP3","HTTP","FTP"],"POP3"),
                      new Question("Which protocol is used to send e-mail?",["HTTP","POP3","SMTP","SSH"],"SMTP"),
                     new Question("The simplest CPU scheduling algorithm is __________?",["Multilevel scheduling algorithm","FCFS scheduling algorithm","SJF scheduling algorithm","Round Robin scheduling algorithm"],"FCFS scheduling algorithm"),
                 new Question("The GUI means?",["General User Interaction","Graphical User Interface","Guided User Interface","General User Interface"],"Graphical User Interface"),
];
var quiz = new Quiz(questions);
populate();
