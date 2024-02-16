// @ts-ignore
export const questionApi = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple',
    timeout: 8000,
})