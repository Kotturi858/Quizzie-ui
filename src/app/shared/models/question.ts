export interface Question {
    id: number;
    question: string;
    description: string;
    answers: Answers;
    multiple_correct_answers: string;
    correct_answers: CorrectAnswers;
    explanation: string;
    tip: string | null;
    tags: string | null[];
    category: string;
    difficulty: string;
}

export interface Answers {
    answer_a: string;
    answer_b: string;
    answer_c: string;
    answer_d: string;
    answer_e: string | null;
    answer_f: string | null;
}

export interface CorrectAnswers {
    answer_a_correct: string;
    answer_b_correct: string;
    answer_c_correct: string;
    answer_d_correct: string;
    answer_e_correct: string;
    answer_f_correct: string;
}

