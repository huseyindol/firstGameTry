export const GAME_START = 'GAME_START';
export const GAME_CLOUD = 'GAME_CLOUD';
export const GAME_RAIN = 'GAME_RAIN';
export const GAME_FINISH = 'GAME_FINISH';
export const GAME_STANDART_DAY = 'GAME_STANDART_DAY';
export const GAME_SUN = 'GAME_SUN';
export const GAME_FRUIT = 'GAME_FRUIT';
export const GAME_END = 'GAME_END';
export const GAME_RESTART = 'GAME_RESTART';

export function onGameStart() {
  return dispatch => {
    dispatch({
      type: GAME_START,
      payload: {
        start: true,
        sun: false
      }
    })
  }
}

export function onGameCloud() {
  return dispatch => {
    dispatch({
      type: GAME_CLOUD,
      payload: {
        cloud: true
      }
    })
  }
}

export function onGameRain() {
  return dispatch => {
    dispatch({
      type: GAME_RAIN,
      payload: {
        rain: true
      }
    })
  }
}

export function onGameStandartDay() {
  return dispatch => {
    dispatch({
      type: GAME_STANDART_DAY,
      payload: {
        rain: false,
        cloud: false
      }
    })
  }
}

export function onGameSun() {
  return dispatch => {
    dispatch({
      type: GAME_SUN,
      payload: {
        sun: true,
      }
    })
  }
}

export function onGameFruit(count) {
  return dispatch => {
    dispatch({
      type: GAME_FRUIT,
      payload: {
        fruitCount: count,
      }
    })
  }
}

export function onGameFinish() {
  return dispatch => {
    dispatch({
      type: GAME_FINISH,
      payload: {
        start: false
      }
    })
  }
}

export function onGameEnd() {
  return dispatch => {
    dispatch({
      type: GAME_END,
      payload: {
        endgame: true
      }
    })
  }
}

export function onGameRestart() {
  return dispatch => {
    dispatch({
      type: GAME_RESTART,
      payload: {
        cloud: false,
        sun: false,
        rain: false,
        start: false,
        fruit: 0,
        fruitCount: 0,
        limit: 0,
        endgame: false
      }
    })
  }
}
