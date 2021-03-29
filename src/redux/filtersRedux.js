/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');

export const CHANGE_DURATION = createActionName('CHANGE_DURATION');

export const ADDING_TAG = createActionName('ADDING_TAG');
export const REMOVING_TAG = createActionName('REMOVING_TAG');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });

export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });

export const addingTag = payload => ({ payload, type: ADDING_TAG });
export const removingTag = payload => ({ payload, type: REMOVING_TAG });
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: action.payload,
      };

    case ADDING_TAG:
      return {
        ...statePart,
        tags: action.payload,
      };
    case REMOVING_TAG:
      return {
        ...statePart,
        tags: action.payload,
      };

    default:
      return statePart;
  }
}
