import Router from 'koa-router';
import User from '../dbs/models/users'
import axios from './utils/axios'

let router = new Router({ prefix: '/users' })

router.post('/signup', async (ctx) => {
  const { username, password } = ctx.request.body;
  let nuser = await User.create({ username, password })
  if (nuser) {
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: 'error'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '注册失败'
    }
  }
})
router.get('/getUser', async (ctx) => {
  ctx.body = {
    code: 0,
    msg: '成功'
  }
})

export default router
