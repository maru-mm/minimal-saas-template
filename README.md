# 🚀 Mini SaaS Template

Un progetto Next.js 14 minimale pronto per il deploy su Fly.io.

## 📦 Installazione

```bash
npm install
```

## 🔧 Sviluppo locale

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser per vedere il risultato.

## 🌍 Deploy su Fly.io

### 1. Installa Fly CLI

```bash
# macOS
brew install flyctl

# Linux
curl -L https://fly.io/install.sh | sh

# Windows
pwsh -Command "iwr https://fly.io/install.ps1 -useb | iex"
```

### 2. Autenticazione

```bash
fly auth login
```

### 3. Primo deploy

```bash
fly launch
```

Fly.io rileverà automaticamente Next.js e creerà la configurazione necessaria.

**Durante il lancio:**
- Ti verrà chiesto il nome dell'app (puoi accettare quello suggerito)
- Scegli la region più vicina (es. `ams` per Amsterdam)
- **NON** creare un database PostgreSQL quando richiesto
- Conferma il deploy

### 4. Deploy successivi

Dopo il primo lancio, per aggiornare l'app:

```bash
fly deploy
```

### 5. Apri l'app

```bash
fly open
```

## 📝 Comandi utili Fly.io

```bash
# Visualizza i log in tempo reale
fly logs

# Controlla lo stato dell'app
fly status

# Apri la dashboard web
fly dashboard

# SSH nella macchina
fly ssh console
```

## 🛠️ Stack tecnologico

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Fly.io** (hosting)

## 📁 Struttura del progetto

```
mini-saas-template/
├── app/
│   ├── layout.tsx      # Layout principale
│   ├── page.tsx        # Homepage
│   └── globals.css     # Stili globali
├── fly.toml            # Configurazione Fly.io
├── package.json        # Dipendenze
├── next.config.js      # Config Next.js
├── tailwind.config.ts  # Config Tailwind
└── README.md           # Questo file
```

## 🎯 Cosa fa questa app?

Mostra semplicemente un messaggio centrato: **"Il SaaS funziona correttamente 🚀"**

È un template minimale perfetto come punto di partenza per costruire un SaaS più complesso.

## 📄 Licenza

MIT

