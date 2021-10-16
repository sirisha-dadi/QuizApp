import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
quizzes: Quiz[] =[];
currentQuiz = 0;
answerSelected =false;
correctanswers = 0;
incorrectAnswers = 0;
correctone:string[] = new Array(this.quizzes.length) ;
names:string[] = new Array(this.quizzes.length) ;
counter=0;


randomize:number;

id : Subscription;
productid :string;
result = false;
review=false;
private routeSub: Subscription;
  constructor(private quizService: QuizService, private route: ActivatedRoute) { 

  //  this.id = +this.route.snapshot.params['id'];
   this.id=this.route.params.subscribe( params => console.log(params.id) );
   console.log(this.id);
   this.productid = route.snapshot.params['id'];
   console.log(this.productid);
   
  }

  ngOnInit(): void {
    this.quizzes=this.quizService.getQuizzes();
    this.randomize= Math.floor(Math.random() * this.quizzes.length-1)
    this.answerSelected=false;
    for(let i=0;i<this.quizzes.length;i++)
    {
      for(let j=0;i<this.quizzes[i].answer.length;j++)
      {
        if(this.quizzes[i].answer[j].correct)
      {
        this.correctone[i]=this.quizzes[i].answer[j].option;
        break;
        
      }
      }
    }
  }

  

  onAnswer(option: boolean,select: string)
  {
    this.answerSelected = true;
    this.names[this.counter]=select;
    this.counter=this.counter+1;
    setTimeout(() =>{
      this.currentQuiz++;
      this.answerSelected = false;
    },3000);

    if(option)
    {
      this.correctanswers++;
    }else{
      this.incorrectAnswers++;
    }
   
  }

  showResult()
  {
    this.result=true;
  }

  showReview()
  {
    this.review=true;
    this.counter=0;
    
 

  }
  call()
  {
    this.counter=this.counter+1;
  }

 

}
