# ⚡ Automatic workflow to categorise your job status

> ⚡ **97 views** · ⚡ [Personal Productivity](../)

## Description

# Job Application Status Analyser

An automated n8n workflow that monitors your Gmail inbox, classifies job application emails using a **local AI (Ollama)**, and logs every application — with company, role, and status — to a Google Sheet in real-time.

No cloud AI APIs. No rate limits. Fully local, fully private.

---

## How It Works

```
Gmail ➜ Preprocess ➜ Filter Spam ➜ AI Classify (Ollama) ➜ Parse ➜ Merge ➜ Judge ➜ Google Sheets
```

1. **Email Ingestion** — Gmail Trigger polls for new emails every minute from Primary/Updates categories. A manual backfill trigger lets you process the last 150 emails on demand.

2. **Preprocessing** — Extracts subject, sender, body text, date, and application links (ATS portals like Greenhouse, Lever, Workday, etc.) from raw email data.

3. **Spam Filter** — Drops newsletters, promotional digests, and sale emails via regex before they hit the AI.

4. **AI Classification** — Sends each email to a local **Ollama** instance (Llama 3.1 8B) with a structured prompt. The AI extracts:
   - **Company** name
   - **Role** / job title
   - **Status** — `applied` | `rejected` | `interview` | `offer`

5. **Smart Fallbacks** — If the AI returns `unknown`:
   - **Status** → 100+ keyword normalization map + regex body scan (e.g., "unfortunately" → `rejected`, "interview scheduled" → `interview`)
   - **Role** → Regex extraction from email body (e.g., "apply for the Software Engineer 3, AMP role")
   - **Company** → Sender display name → domain extraction (with generic domain blocklist) → body scan patterns ("team at X", "your application to X")

6. **Override Rules** — The word **"unfortunately"** in any email body forces status to `rejected`, regardless of AI output.

7. **AI Judging Gate** — A second Ollama pass validates each result, filtering out any remaining spam or false positives.

8. **Google Sheets Upsert** — Clean data is written to your Google Sheet with columns: `company`, `role`, `status`, `Application Link`, `Last Update Date`, `Applied Date`.

9. **Daily Summary** — An hourly scheduled trigger reads the sheet and generates application stats (applied/interview/rejected/offer counts).

---

## Setup Steps

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed
- Gmail account
- Google Sheets API enabled ([Google Cloud Console](https://console.cloud.google.com/))

### 1. Clone & Start Services

```bash
git clone &lt;repo-url&gt; && cd job-status-analyser
docker compose up -d
```

This spins up two containers:
| Service | Port | Purpose |
|---------|------|---------|
| **n8n** | `localhost:5679` | Workflow automation engine |
| **Ollama** | `localhost:11434` | Local LLM inference server |

### 2. Pull the AI Model

```bash
docker exec -it job-status-analyser-ollama-1 ollama pull llama3.1:8b
```

### 3. Import the Workflow

1. Open n8n at `http://localhost:5679`
2. Go to **Workflows → Import from File**
3. Select `text.json`

### 4. Connect Credentials

| Node | Credential Needed |
|------|-------------------|
| Gmail Trigger / Backfill | Gmail OAuth2 |
| Upsert Row in Sheets | Google Sheets OAuth2 |

&gt; Follow the n8n prompts to authorize both accounts.

### 5. Configure Google Sheet

1. Create a new Google Sheet with these column headers:

   ```
   company | role | status | Application Link | Last Update Date | Applied Date
   ```

2. Copy the Sheet URL and update it in the **Upsert Row in Sheets** and **Read All Applications** nodes.

### 6. Activate & Run

- Click **Active** toggle to enable the Gmail trigger (polls every minute)
- Or click **Backfill Trigger** manually to process your last 150 emails immediately

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Workflow Engine | n8n (self-hosted) |
| AI/LLM | Ollama + Llama 3.1 8B |
| Email Source | Gmail API (OAuth2) |
| Data Store | Google Sheets |
| Infrastructure | Docker Compose |

---

&gt; **Tip**: If specific company emails are still misclassified, add keywords to the `STATUS_NORM` map or `BODY_PATTERNS` array in the **Final Merge Logic** node.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Gmail, Gmail Trigger, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
