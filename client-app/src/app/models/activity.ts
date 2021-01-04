export interface IActivity {
    id: string;
    title: string;
    description: string;
    category: string;
    date: Date;
    city: string;
    venue: string;
    isGoing: boolean; // is the currently logged in user is going to this event
    isHost: boolean; // is the currently logged in user the host of this event
    attendees: IAttendee[];
    comments: IComment[];
}

export interface IComment {
    id: string;
    createdAt: Date;
    body: string;
    username: string;
    displayName: string;
    image: string;
}

export interface IActivityFormValues extends Partial<IActivity>{ // keyword Partial: make all properties inside IAcitivy above optional
    time?: Date
}

export class ActivityFormValues implements IActivityFormValues {
    id?: string = undefined;
    title: string = "";
    category: string = "";
    description: string = "";
    date?: Date = undefined;
    time?: Date = undefined;
    city: string = "";
    venue: string = "";

    constructor(init? : IActivityFormValues){
        if(init && init.date){
            init.time = init.date;
        }

        Object.assign(this, init);
    }
}

export interface IAttendee {
    username: string;
    displayName: string;
    image: string;
    isHost: boolean;
}
