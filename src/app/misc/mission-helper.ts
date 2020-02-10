import { Mission } from 'src/app/models/mission.model';
import { Adversity } from '../models/adversity.model';
import { Intel } from '../models/intel.model';
import { RewardGold, RewardInsight, RewardReputation, Reward } from '../models/reward.model';
import { TeamStats } from '../models/team-stats.model';
import { MathHelpers } from './math-helpers';
import { genericStories } from './missions';

export class MissionHelper {
    private static generateRewards(teamStats: TeamStats, playerReputation: number): Reward[] {
        const rewardGold = new RewardGold(
            MathHelpers.getRandomInt(
                40,
                Math.max(40, teamStats.cost * 1.5)
            )
        );
        const rewardReputation = new RewardReputation(MathHelpers.getRandomInt(1, 3));
        return [rewardGold, rewardReputation];
    }

    private static generateAdversity(teamStats: TeamStats, playerReputation: number): Adversity {
        return new Adversity({
            combat: MathHelpers.getRandomInt(teamStats.combat / teamStats.heroCount * 0.6,
                teamStats.combat * 1.5),
            valor: MathHelpers.getRandomInt(teamStats.valor / teamStats.heroCount * 0.6,
                teamStats.combat * 1.5),
            tactics: MathHelpers.getRandomInt(teamStats.tactics / teamStats.heroCount * 0.6,
                teamStats.combat * 1.5),
            fear: 10,
            paranormal: false,
        });
    }

    static generateMission(id: number, teamStats: TeamStats, playerReputation: number): Mission {
        const adversity = MissionHelper.generateAdversity(teamStats, playerReputation);
        const rewards = MissionHelper.generateRewards(teamStats, playerReputation);
        const { title, description } = genericStories[MathHelpers.getRandomInt(0, genericStories.length - 1)];

        return {
            id,
            title,
            description,
            rewards,
            adversity,
            intel: new Intel(
                MathHelpers.getRandomInt(10, Math.max(10, playerReputation)),
                MathHelpers.getRandomInt(1, Math.max(1, playerReputation))
            )
        };
    }
}
