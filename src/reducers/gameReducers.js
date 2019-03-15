import { GAME_START, GAME_FINISH, GAME_CLOUD, GAME_RAIN, GAME_STANDART_DAY, GAME_SUN, GAME_FRUIT, GAME_END, GAME_RESTART } from "../actions/gameActions";

const initialState = {
  cloud: false,
  sun: false,
  rain: false,
  start: false,
  fruit: 0,
  fruitCount: 0,
  limit: 0,
  endgame: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GAME_START:
      return {
        ...state,
        start: action.payload.start,
        sun: action.payload.sun,
        limit: state.limit + 1
      }
    case GAME_CLOUD:
      return {
        ...state,
        cloud: action.payload.cloud
      }
    case GAME_RAIN:
      return {
        ...state,
        rain: action.payload.rain
      }
    case GAME_STANDART_DAY:
      return {
        ...state,
        rain: action.payload.rain,
        cloud: action.payload.cloud
      }
    case GAME_SUN:
      return {
        ...state,
        sun: action.payload.sun
      }
    case GAME_FRUIT:
      return {
        ...state,
        fruit: state.fruitCount + action.payload.fruitCount,
        fruitCount: action.payload.fruitCount
      }
    case GAME_FINISH:
      return {
        ...state,
        start: action.payload.start
      }
    case GAME_END:
      return {
        ...state,
        endgame: action.payload.endgame
      }
    case GAME_RESTART:
      return {
        ...state,
        cloud: action.payload.cloud,
        sun: action.payload.sun,
        rain: action.payload.rain,
        start: action.payload.start,
        fruit: action.payload.fruit,
        fruitCount: action.payload.fruitCount,
        limit: action.payload.limit,
        endgame: action.payload.endgame
      }
    default:
      return state;
  }
}