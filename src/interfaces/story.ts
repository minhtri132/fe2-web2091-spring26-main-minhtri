export interface Story {
    id: number;
    title: String;
    description: String;
    active: boolean;
}

export type IStoryInput = Omit<Story, "id">;