import React, { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = () => {
    if (email === 'admin@revendedor.com' && password === 'Admin@2024') {
      setLoggedIn(true);
      setEmail('');
      setPassword('');
    } else {
      alert('Email ou senha incorretos!');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      background: '#1a1a1a',
      color: '#fff'import React, { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [clientes, setClientes] = useState([]);
  const [planos, setPlanos] = useState([
    { id: 1, nome: 'Plano Básico', preco: 49.90, descricao: 'HD em 1 dispositivo' },
    { id: 2, nome: 'Plano Premium', preco: 79.90, descricao: '4K em 4 dispositivos' }
  ]);
  const [novoCliente, setNovoCliente] = useState({ nome: '', email: '', plano: '' });
  const [novoPlano, setNovoPlano] = useState({ nome: '', preco: '', descricao: '' });

  const handleLogin = () => {
    if (email === 'admin@revendedor.com' && password === 'Admin@2024') {
      setLoggedIn(true);
      setEmail('');
      setPassword('');
    } else {
      alert('Email ou senha incorretos!');
    }
  };

  const handleAdicionarCliente = () => {
    if (novoCliente.nome && novoCliente.email && novoCliente.plano) {
      setClientes([...clientes, { ...novoCliente, id: Date.now(), status: 'Ativo' }]);
      setNovoCliente({ nome: '', email: '', plano: '' });
      alert('✅ Cliente adicionado com sucesso!');
    } else {
      alert('❌ Preencha todos os campos!');
    }
  };

  const handleDeletarCliente = (id) => {
    setClientes(clientes.filter(c => c.id !== id));
    alert('✅ Cliente removido!');
  };

  const handleCriarPlano = () => {
    if (novoPlano.nome && novoPlano.preco && novoPlano.descricao) {
      setPlanos([...planos, { ...novoPlano, id: Date.now(), preco: parseFloat(novoPlano.preco) }]);
      setNovoPlano({ nome: '', preco: '', descricao: '' });
      alert('✅ Plano criado com sucesso!');
    } else {
      alert('❌ Preencha todos os campos!');
    }
  };

  const handleDeletarPlano = (id) => {
    setPlanos(planos.filter(p => p.id !== id));
    alert('✅ Plano removido!');
  };

  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      background: '#1a1a1a',
      color: '#fff'
    },
    sidebar: {
      width: '250px',
      background: '#0d0d0d',
      padding: '20px',
      borderRight: '1px solid #333'
    },
    mainContent: {
      flex: 1,
      padding: '30px',
      overflowY: 'auto'
    },
    navItem: {
      padding: '15px',
      marginBottom: '10px',
      background: '#2a2a2a',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      borderRadius: '5px',
      width: '100%',
      textAlign: 'left',
      fontSize: '16px',
      transition: 'all 0.3s'
    },
    navItemActive: {
      background: '#00bfff',
      color: '#000',
      fontWeight: 'bold'
    },
    card: {
      background: '#2a2a2a',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px'
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginBottom: '30px'
    },
    cardValue: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#00bfff',
      marginTop: '10px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px'
    },
    th: {
      background: '#1a1a1a',
      padding: '12px',
      textAlign: 'left',
      borderBottom: '2px solid #00bfff'
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #333'
    },
    input: {
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '4px',
      border: 'none',
      width: '100%',
      boxSizing: 'border-box'
    },
    button: {
      padding: '10px 20px',
      background: '#00bfff',
      color: '#000',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: 'bold',
      marginRight: '10px'
    },
    logoutBtn: {
      width: '100%',
      padding: '12px',
      background: '#ff4444',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '20px'
    }
  };

  if (!loggedIn) {
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
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              cursor: 'pointer',
              borderRadius: '4px',
              border: 'none',
              background: '#00bfff',
              color: '#000',
              fontWeight: 'bold'
            }}
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  const totalVendas = clientes.length * 65;
  const comissao = totalVendas * 0.15;

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2>📊 Menu</h2>
        <button onClick={() => setCurrentPage('dashboard')} style={{ ...styles.navItem, ...(currentPage === 'dashboard' ? styles.navItemActive : {}) }}>📈 Dashboard</button>
        <button onClick={() => setCurrentPage('clientes')} style={{ ...styles.navItem, ...(currentPage === 'clientes' ? styles.navItemActive : {}) }}>👥 Clientes</button>
        <button onClick={() => setCurrentPage('planos')} style={{ ...styles.navItem, ...(currentPage === 'planos' ? styles.navItemActive : {}) }}>📦 Planos</button>
        <button onClick={() => setCurrentPage('pagamentos')} style={{ ...styles.navItem, ...(currentPage === 'pagamentos' ? styles.navItemActive : {}) }}>💳 Pagamentos</button>
        <button onClick={() => setCurrentPage('suporte')} style={{ ...styles.navItem, ...(currentPage === 'suporte' ? styles.navItemActive : {}) }}>🎧 Suporte</button>
        <button onClick={() => setLoggedIn(false)} style={styles.logoutBtn}>❌ Sair</button>
      </div>

      <div style={styles.mainContent}>
        {currentPage === 'dashboard' && (
          <div>
            <h1>📊 Dashboard Admin - Revendedor NOW TV</h1>
            <div style={styles.cardGrid}>
              <div style={styles.card}>
                <h2>👥 Total de Clientes</h2>
                <div style={styles.cardValue}>{clientes.length}</div>
              </div>
              <div style={styles.card}>
                <h2>💰 Total de Vendas</h2>
                <div style={styles.cardValue}>R$ {totalVendas.toFixed(2)}</div>
              </div>
              <div style={styles.card}>
                <h2>💵 Sua Comissão (15%)</h2>
                <div style={{ ...styles.cardValue, color: '#00ff00' }}>R$ {comissao.toFixed(2)}</div>
              </div>
              <div style={styles.card}>
                <h2>📈 Planos Ativos</h2>
                <div style={{ ...styles.cardValue, color: '#ffa500' }}>{planos.length}</div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'clientes' && (
          <div>
            <h1>👥 Gerenciar Clientes</h1>
            <div style={styles.card}>
              <h3>Adicionar Novo Cliente</h3>
              <input placeholder="Nome" value={novoCliente.nome} onChange={(e) => setNovoCliente({...novoCliente, nome: e.target.value})} style={styles.input} />
              <input placeholder="Email" value={novoCliente.email} onChange={(e) => setNovoCliente({...novoCliente, email: e.target.value})} style={styles.input} />
              <select value={novoCliente.plano} onChange={(e) => setNovoCliente({...novoCliente, plano: e.target.value})} style={styles.input}>
                <option value="">Escolher Plano</option>
                {planos.map(p => <option key={p.id} value={p.nome}>{p.nome}</option>)}
              </select>
              <button onClick={handleAdicionarCliente} style={styles.button}>➕ Adicionar Cliente</button>
            </div>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Nome</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Plano</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Ação</th>
                </tr>
              </thead>
              <tbody>
                {clientes.length === 0 ? (
                  <tr><td style={styles.td} colSpan="5">Nenhum cliente</td></tr>
                ) : (
                  clientes.map(c => (
                    <tr key={c.id}>
                      <td style={styles.td}>{c.nome}</td>
                      <td style={styles.td}>{c.email}</td>
                      <td style={styles.td}>{c.plano}</td>
                      <td style={styles.td}>{c.status}</td>
                      <td style={styles.td}><button onClick={() => handleDeletarCliente(c.id)} style={{...styles.button, background: '#ff4444'}}>Deletar</button></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {currentPage === 'planos' && (
          <div>
            <h1>📦 Gerenciar Planos</h1>
            <div style={styles.card}>
              <h3>Criar Novo Plano</h3>
              <input placeholder="Nome" value={novoPlano.nome} onChange={(e) => setNovoPlano({...novoPlano, nome: e.target.value})} style={styles.input} />
              <input placeholder="Preço" type="number" value={novoPlano.preco} onChange={(e) => setNovoPlano({...novoPlano, preco: e.target.value})} style={styles.input} />
              <input placeholder="Descrição" value={novoPlano.descricao} onChange={(e) => setNovoPlano({...novoPlano, descricao: e.target.value})} style={styles.input} />
              <button onClick={handleCriarPlano} style={{...styles.button, background: '#00ff00', color: '#000'}}>➕ Criar Plano</button>
            </div>
            <div style={styles.cardGrid}>
              {planos.map(p => (
                <div key={p.id} style={styles.card}>
                  <h3>{p.nome}</h3>
                  <p>R$ {p.preco.toFixed(2)}/mês</p>
                  <p>{p.descricao}</p>
                  <button onClick={() => handleDeletarPlano(p.id)} style={{...styles.button, background: '#ff4444'}}>Deletar</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'pagamentos' && (
          <div>
            <h1>💳 Histórico de Pagamentos</h1>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Cliente</th>
                  <th style={styles.th}>Plano</th>
                  <th style={styles.th}>Valor</th>
                  <th style={styles.th}>Data</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={styles.td} colSpan="5">Nenhum pagamento</td></tr>
              </tbody>
            </table>
          </div>
        )}

        {currentPage === 'suporte' && (
          <div>
            <h1>🎧 Tickets de Suporte</h1>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Cliente</th>
                  <th style={styles.th}>Assunto</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={styles.td} colSpan="4">Nenhum ticket</td></tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
    },
    sidebar: {
      width: '250px',
      background: '#0d0d0d',
      padding: '20px',
      borderRight: '1px solid #333'
    },
    mainContent: {
      flex: 1,
      padding: '30px'
    },
    navItem: {
      padding: '15px',
      marginBottom: '10px',
      background: '#2a2a2a',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      borderRadius: '5px',
      width: '100%',
      textAlign: 'left',
      fontSize: '16px',
      transition: 'all 0.3s'
    },
    navItemActive: {
      background: '#00bfff',
      color: '#000',
      fontWeight: 'bold'
    },
    card: {
      background: '#2a2a2a',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px'
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginBottom: '30px'
    },
    cardValue: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#00bfff',
      marginTop: '10px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px'
    },
    th: {
      background: '#1a1a1a',
      padding: '12px',
      textAlign: 'left',
      borderBottom: '2px solid #00bfff'
    },
    td: {
      padding: '12px',
      borderBottom: '1px solid #333'
    },
    logoutBtn: {
      width: '100%',
      padding: '12px',
      background: '#ff4444',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '20px'
    }
  };

  if (!loggedIn) {
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
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: 'none',
              boxSizing: 'border-box'
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              marginBottom: '20px',
              borderRadius: '4px',
              border: 'none',
              boxSizing: 'border-box'
            }}
          />
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              cursor: 'pointer',
              borderRadius: '4px',
              border: 'none',
              background: '#00bfff',
              color: '#000',
              fontWeight: 'bold'
            }}
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2>📊 Menu</h2>
        <button
          onClick={() => setCurrentPage('dashboard')}
          style={{
            ...styles.navItem,
            ...(currentPage === 'dashboard' ? styles.navItemActive : {})
          }}
        >
          📈 Dashboard
        </button>
        <button
          onClick={() => setCurrentPage('clientes')}
          style={{
            ...styles.navItem,
            ...(currentPage === 'clientes' ? styles.navItemActive : {})
          }}
        >
          👥 Clientes
        </button>
        <button
          onClick={() => setCurrentPage('planos')}
          style={{
            ...styles.navItem,
            ...(currentPage === 'planos' ? styles.navItemActive : {})
          }}
        >
          📦 Planos
        </button>
        <button
          onClick={() => setCurrentPage('pagamentos')}
          style={{
            ...styles.navItem,
            ...(currentPage === 'pagamentos' ? styles.navItemActive : {})
          }}
        >
          💳 Pagamentos
        </button>
        <button
          onClick={() => setCurrentPage('suporte')}
          style={{
            ...styles.navItem,
            ...(currentPage === 'suporte' ? styles.navItemActive : {})
          }}
        >
          🎧 Suporte
        </button>
        <button
          onClick={() => setLoggedIn(false)}
          style={styles.logoutBtn}
        >
          ❌ Sair
        </button>
      </div>

      <div style={styles.mainContent}>
        {currentPage === 'dashboard' && (
          <div>
            <h1>📊 Dashboard Admin - Revendedor NOW TV</h1>
            <div style={styles.cardGrid}>
              <div style={styles.card}>
                <h2>👥 Total de Clientes</h2>
                <div style={styles.cardValue}>0</div>
              </div>
              <div style={styles.card}>
                <h2>💰 Total de Vendas</h2>
                <div style={styles.cardValue}>R$ 0,00</div>
              </div>
              <div style={styles.card}>
                <h2>💵 Sua Comissão (15%)</h2>
                <div style={{ ...styles.cardValue, color: '#00ff00' }}>R$ 0,00</div>
              </div>
              <div style={styles.card}>
                <h2>📈 Planos Ativos</h2>
                <div style={{ ...styles.cardValue, color: '#ffa500' }}>0</div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'clientes' && (
          <div>
            <h1>👥 Gerenciar Clientes</h1>
            <div style={styles.card}>
              <p>Nenhum cliente cadastrado ainda.</p>
              <button style={{
                padding: '10px 20px',
                background: '#00bfff',
                color: '#000',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
                ➕ Adicionar Cliente
              </button>
            </div>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Nome</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Plano</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td} colSpan="4">Sem clientes</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {currentPage === 'planos' && (
          <div>
            <h1>📦 Gerenciar Planos</h1>
            <button style={{
              padding: '10px 20px',
              background: '#00ff00',
              color: '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              ➕ Criar Novo Plano
            </button>
            <div style={styles.cardGrid}>
              <div style={styles.card}>
                <h3>Plano Básico</h3>
                <p>R$ 49,90/mês</p>
                <p>HD em 1 dispositivo</p>
                <button style={{
                  padding: '10px',
                  background: '#00bfff',
                  color: '#000',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Editar
                </button>
              </div>
              <div style={styles.card}>
                <h3>Plano Premium</h3>
                <p>R$ 79,90/mês</p>
                <p>4K em 4 dispositivos</p>
                <button style={{
                  padding: '10px',
                  background: '#00bfff',
                  color: '#000',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Editar
                </button>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'pagamentos' && (
          <div>
            <h1>💳 Histórico de Pagamentos</h1>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Cliente</th>
                  <th style={styles.th}>Plano</th>
                  <th style={styles.th}>Valor</th>
                  <th style={styles.th}>Data</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td} colSpan="5">Nenhum pagamento ainda</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {currentPage === 'suporte' && (
          <div>
            <h1>🎧 Tickets de Suporte</h1>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>ID</th>
                  <th style={styles.th}>Cliente</th>
                  <th style={styles.th}>Assunto</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td} colSpan="4">Nenhum ticket aberto</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;