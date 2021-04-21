import telecall from 'telecall'
import test from '->/foo/test.tele'

telecall(test, { d: 1111 }, 'aa', 'b').then((res) =>
  document.write(`<pre>${JSON.stringify(res, null, 4)}</pre>`),
)
