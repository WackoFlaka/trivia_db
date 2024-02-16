import { AppState } from "../AppState.js";
import { QuestionService } from "../services/questionService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuestion() {
    const questions = AppState.questions
    let html = ''
    questions.forEach(question => html += question.questionCardTemplate)
    console.log(html)
    setHTML('question-card', html)
}

export class QuestionController {
    constructor() {
        console.log('Controller is set')
        this.getList()
        AppState.on('questions', _drawQuestion)
    }
    
    async getList() {
        try {
            await QuestionService.getList()
            Pop.success('Got List!')
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
    
    clickCard(anwser) {
        if(anwser == 'Incorrect') {
            console.log('Incorrect')
            Pop.error('Incorrect')
            _drawQuestion()
        }
        
        if(anwser == 'Correct') {
            console.log('Correct')
            Pop.success('Correct!')
            _drawQuestion()
        }
    }
    
}