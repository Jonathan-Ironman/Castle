import { Adversity } from './adversity.model';
import { Reward } from './reward.model';

export class Mission {
    id: string;
    title: string;
    description: string;
    rewards: Reward[];
    adversity: Adversity;
}
