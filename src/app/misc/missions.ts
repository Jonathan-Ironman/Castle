import { Mission } from '../models/mission.model';
import { Adversity } from '../models/adversity.model';
import { RewardGold } from '../models/reward.model';
import { Intel } from '../models/intel.model';
export const missions: Mission[] = [
    {
        id: 'm1',
        title: 'The dead of the gladioles',
        description: 'Fight the evil flowers that lurk in the shadows of big tree',
        rewards: [new RewardGold(100)],
        adversity: new Adversity({
            combat: 10
        }),
        intelligence: new Intel(10, 1)
    },
    {
        id: 'm2',
        title: 'Tim the Enchanter',
        description: 'Help Tim burninate the evil rabbit',
        rewards: [new RewardGold(100)],
        adversity: new Adversity({
            combat: 100,
            tactics: 1,
            fear: 100,
            cunning: 10,
            paranormal: true
        }),
        intelligence: new Intel(10, 1)
    }
];
