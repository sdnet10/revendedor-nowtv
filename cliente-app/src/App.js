import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activePage, setActivePage] = useState('dashboard');

  if (!loggedIn) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a1a' }}>
        <div style={{ background: '#2a2a2a', padding: '50px', borderRadius: '10px', textAlign: 'center', color: '#fff', width: '400px' }}>
          <h1>🎬 Login</h1>
          <input 
            type="email" 
            placeholder="Email" import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activePage, setActivePage] = useState('dashboard');

  if (!loggedIn) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#1a1a1a' }}>
        <div style={{ background: '#2a2a2a', padding: '50px', borderRadius: '10px', textAlign: 'center', color: '#fff', width: '400px' }}>
          <h1>🎬 Login</h1>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: 'none', boxSizing: 'border-box' }} 
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '5px', border: 'none', boxSizing: 'border-box' }} 
          />
          <button 
            onClick={() => {
              if (email === 'admin@revendedor.com' && password === 'Admin@2024') {
                setLoggedIn(true);
              } else {
                alert('Email ou senha incorretos!');
              }
            }}
            style={{ width: '100%', padding: '12px', background: '#00bfff', color: '#000', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#1a1a1a', color: '#fff' }}>
      {/* MENU LATERAL */}
      <div style={{ width: '220px', background: '#0d0d0d', padding: '20px', borderRight: '1px solid #333', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ marginBottom: '20px' }}>📊 Menu</h2>
        
        <button 
          onClick={() => setActivePage('dashboard')}
          style={{ 
            padding: '12px', 
            marginBottom: '10px', 
            background: activePage === 'dashboard' ? '#00bfff' : '#2a2a2a', 
            color: activePage === 'dashboard' ? '#000' : '#fff',
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          📈 Dashboard
        </button>

        <button 
          onClick={() => setActivePage('clientes')}
          style={{ 
            padding: '12px', 
            marginBottom: '10px', 
            background: activePage === 'clientes' ? '#00bfff' : '#2a2a2a', 
            color: activePage === 'clientes' ? '#000' : '#fff',
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          👥 Clientes
        </button>

        <button 
          onClick={() => setActivePage('planos')}
          style={{ 
            padding: '12px', 
            marginBottom: '10px', 
            background: activePage === 'planos' ? '#00bfff' : '#2a2a2a', 
            color: activePage === 'planos' ? '#000' : '#fff',
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          📦 Planos
        </button>

        <button 
          onClick={() => setActivePage('pagamentos')}
          style={{ 
            padding: '12px', 
            marginBottom: '10px', 
            background: activePage === 'pagamentos' ? '#00bfff' : '#2a2a2a', 
            color: activePage === 'pagamentos' ? '#000' : '#fff',
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          💳 Pagamentos
        </button>

        <button 
          onClick={() => setActivePage('suporte')}
          style={{ 
            padding: '12px', 
            marginBottom: '20px', 
            background: activePage === 'suporte' ? '#00bfff' : '#2a2a2a', 
            color: activePage === 'suporte' ? '#000' : '#fff',
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          🎧 Suporte
        </button>

        <button 
          onClick={() => setLoggedIn(false)}
          style={{ 
            padding: '12px', 
            background: '#ff4444', 
            color: '#fff',
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: 'auto'
          }}
        >
          ❌ Sair
        </button>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
        
        {activePage === 'dashboard' && (
          <div>
            <h1>📊 Dashboard Admin - Revendedor NOW TV</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
                <h2>👥 Total de Clientes</h2>
                <p style={{ fontSize: '32px', color: '#00bfff', marginTop: '10px' }}>0</p>
              </div>
              <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
                <h2>💰 Total de Vendas</h2>
                <p style={{ fontSize: '32px', color: '#00bfff', marginTop: '10px' }}>R$ 0,00</p>
              </div>
              <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
                <h2>💵 Sua Comissão (15%)</h2>
                <p style={{ fontSize: '32px', color: '#00ff00', marginTop: '10px' }}>R$ 0,00</p>
              </div>
              <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
                <h2>📈 Planos Ativos</h2>
                <p style={{ fontSize: '32px', color: '#ffa500', marginTop: '10px' }}>2</p>
              </div>
            </div>
          </div>
        )}

        {activePage === 'clientes' && (
          <div>
            <h1>👥 Gerenciar Clientes</h1>
            <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
              <p>Nenhum cliente cadastrado ainda.</p>
              <button style={{ padding: '10px 20px', background: '#00ff00', color: '#000', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>➕ Adicionar Cliente</button>
            </div>
          </div>
        )}

        {activePage === 'planos' && (
          <div>
            <h1>📦 Gerenciar Planos</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
                <h3>Plano Básico</h3>
                <p>R$ 49,90/mês</p>
                <p>HD em 1 dispositivo</p>
                <button style={{ padding: '10px 20px', background: '#00bfff', color: '#000', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Editar</button>
              </div>
              <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
                <h3>Plano Premium</h3>
                <p>R$ 79,90/mês</p>
                <p>4K em 4 dispositivos</p>
                <button style={{ padding: '10px 20px', background: '#00bfff', color: '#000', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Editar</button>
              </div>
            </div>
          </div>
        )}

        {activePage === 'pagamentos' && (
          <div>
            <h1>💳 Histórico de Pagamentos</h1>
            <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
              <p>Nenhum pagamento realizado ainda.</p>
            </div>
          </div>
        )}

        {activePage === 'suporte' && (
          <div>
            <h1>🎧 Tickets de Suporte</h1>
            <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
              <p>Nenhum ticket aberto.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            style={{ width: '100%', padding: '12px', marginBottom: '15px', borderRadius: '5px', border: 'none', boxSizing: 'border-box' }} 
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '5px', border: 'none', boxSizing: 'border-box' }} 
          />
          <button 
            onClick={() => {
              if (email === 'admin@revendedor.com' && password === 'Admin@2024') {
                setLoggedIn(true);
              } else {
                alert('Email ou senha incorretos!');
              }
            }}
            style={{ width: '100%', padding: '12px', background: '#00bfff', color: '#000', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#1a1a1a', color: '#fff' }}>
      {/* MENU LATERAL */}
      <div style={{ width: '220px', background: '#0d0d0d', padding: '20px', borderRight: '1px solid #333', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ marginBottom: '20px' }}>📊 Menu</h2>
        
        <button 
          onClick={() => setActivePage('dashboard')}
          style={{ 
            padding: '12px', 
            marginBottom: '10px', 
            background: activePage === 'dashboard' ? '#00bfff' : '#2a2a2a', 
            color: activePage === 'dashboard' ? '#000' : '#fff',
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          📈 Dashboard
        </button>

        <button 
          onClick={() => setActivePage('clientes')}
          style={{ 
            padding: '12px', 
            marginBottom: '10px', 
            background: activePage === 'clientes' ? '#00bfff' : '#2a2a2a', 
            color: activePage === 'clientes' ? '#000' : '#fff',
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          👥 Clientes
        </button>

        <button 
          onClick={() => setActivePage('planos')}
          style={{ 
            padding: '12px', 
            marginBottom: '10px', 
            background: activePage === 'planos' ? '#00bfff' : '#2a2a2a', 
            color: activePage === 'planos' ? '#000' : '#fff',
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          📦 Planos
        </button>

        <button 
          onClick={() => setActivePage('pagamentos')}
          style={{ 
            padding: '12px', 
            marginBottom: '10px', 
            background: activePage === 'pagamentos' ? '#00bfff' : '#2a2a2a', 
            color: activePage === 'pagamentos' ? '#000' : '#fff',
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          💳 Pagamentos
        </button>

        <button 
          onClick={() => setActivePage('suporte')}
          style={{ 
            padding: '12px', 
            marginBottom: '20px', 
            background: activePage === 'suporte' ? '#00bfff' : '#2a2a2a', 
            color: activePage === 'suporte' ? '#000' : '#fff',
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          🎧 Suporte
        </button>

        <button 
          onClick={() => setLoggedIn(false)}
          style={{ 
            padding: '12px', 
            background: '#ff4444', 
            color: '#fff',
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: 'auto'
          }}
        >
          ❌ Sair
        </button>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div style={{ flex: 1, padding: '30px', overflowY: 'auto' }}>
        
        {activePage === 'dashboard' && (
          <div>
            <h1>📊 Dashboard Admin - Revendedor NOW TV</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
                <h2>👥 Total de Clientes</h2>
                <p style={{ fontSize: '32px', color: '#00bfff', marginTop: '10px' }}>0</p>
              </div>
              <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
                <h2>💰 Total de Vendas</h2>
                <p style={{ fontSize: '32px', color: '#00bfff', marginTop: '10px' }}>R$ 0,00</p>
              </div>
              <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
                <h2>💵 Sua Comissão (15%)</h2>
                <p style={{ fontSize: '32px', color: '#00ff00', marginTop: '10px' }}>R$ 0,00</p>
              </div>
              <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
                <h2>📈 Planos Ativos</h2>
                <p style={{ fontSize: '32px', color: '#ffa500', marginTop: '10px' }}>2</p>
              </div>
            </div>
          </div>
        )}

        {activePage === 'clientes' && (
          <div>
            <h1>👥 Gerenciar Clientes</h1>
            <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
              <p>Nenhum cliente cadastrado ainda.</p>
              <button style={{ padding: '10px 20px', background: '#00ff00', color: '#000', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>➕ Adicionar Cliente</button>
            </div>
          </div>
        )}

        {activePage === 'planos' && (
          <div>
            <h1>📦 Gerenciar Planos</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
                <h3>Plano Básico</h3>
                <p>R$ 49,90/mês</p>
                <p>HD em 1 dispositivo</p>
                <button style={{ padding: '10px 20px', background: '#00bfff', color: '#000', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Editar</button>
              </div>
              <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px' }}>
                <h3>Plano Premium</h3>
                <p>R$ 79,90/mês</p>
                <p>4K em 4 dispositivos</p>
                <button style={{ padding: '10px 20px', background: '#00bfff', color: '#000', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Editar</button>
              </div>
            </div>
          </div>
        )}

        {activePage === 'pagamentos' && (
          <div>
            <h1>💳 Histórico de Pagamentos</h1>
            <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
              <p>Nenhum pagamento realizado ainda.</p>
            </div>
          </div>
        )}

        {activePage === 'suporte' && (
          <div>
            <h1>🎧 Tickets de Suporte</h1>
            <div style={{ background: '#2a2a2a', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
              <p>Nenhum ticket aberto.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}