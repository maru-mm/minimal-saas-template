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

### Opzione 1: Deploy da GitHub (Consigliato) 🎯

Fly.io può fare il build automatico direttamente dal repository GitHub:

#### 1. Installa Fly CLI

```bash
# macOS
brew install flyctl

# Linux
curl -L https://fly.io/install.sh | sh

# Windows
pwsh -Command "iwr https://fly.io/install.ps1 -useb | iex"
```

#### 2. Autenticazione

```bash
fly auth login
```

#### 3. Deploy dal repository GitHub

```bash
# Clona il repository
git clone https://github.com/maru-mm/minimal-saas-template.git
cd minimal-saas-template

# Installa le dipendenze localmente (per verificare che tutto funzioni)
npm install

# Deploy su Fly.io
fly launch
```

**Durante il lancio:**
- Ti verrà chiesto il nome dell'app (puoi accettare quello suggerito o personalizzarlo)
- Scegli la region più vicina (es. `ams` per Amsterdam, `mad` per Madrid)
- **NON** creare un database PostgreSQL quando richiesto
- Conferma il deploy

Fly.io farà automaticamente il build usando **Nixpacks** (senza Docker!) e deployerà l'app.

#### 4. Deploy successivi

Quando fai modifiche al codice:

```bash
# Fai commit e push su GitHub
git add .
git commit -m "Le tue modifiche"
git push origin main

# Deploy su Fly.io
fly deploy
```

#### 5. Apri l'app

```bash
fly open
```

### Opzione 2: Deploy Locale

Se preferisci fare il deploy dalla tua macchina locale senza clonare da GitHub:

```bash
# Nella directory del progetto
fly launch
fly deploy
```

### Opzione 3: Deploy Automatico con GitHub Actions (CI/CD) 🚀

Il progetto include già un workflow GitHub Actions per il deploy automatico!

#### Setup:

1. **Ottieni il token Fly.io:**
```bash
fly tokens create deploy
```

2. **Aggiungi il token come GitHub Secret:**
   - Vai su GitHub: `https://github.com/maru-mm/minimal-saas-template/settings/secrets/actions`
   - Clicca su "New repository secret"
   - Nome: `FLY_API_TOKEN`
   - Valore: il token ottenuto al punto 1
   - Salva

3. **Deploy automatico:**

Ogni volta che fai un push sul branch `main`, GitHub Actions farà automaticamente il deploy su Fly.io!

```bash
git add .
git commit -m "Update feature"
git push origin main
# 🎉 Deploy automatico!
```

Puoi anche attivare il deploy manualmente dalla tab "Actions" su GitHub.

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

# Scala l'app (aumenta risorse)
fly scale vm shared-cpu-1x --memory 512

# Visualizza info sull'app
fly info
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

