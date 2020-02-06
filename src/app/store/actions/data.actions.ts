import { createAction, props } from '@ngrx/store';

export const DataActions = {
    loadState: createAction('[Data] Load state'),
    resetState: createAction('[Data] Reset state'),
};
