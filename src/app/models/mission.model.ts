import { Adversity } from './adversity.model';
import { Intel } from './intel.model';
import { Reward } from './reward.model';

export class Mission {
    id: Readonly<number>;
    title: Readonly<string>;
    description: Readonly<string>;
    rewards: Reward[];
    adversity: Adversity;
    intel: Intel;
}
