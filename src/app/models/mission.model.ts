import { Adversity } from './adversity.model';
import { Reward } from './reward.model';
import { Intel } from './intel.model';
import { Hero } from './hero.model';

export class Mission {
    id: string;
    title: string;
    description: string;
    rewards: Reward[];
    adversity: Adversity;
    intelligence: Intel;
    assignments?: Hero[];
    assignmentType?: 'scout' | 'execute';
    completed?: true;
}
