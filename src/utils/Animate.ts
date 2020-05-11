export const default_duration = 250;

export function animate(params: any) {
  const {
    order = 'asc',
    duration = default_duration,
    states = [],
    onAnimate,
    onEnd,
    ease = function (t: any, d: any) {
      return t / d;
    },
  } = params;
  const [startState, finalState] = states;
  return {
    requestId: -1,
    duration,
    states: states,
    currState: startState,
    onAnimate: onAnimate,
    onEnd: onEnd,
    startTimestamp: 0,
    ease,
    step: function (timestamp: number) {
      if (!this.startTimestamp) {
        this.startTimestamp = timestamp;
      }
      const timePassed = timestamp - this.startTimestamp;
      this.currState =
        startState + (finalState - startState) * this.ease(timePassed, this.duration);
      const isUseCurr = order === 'asc' ? this.currState < finalState : this.currState > finalState;
      this.onAnimate(isUseCurr ? this.currState : finalState);
      if (this.duration > timePassed) {
        this.requestId = window.requestAnimationFrame(this.step.bind(this));
      } else {
        this.onEnd();
        this.stop();
      }
    },
    start: function () {
      this.requestId = window.requestAnimationFrame(this.step.bind(this));
    },
    stop: function () {
      window.cancelAnimationFrame(this.requestId);
    },
  };
}
