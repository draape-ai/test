export interface Profile {
    email: string;
    fullName?: string;
    pictureURL?: string;
    gender?: string;
    age?: number;
}

export interface Measurements {
    height: number;
    shoulder_width: number;
    waist: number;
    hip: number;
}