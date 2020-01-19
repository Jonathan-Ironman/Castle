export type Reward = RewardGold | RewardLoot | RewardInsight;

export class RewardGold {
    amount: number;

    constructor(gold: number) {
        this.amount = gold;
    }
}

export class RewardLoot {
    readonly description = 'I am Loot';
}

export class RewardInsight {
    readonly description = 'I am Insight';
}
