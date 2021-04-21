import telecall from 'telecall'
import testAsync from '->/bar/test_async.tele'

telecall(testAsync, { d: 2 }).then((res) =>
  document.write(`<pre>${JSON.stringify(res, null, 4)}</pre>`),
)
