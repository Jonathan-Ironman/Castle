import { Mission } from '../models/mission.model';
import { Adversity } from '../models/adversity.model';
import { RewardGold, RewardInsight, RewardReputation } from '../models/reward.model';
import { Intel } from '../models/intel.model';

export const uniqueMissions: Mission[] = [
    {
        id: 0,
        title: 'The dead of the gladioles',
        description: 'Fight the evil flowers that lurk in the shadows of big tree',
        rewards: [new RewardGold(100), new RewardReputation(10), new RewardInsight()],
        adversity: new Adversity({
            combat: 10
        }),
        intel: new Intel(10, 1)
    },
    {
        id: 0,
        title: 'Tim the Enchanter',
        description: 'Help Tim burninate the evil rabbit',
        rewards: [new RewardGold(100), new RewardReputation(1)],
        adversity: new Adversity({
            combat: 40,
            tactics: 40,
            fear: 100,
            cunning: 10,
            paranormal: true
        }),
        intel: new Intel(10, 1)
    },
    {
        id: 0,
        title: 'Death incarnate',
        description: 'Death wants to tango',
        rewards: [new RewardGold(100), new RewardReputation(1)],
        adversity: new Adversity({
            combat: 1000,
            tactics: 1000,
            fear: 1000,
            cunning: 1000,
            paranormal: true
        }),
        intel: new Intel(1000, 1)
    }
];
