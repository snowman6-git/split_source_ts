import { Hono } from 'hono'

const hi = new Hono()

hi.get("/", (c) => c.text("Hello from HI route!"))

hi
.post("/new", (c) => c.text("Created!"))
.get("/:id", (c) => {
const id = c.req.param('id')
return c.text(`Get item ${id}`)
})

export default hi