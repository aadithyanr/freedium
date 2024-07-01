import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
import { exportTraceState } from 'next/dist/trace';

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

blogRouter.get('/api/v1/blog/:id', (c) => {
    const id = c.req.param('id');
    console.log(id);
    return c.text('Get blog route');
});
  
blogRouter.post('/api/v1/blog', (c) => {
    return c.text('Create blog route');
});
  
blogRouter.put('/api/v1/blog/:id', (c) => { // Assuming you need an ID to update
    const id = c.req.param('id');
    console.log(id);
    return c.text('Update blog route');
});

export default blogRouter;
  
  