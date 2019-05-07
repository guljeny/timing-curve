module.exports = function timing (keyframes, t) {
  const _keyframes = [[0, 0], ...keyframes, [1, 1]]
  const current = _keyframes.findIndex(frame => frame[0] >= t)
  const currentFrame = _keyframes[current]
  const prevFrame = _keyframes[current - 1]
  const x = prevFrame ? prevFrame[0] : 0
  const xD = (currentFrame[0] - x) || 0
  const time = (t - x) / xD
  const yD = currentFrame[1] - (prevFrame ? prevFrame[1] :  0)
  const prevent = prevFrame ? prevFrame[1] : 0
  return prevent + yD * time
}
