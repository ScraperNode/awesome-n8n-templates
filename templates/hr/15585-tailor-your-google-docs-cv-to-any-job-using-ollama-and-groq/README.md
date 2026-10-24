# 👥 Tailor your Google Docs CV to any job using Ollama and Groq

> ⚡ **85 views** · 👥 [HR & Recruitment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

# 🎯 CV Keyword Optimizer

An AI-powered n8n workflow that automatically tailors your resume to any job description by injecting relevant keywords — without touching your formatting, layout, or design.

---

## How It Works

### Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        User Input (Form)                        │
│         CV Google Docs Link  +  Job URL or Pasted JD            │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│  1. Read CV from Google Docs API                                 │
│  2. Extract full CV text (handles tables, paragraphs, etc.)      │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│  3. Get Job Description                                          │
│     ├── URL provided? → Scrape job page, strip HTML to text      │
│     │     └── Scrape failed? → Fall back to manual JD            │
│     └── No URL? → Use manually pasted JD directly                │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│  4. 🏠 Local Ollama (llama3.1:8b)                                │
│     Analyzes JD + CV → Extracts & ranks 10-20 ATS keywords      │
│     Output: keyword, priority, target bullet, reason             │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│  5. ☁️ Groq API (Llama 3.3 70B)                                  │
│     Takes ranked keywords + CV → Produces find/replace pairs     │
│     Naturally weaves keywords into experience bullet points      │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│  6. Copy original CV via Google Drive API                        │
│     (preserves ALL formatting, tables, styles)                   │
│                                                                  │
│  7. Apply replacements via Google Docs batchUpdate API            │
│     (replaceAllText — formatting stays intact)                   │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│  8. Output                                                       │
│     ✅ New Google Doc link                                       │
│     📋 Changelog: original text → updated text + keywords added  │
└──────────────────────────────────────────────────────────────────┘
```

### Why Two AI Models?

| Step | Model | Why |
|------|-------|-----|
| **Keyword Extraction** | Ollama `llama3.1:8b` (local) | Free, private, no API costs. Reasoning about which keywords actually matter for ATS |
| **Text Rewriting** | Groq `llama-3.3-70b-versatile` (cloud) | Larger model = better at natural language. Produces find/replace pairs that read naturally |

### What Gets Modified

- ✅ Experience/work bullet points
- ✅ Skills/technical skills lines
- ❌ Name, contact info, education, dates, company names, job titles — **never touched**

### Formatting Preservation

The workflow **copies** your original Google Doc (not recreates it), then uses `replaceAllText` to swap text in-place. This means:

- ✅ Tables, columns, fonts, colors — all preserved
- ✅ Bold, italic, underline — all preserved
- ✅ Custom spacing, margins — all preserved
- ✅ Original doc is untouched (changes go to the copy)

---

## Setup Steps

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed
- [Ollama](https://ollama.ai/) installed locally
- A [Groq API key](https://console.groq.com/) (free tier works)
- Google account with Docs & Drive access

### 1. Install & Start Ollama

```bash
# macOS
brew install ollama

# Start the Ollama server
ollama serve

# Pull the model (in another terminal)
ollama pull llama3.1:8b
```

Verify it's running:
```bash
curl http://localhost:11434/api/tags
```

### 2. Get a Groq API Key

1. Go to [console.groq.com](https://console.groq.com/)
2. Sign up / log in
3. Navigate to **API Keys** → Create a new key
4. Copy the key (starts with `gsk_...`)

### 3. Configure Environment

```bash
cd cv-generator

# Create .env from template
cp .env.example .env

# Edit .env and add your Groq key
# GROQ_API_KEY=gsk_your_key_here
```

### 4. Start n8n

```bash
docker compose up -d
```

n8n will be available at **http://localhost:5678**

Default credentials:
- Username: `admin`
- Password: `changeme`

&gt; ⚠️ Change these in `docker-compose.yml` for production use.

### 5. Import the Workflow

1. Open n8n at `http://localhost:5678`
2. Go to **Workflows** → **Import from File**
3. Select `cv-keyword-optimizer.json`
4. You'll see credential warnings on some nodes — that's expected

### 6. Set Up Google Credentials

1. In n8n, go to **Settings** → **Credentials**
2. Create a **Google Docs OAuth2** credential
   - Follow n8n's OAuth2 setup guide for Google
   - Required scopes: `https://www.googleapis.com/auth/documents`
3. Create a **Google Drive OAuth2** credential
   - Required scopes: `https://www.googleapis.com/auth/drive`
4. Click each node with a ⚠️ warning → select your credential from the dropdown

### 7. Activate & Use

1. Toggle the workflow **Active**
2. Open the form URL shown in the trigger node (or go to `http://localhost:5678/form/cv-keyword-optimizer-form`)
3. Fill in:
   - **Google Docs CV Link** (required)
   - **Job Posting URL** *or* **Job Description** (at least one)
4. Submit and wait ~30-60 seconds
5. Get your optimized CV link + detailed changelog

---

## Project Structure

```
cv-generator/
├── cv-keyword-optimizer.json   # n8n workflow definition
├── docker-compose.yml          # n8n container config
├── .env                        # Environment variables (not committed)
├── .env.example                # Template for .env
├── .gitignore                  # Ignores .env
└── README.md                   # This file
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Ollama connection refused | Make sure `ollama serve` is running. n8n reaches it via `host.docker.internal:11434` |
| Groq 429 rate limit | Free tier has limits. Wait a minute and retry |
| Scraping fails on LinkedIn | LinkedIn blocks scrapers. Paste the JD manually instead |
| Google Docs auth error | Re-check OAuth2 credentials in n8n. Ensure correct scopes |
| Replacements don't apply | The AI's "find" text must exactly match the CV. Check the Changes Summary for what was attempted |
| Empty response from Ollama | Model may still be loading. First run takes longer. Timeout is set to 5 min |

## 🔗 Nodes Used

HTTP Request, Google Drive, Google Docs, Basic LLM Chain, Ollama Chat Model, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
