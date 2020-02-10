export class Adversity {
    combat: number;
    valor: number;
    tactics: number;
    fear: number;
    paranormal: boolean;

    constructor(params: PartialAdversity | Adversity) {
        this.combat = params.combat || 0;
        this.valor = params.valor || 0;
        this.tactics = params.tactics || 0;
        this.fear = params.fear || 0;
        this.paranormal = params.paranormal || false;
    }
}

export type PartialAdversity = Partial<Adversity>;
