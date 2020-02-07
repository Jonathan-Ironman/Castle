import { Adversity } from './adversity.model';
import { Reward } from './reward.model';
import { Intel } from './intel.model';
import { Hero } from './hero.model';

export class Mission {
    id: Readonly<number>;
    title: Readonly<string>;
    description: Readonly<string>;
    rewards: Reward[];
    adversity: Adversity;
    intel: Intel;
}
