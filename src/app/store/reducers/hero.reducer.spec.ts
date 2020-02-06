import { fakeHero } from 'src/app/testing/fakeHero';
import { HeroActions } from '../actions/hero.actions';
import { heroReducer, initialState } from './hero.reducer';

describe('Hero Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;
    const result = heroReducer(initialState, action);
    expect(result).toBe(initialState);
  });

  it('should add hired heroes', () => {
    const action = HeroActions.hireHero({ hero: fakeHero });
    const result = heroReducer(initialState, action);
    expect(result.myHeroes).toContain(fakeHero);
  });

  it('should add recruitable heroes', () => {
    const action = HeroActions.addRecruitableHero({ hero: fakeHero });
    const result = heroReducer(initialState, action);
    expect(result.recruitableHeroes).toContain(fakeHero);
  });

  it('should remove recruitable heroes', () => {
    const action = HeroActions.removeRecruitableHero({ hero: fakeHero });
    const state = {
      recruitableHeroes: [fakeHero],
      myHeroes: []
    };
    const result = heroReducer(state, action);
    expect(result.recruitableHeroes).not.toContain(fakeHero);
  });

  it('should assign missions to heroes', () => {
    const missionId = 'm1';
    const action = HeroActions.assignMissionToHero({
      hero: fakeHero,
      missionId
    });
    const state = {
      recruitableHeroes: [],
      myHeroes: [fakeHero]
    };
    const result = heroReducer(state, action);
    expect(result.myHeroes[0].assignment).toBe(missionId);
    expect(fakeHero.assignment).toBe(undefined);
  });

  it('should unassign missions from heroes', () => {
    const hero = { ...fakeHero, assignment: 'm1' };
    const action = HeroActions.unassignMissionFromHero({ hero });
    const state = {
      recruitableHeroes: [],
      myHeroes: [hero]
    };
    const result = heroReducer(state, action);
    expect(result.myHeroes[0].assignment).toBe(undefined);
  });
});
