import { createAction, props } from '@ngrx/store';

export const UserActions = {
  swipeLeft: createAction('[User] Swipe left'),
  swipeRight: createAction('[User] Swipe right')
};
