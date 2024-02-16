import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { questionApi } from "./AxiosService.js";

class questionService {
    async getList() {
        const response = await questionApi.get('')
        console.log('Got the list from API', response.data.results)
        const newList = response.data.results.map(list => new Question(list))
        AppState.questions = newList
    }
}

export const QuestionService = new questionService()