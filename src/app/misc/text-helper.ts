export class TextHelpers {
    static singularPlural(subject: any[], singular: string, plural: string): string {
        return subject.length > 1 && plural || singular;
    }

    static listAnd(list: string[]): string {
        if (list.length === 1) {
            return list[0];
        }
        const last = list.pop();
        return list.join(', ') + ' and ' + last;
    }

    static listOr(list: string[]): string {
        if (list.length === 1) {
            return list[0];
        }
        const last = list.pop();
        return list.join(', ') + ' or ' + last;
    }

    static list(list: string[]): string {
        return list.join(', ');
    }
}
