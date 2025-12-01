# 🚀 Guida Rapida al Deploy

## Deploy su Fly.io da GitHub

### 1️⃣ Installa Fly CLI

```bash
# macOS
brew install flyctl

# Linux
curl -L https://fly.io/install.sh | sh
```

### 2️⃣ Login su Fly.io

```bash
fly auth login
```

### 3️⃣ Clona il Repository

```bash
git clone https://github.com/maru-mm/minimal-saas-template.git
cd minimal-saas-template
npm install
```

### 4️⃣ Primo Deploy

```bash
fly launch
```

**Rispondi alle domande:**
- Nome app: premi Enter per accettare quello suggerito
- Region: scegli quella più vicina (es. `ams`, `mad`, `fra`)
- PostgreSQL: **NO**
- Redis: **NO**
- Deploy: **YES**

### 5️⃣ Apri l'App

```bash
fly open
```

Vedrai: **"Il SaaS funziona correttamente 🚀"**

---

## 🔄 Deploy Automatico con GitHub Actions

### Setup (una volta sola):

1. **Crea il token Fly.io:**
```bash
fly tokens create deploy
```
Copia il token generato.

2. **Aggiungi il token su GitHub:**
   - Vai su: https://github.com/maru-mm/minimal-saas-template/settings/secrets/actions
   - Click "New repository secret"
   - Nome: `FLY_API_TOKEN`
   - Valore: incolla il token
   - Salva

3. **Fatto!** Ora ogni push su `main` farà il deploy automatico 🎉

```bash
# Fai modifiche
git add .
git commit -m "My changes"
git push origin main
# 🚀 Deploy automatico attivato!
```

---

## 📊 Monitoraggio

```bash
# Log in tempo reale
fly logs

# Status dell'app
fly status

# Dashboard web
fly dashboard
```

---

## 🔧 Troubleshooting

**Errore: "Could not find App"**
```bash
fly apps list
# Se non vedi la tua app, devi fare fly launch
```

**L'app non parte:**
```bash
fly logs
# Controlla gli errori nei log
```

**Cambiare region:**
```bash
fly regions list
fly regions add mad
fly regions remove ams
fly deploy
```

---

## 💰 Costi

Fly.io offre un **free tier generoso:**
- 3 macchine condivise (shared-cpu-1x)
- 256MB RAM per macchina
- 3GB storage persistente
- 160GB outbound transfer

Questa app usa **256MB RAM** e si **spegne automaticamente** quando non è in uso, quindi rientra nel free tier! ✅

---

## 🎯 Link Utili

- 📖 Docs Fly.io: https://fly.io/docs/
- 💬 Community: https://community.fly.io/
- 🐙 Repository: https://github.com/maru-mm/minimal-saas-template

