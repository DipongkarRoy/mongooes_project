import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRouter } from './app/modules/student/student.route';
const app: Application = express();

app.use(cors());
app.use(express.json());


app.use('/api/v1/students' ,studentRouter)
app.use('/api/v1/students', studentRouter)

app.get('/', (req: Request, res: Response) => {
  const a = 20;
  res.send(a);
});

export default app;

//console.log(process.cwd());
