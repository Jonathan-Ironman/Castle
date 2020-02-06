import { Hero } from '../models/hero.model';
import { Gender } from '../misc/gender.enum';

export const fakeHero: Readonly<Hero> = new Hero({
    id: 1,
    name: 'Jake the dawg',
    gender: Gender.male,
    level: 1,
    combat: 2,
    tactics: 3,
    valor: 4,
    missionFee: 10,
    hiringFee: 100,
});
