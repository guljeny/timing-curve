# timing-curve

`npm i -s timing-curve`

```javascript
import TimingCurve from "timing-curve"

const y = TimingCurve(keyframes, time)
```
time - current time from `0` to `1`

keyframes - array of arrays with `x` & `y` points `[[x, y], ..., [x, y]]`

**each next `x` value must be bigger then previous!**

```
const keyframes = [
  [0.1, 0.04],
  [0.2, 0.15],
  [0.4, 0.6],
  [0.6, 0.8],
  [0.8, 0.92],
]
```
