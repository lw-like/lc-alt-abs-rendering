export interface ICommentDTO {
    data: IComment[]
}

export interface IComment {
    id: number;
    color: string;
    position: number[];
}