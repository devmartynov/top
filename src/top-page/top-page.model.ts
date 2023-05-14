import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products,
}

class HH {
    @prop()
    count: number;
    @prop()
    juniorSalary: number;
    @prop()
    middleSalary: number;
    @prop()
    seniorSalary: number;
}

class TopPageAdvantage {
    @prop()
    title: string;
    @prop()
    description: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TopPageModel extends Base {
}

export class TopPageModel extends TimeStamps {
    @prop({
        enum: TopLevelCategory,
    })
    firstCategory: TopLevelCategory;
    @prop()
    secondCategory: string;
    @prop()
    title: string;
    @prop({unique: true})
    alias: string;
    @prop()
    category: string;
    @prop({type: () => HH})
    hh?: HH;
    @prop({type: () => [TopPageAdvantage]})
    advantages: TopPageAdvantage[];
    @prop()
    seoText: string;
    @prop({type: () => [String]})
    tags: TopPageAdvantage[];
    @prop()
    tagsTitle: string;
}
