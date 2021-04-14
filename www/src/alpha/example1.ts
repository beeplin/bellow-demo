import telecall from 'telecall'
import test from '../../../server/src/foo/test.tele'

telecall(test, { d: 1111 }, 'aa').then((res) =>
  document.write(`<pre>${JSON.stringify(res, null, 4)}</pre>`),
)
