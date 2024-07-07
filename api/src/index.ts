import { Hono } from 'hono'
import {userRouter} from "./routes/user";
import {blogRouter} from "./routes/blog";
import {cors} from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>()

app.use('/*', cors())

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

app.use('/api/v1/blog/*', async (c, next) => {
  const header = c.req.header("authorization") || "";
  // Bearer token => ["Bearer", "token"];
  const token = header.split(" ")[1]
  
  // @ts-ignore
  const response = await verify(token, c.env.JWT_SECRET)
  if (response.id) {
    next()
  } else {
    c.status(403)
    return c.json({ error: "unauthorized" })
  }
})

// app.post('/api/v1/user/signup', async (c) => {
//   // const dburl = c.env.DATABASE_URL;
//   const body = await c.req.json();

//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate())

//   try {
//     const user = await prisma.user.create({
//       data: {
//         email: body.email,
//         password: body.password,
//         name: body.name
//       }
//     })
//     const jwt = await sign({
//       id: user.id,
//     }, c.env.JWT_SECRET);
//     return c.text(jwt)
//   } catch (e) {
//     c.status(411);
//     return c.text("Invalid Inputs")
//   }
// })

// app.post('/api/v1/user/signin', async (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate())

//   const body = await c.req.json();

//   const user = await prisma.user.findUnique({
//     where: {
//       email: body.email,
//       password: body.password,
//     }
//   });

//   if (!user) {
//     c.status(403);
//     return c.json({ error: "user not found" });
//   }

//   // @ts-ignore
//   const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

//   return c.json({ jwt });
// })

// --------------------------------------------------------//



export default app

