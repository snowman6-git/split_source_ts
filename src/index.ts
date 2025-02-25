import { Hono } from 'hono'
import api_hi from './routes/hi'

const app = new Hono()

// 라우트 마운팅
app.route("/hi", api_hi)

// 기본 라우트
app.get("/", (c) => c.text("Main application"))

export default app