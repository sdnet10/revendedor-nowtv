import React, { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@revendedor.com' && password === 'Admin@2024') {
      setLoggedIn(true);
      alert('Login bem-sucedido!');
    } else {
      alert('Email ou senha incorretos!');
    }
  };

  if (loggedIn) {
    return (
      <div style={{ padding: '20px', background: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
        <h1>📊 Dashboard Admin - Revendedor NOW TV</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
            <h2>👥 Total de Clientes</h2>
            <p style={{ fontSize: '32px', color: '#00bfff' }}>0</p>
          </div>
          <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
            <h2>💰 Total de Vendas</h2>
            <p style={{ fontSize: '32px', color: '#00bfff' }}>R$ 0,00</p>
          </div>
          <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
            <h2>💵 Sua Comissão (15%)</h2>
            <p style={{ fontSize: '32px', color: '#00ff00' }}>R$ 0,00</p>
          </div>
          <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
            <h2>📈 Planos Ativos</h2>
            <p style={{ fontSize: '32px', color: '#ffa500' }}>0</p>
          </div>
        </div>
        <button 
          onClick={() => setLoggedIn(false)}
          style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          ❌ Sair
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      background: '#1a1a1a'
    }}>
      <div style={{ 
        background: '#2a2a2a', 
        padding: '40px', 
        borderRadius: '8px',
        color: '#fff',
        textAlign: 'center',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h1>🎬 Revendedor NOW TV</h1>
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px' }}
        />
        <input 
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px' }}
        />
        <button 
          onClick={handleLogin}
          style={{ width: '100%', padding: '10px', fontSize: '16px', cursor: 'pointer', borderRadius: '4px' }}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default App;