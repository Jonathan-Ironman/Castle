export type Reward = RewardGold | RewardLoot | RewardInsight;

export enum RewardType {
    'gold',
    'boost',
    'insight'
}

export class RewardGold {
    readonly amount: number;
    readonly type = RewardType.gold;

    constructor(gold: number) {
        this.amount = gold;
    }
}

export class RewardLoot {
    readonly type = RewardType.boost;
    readonly description = 'I am Boost';
}

export class RewardInsight {
    readonly type = RewardType.insight;
    readonly description = 'I am Insight';
}
