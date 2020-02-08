export type Reward = RewardGold | RewardLoot | RewardInsight | RewardReputation;

export enum RewardType {
    'gold',
    'boost',
    'insight',
    'reputation',
}

export class RewardGold {
    readonly type = RewardType.gold;
    readonly amount: number;

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

export class RewardReputation {
    readonly type = RewardType.reputation;
    readonly amount: number;

    constructor(reputation: number) {
        this.amount = reputation;
    }
}
