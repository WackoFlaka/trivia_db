export class Question {
    constructor(data) {
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answers = data.incorrect_answers
    }
    
    get questionCardTemplate() {
        return /*html*/ `
          <div class="row justify-content-center">
            <div class="col-10 py-5">
              <div class="q-card fs-1">
                ${this.question}
              </div>
            </div>
            
            <div class="col-5">
              <div class="anwser-card" onclick="app.QuestionController.clickCard('Correct')">
                ${this.correct_answer}
              </div>
            </div>
            <div class="col-5">
              <div class="anwser-card" onclick="app.QuestionController.clickCard('Incorrect')">
                ${this.incorrect_answers[0]}
              </div>
            </div>
            <div class="col-5 pt-5">
              <div class="anwser-card" onclick="app.QuestionController.clickCard('Incorrect')">
              ${this.incorrect_answers[1]}
              </div>
            </div>
            <div class="col-5 pt-5">
              <div class="anwser-card" onclick="app.QuestionController.clickCard('Incorrect')">
              ${this.incorrect_answers[2]}
              </div>
            </div>

          </div>  
        `
    }
    
    
    
}


/* {
    "response_code": 0,
    "results": [
    {
    "type": "multiple",
    "difficulty": "easy",
    "category": "Sports",
    "question": "Which two teams played in Super Bowl XLII?",
    "correct_answer": "The New York Giants &amp; The New England Patriots",
    "incorrect_answers": [
    "The Green Bay Packers &amp; The Pittsburgh Steelers",
    "The Philadelphia Eagles &amp; The New England Patriots",
    "The Seattle Seahawks &amp; The Denver Broncos"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "easy",
    "category": "Sports",
    "question": "Which country will host the 2022 FIFA World Cup?",
    "correct_answer": "Qatar",
    "incorrect_answers": [
    "USA",
    "Japan",
    "Switzerland"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "easy",
    "category": "Sports",
    "question": "What is the most common type of pitch thrown by pitchers in baseball?",
    "correct_answer": "Fastball",
    "incorrect_answers": [
    "Slowball",
    "Screwball",
    "Palmball"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "easy",
    "category": "Sports",
    "question": "&quot;Stadium of Light&quot; is the home stadium for which soccer team?",
    "correct_answer": "Sunderland FC",
    "incorrect_answers": [
    "Barcelona FC",
    "Paris Saints-Germain",
    "Manchester United"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "easy",
    "category": "Sports",
    "question": "Who won the 2015 Formula 1 World Championship?",
    "correct_answer": "Lewis Hamilton",
    "incorrect_answers": [
    "Nico Rosberg",
    "Sebastian Vettel",
    "Jenson Button"
    ]
    }
    ]
    } */