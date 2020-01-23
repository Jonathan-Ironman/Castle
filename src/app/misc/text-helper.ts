export class TextHelpers {
    static singularPlural(subject: [], singular: string, plural: string): string {
        return subject.length > 1 && plural || singular;
    }
    static listAnd(list: string[]): string {
        const last = list.pop();
        return list.join(', ') + ' and ' + last;
    }
    static listOr(list: string[]): string {
        const last = list.pop();
        return list.join(', ') + ' or ' + last;
    }
    static list(list: string[]): string {
        return list.join(', ');
    }
}
