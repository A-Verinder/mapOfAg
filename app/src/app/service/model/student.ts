export interface Student {
    id: number | string;
    first_name: string;
    last_name: string;
    email: string;
    subject: 'English' | 'Geography' | 'Maths' | 'Science';
    grade: number;
}