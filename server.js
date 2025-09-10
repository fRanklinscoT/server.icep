import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './models/config.js';
import registerRoutes from './routes/register.js';
import dashboardRoutes from './routes/dashboard.js';
import resetRoutes from './routes/reset.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api', registerRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api', resetRoutes);
app.get('/', (req, res) => res.send('API is running'));

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database connected');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server started on port ${process.env.PORT || 3000}`);
    });
  })
  .catch(err => console.error('DB connection error:', err));

