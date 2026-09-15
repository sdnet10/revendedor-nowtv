import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'API rodando!', timestamp: new Date() });
});

app.get('/api/admin/dashboard', (req, res) => {
  res.json({ resumo: { total_clientes: 0 } });
});

app.get('/api/cliente/planos', (req, res) => {
  res.json({ 
    planos: [
      { id: '1', name: 'Básico', price: 49.90, billing_cycle: 'monthly' },
      { id: '2', name: 'Premium', price: 79.90, billing_cycle: 'monthly' }
    ]
  });
});

app.listen(PORT, () => {
  console.log('API rodando em porta ' + PORT);
});

export default app;
