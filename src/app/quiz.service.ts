import { Injectable } from '@angular/core';

import {Quiz} from './quiz.model'
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes: Quiz[] = [
  {
    question: 'What is the capital of India',
    answer: [
      {option: 'Nairobi', correct:false },
      {option: 'delhi', correct: true},
      {option: 'Mogodashi', correct: false}

    ]
  },
  {
    question: 'What is the currency of India',
    answer: [
      {option: 'Euro', correct:false },
      {option: 'Rupees', correct: true},
      {option: 'Pounds', correct: false}

    ]
  },
  {
    question: 'Indias largest population',
    answer: [
      {option: 'Mumbai', correct:true },
      {option: 'Pune', correct: false},
      {option: 'chennai', correct: false}

    ]
  },
  {
    question: 'Number of State and Union Territories in India',
    answer: [
      {option: '27 States and 8 Union Territories', correct:false },
      {option: '29 States and 7 Union Territories', correct: true},
      {option: '25 states and 6 Union Territories', correct: false}

    ]
  },
  {
    question: ' Indias first satellite Aryabhata was launched from',
    answer: [
      {option: 'America', correct:false },
      {option: 'Israel', correct: false},
      {option: 'soviet union', correct: true}

    ]
  },

  {
    question: ' ISRO headquarter is located in',
    answer: [
      {option: 'Delhi', correct:false },
      {option: 'Surat', correct: false},
      {option: 'Bangalore', correct: true}

    ]
  },

  {
    question: 'What is the capital of Tamil Nadu',
    answer: [
      {option: 'Jaipur', correct:false },
      {option: 'chennai', correct: true},
      {option: 'Tirupur', correct: false}

    ]
  },
  
  {
    question: 'What is the capital of Telangana',
    answer: [
      {option: 'Hyd', correct:true },
      {option: 'Ananthapur', correct: false},
      {option: 'Goa', correct: false}

    ]
  }

  ]
  constructor() { }

  getQuizzes()
  {
    return this.quizzes;
  }
}
