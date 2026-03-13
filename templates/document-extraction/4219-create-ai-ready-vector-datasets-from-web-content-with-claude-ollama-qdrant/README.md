# 🔬 Create AI-ready vector datasets from web content with Claude, Ollama & Qdrant

> ⚡ **1,458 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

# AI-Powered Web Data Pipeline with n8n

![f70ca7d4da7544ce92333c57c5e62954.png](fileId:1324)
## How It Works

This `n8n` workflow builds an **AI-powered web data pipeline** that automates the entire process of:

- **Extraction**
- **Structuring**
- **Vectorization**
- **Storage**

It integrates multiple advanced tools to transform messy web pages into clean, searchable vector databases.

###  Integrated Tools

- **Scrapeless**  
  Bypasses JavaScript-heavy websites and anti-bot protections to reliably extract HTML content.

- **Claude AI**  
  Uses LLMs to analyze unstructured HTML and generate clean, structured JSON data.

- **Ollama Embeddings**  
  Generates local vector embeddings from structured text using the `all-minilm` model.

- **Qdrant Vector DB**  
  Stores semantic vector data for fast and meaningful search capabilities.

- **Webhook Notifications**  
  Sends real-time updates when workflows complete or errors occur.

From messy webpages to structured vector data — this pipeline is perfect for building intelligent agents, knowledge bases, or research automation tools.

---

##  Setup Steps

### 1. Install n8n

&gt; Requires Node.js v18 / v20 / v22

```
npm install -g n8n
n8n
```
After installation, access the n8n interface via:

**URL:** [http://localhost:5678](http://localhost:5678)

---

### 2. Set Up Scrapeless

1. Register at: [Scrapeless](https://app.scrapeless.com/passport/login?utm_source=n8n&&utm_campaign=webdatapipe)  
2. Copy your **API token**  
3. Paste the token into the `HTTP Request` node labeled **"Scrapeless Web Request"**

---

### 3. Set Up Claude API (Anthropic)

1. Sign up at Anthropic Console
2. Generate your **Claude API key**  
3. Add the API key to the following nodes:
   - `Claude Extractor`
   - `AI Data Checker`
   - `Claude AI Agent`

---

### 4. Install and Run Ollama

#### macOS

```
brew install ollama

```


####  Linux

```
curl -fsSL https://ollama.com/install.sh | sh
```
**Windows**
Download the installer from: https://ollama.com

#### Start Ollama Server
```
ollama serve
```
#### Pull Embedding Model
```
ollama pull all-minilm
```
### 5. Install Qdrant (via Docker)
```
docker pull qdrant/qdrant

docker run -d \
  --name qdrant-server \
  -p 6333:6333 -p 6334:6334 \
  -v $(pwd)/qdrant_storage:/qdrant/storage \
  qdrant/qdrant
```
 Test if Qdrant is running:
```
curl http://localhost:6333/healthz
```

### 6. Configure the n8n Workflow
 - Modify the Trigger (Manual or Scheduled)

 - Input your Target URLs and Collection Name in the designated nodes

 - Paste all required API Tokens / Keys into their corresponding nodes

 - Ensure your Qdrant and Ollama services are running

## Ideal Use Cases
 - Custom AI Chatbots

 - Private Search Engines

 - Research Tools

 - Internal Knowledge Bases

 - Content Monitoring Pipelines

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
