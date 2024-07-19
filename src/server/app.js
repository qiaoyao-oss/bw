const Koa = require('koa')
const Router = require('koa-Router')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
const router = new Router()
const Mock = require('mockjs')

const cors = require('koa-cors')
app.use(cors())
app.use(bodyparser())
app.use(router)
let userdata = require('./data/user.json')

//mock模拟
const Data = Mock.mock({
    'list': [
        {
            id: 1,
            name: "@cname",
            title: '@ctitle',
        }
    ]
})
console.log(Data)
router.post('/getLogin', ctx => {
    console.log(ctx.request.body)
    let { username, password } = ctx.request.body
    let is = userdata.some(item => item.username === username && item.password === password)
    console.log(is)
    //该用户是否存在用户表中
    if (!is) {
        return ctx.body = {
            code: 500,
            msg: "账号或者密码错误"
        }
    } else {
        // 精确查找
        let user=userdata.find(item => item.username === username && item.password === password)
        return ctx.body = {
            code: 200,
            msg: "登录成功",
            user:user
        }
    }


})

app.listen(3001, () => {
    console.log('服务器启动成功')
})