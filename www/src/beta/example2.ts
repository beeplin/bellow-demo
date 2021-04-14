import telecall from 'telecall'
import test from '../../../server/src/bar/test_async.tele'

telecall(test, { d: 2 }).then((res) =>
  document.write(`<pre>${JSON.stringify(res, null, 4)}</pre>`),
)
