# 🔬 Estimate construction costs from text with Telegram, OpenAI and DDC CWICR

> ⚡ **76 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

A **Telegram bot** that converts natural-language work descriptions into detailed **cost estimates** using AI parsing, vector search, and the open-source **DDC CWICR** database with 55,000+ construction work items.

## Who's it for

- **Contractors & Estimators** who need quick ballpark figures from verbal/text descriptions
- **Construction managers** doing feasibility checks on-site via mobile
- **BIM/CAD professionals** integrating text-based estimation into workflows
- **Developers** building construction cost APIs or chatbots

## What it does

1. **Receives** text messages in Telegram (work lists, specifications, notes)
2. **Parses** input with AI (OpenAI/Claude/Gemini) into structured work items
3. **Searches** DDC CWICR vector database via Qdrant for matching rates
4. **Calculates** costs with full breakdown (labor, materials, machines)
5. **Exports** results as HTML report, Excel, or PDF

**Supports 9 languages:** 🇩🇪 DE · 🇬🇧 EN · 🇷🇺 RU · 🇪🇸 ES · 🇫🇷 FR · 🇧🇷 PT · 🇨🇳 ZH · 🇦🇪 AR · 🇮🇳 HI

## How it works

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐    ┌──────────────┐
│  Telegram   │ →  │  AI Parse    │ →  │  Embeddings │ →  │   Qdrant     │
│  Text Input │    │  (GPT/Claude)│    │  (OpenAI)   │    │   Search     │
└─────────────┘    └──────────────┘    └─────────────┘    └──────────────┘
                                                                  ↓
┌─────────────┐    ┌──────────────┐    ┌─────────────┐    ┌──────────────┐
│   Export    │ ←  │  Aggregate   │ ←  │  Calculate  │ ←  │  AI Rerank   │
│ HTML/XLS/PDF│    │   Results    │    │    Costs    │    │   Results    │
└─────────────┘    └──────────────┘    └─────────────┘    └──────────────┘
```

**Step-by-step:**
1. User sends `/start` → selects language → enters work description
2. **AI Parse** extracts work items: name, quantity, unit, room
3. **Query Transform** optimizes search terms for construction domain
4. **Embeddings API** converts query to vector (OpenAI `text-embedding-3-small`)
5. **Qdrant Search** finds top-10 matching rates from DDC CWICR
6. **AI Rerank** selects best match considering context and units
7. **Calculate** applies quantities, sums labor/materials/machines
8. **Report** sends Telegram message + optional Excel/PDF export

## Prerequisites

| Component | Requirement |
|-----------|-------------|
| **n8n** | v1.30+ (AI nodes support) |
| **Telegram Bot** | Token from @BotFather |
| **OpenAI API** | For embeddings + LLM parsing |
| **Qdrant** | Vector DB with DDC CWICR collections loaded |
| **DDC CWICR Data** | [github.com/datadrivenconstruction/DDC-CWICR](https://github.com/datadrivenconstruction/OpenConstructionEstimate-DDC-CWICR) |

## Setup

### 1. Credentials (n8n Settings → Credentials)
- **OpenAI API** — required for embeddings and text parsing
- **Anthropic API** — optional, for Claude models
- **Google Gemini API** — optional, for Gemini models

### 2. Configuration (🔑 TOKEN node)
```
bot_token     = YOUR_TELEGRAM_BOT_TOKEN
QDRANT_URL    = http://localhost:6333
QDRANT_API_KEY = (if using Qdrant Cloud)
```

### 3. Qdrant Setup
Load DDC CWICR collections for your target languages:
- `DE_construction_rates` — German (STLB-Bau based)
- `EN_construction_rates` — English
- `RU_construction_rates` — Russian (GESN/FER based)
- ... (see DDC CWICR docs for all 9 languages)

### 4. Link AI Model Nodes
1. Open **OpenAI Model** nodes
2. Select your OpenAI credential
3. (Optional) Enable Claude/Gemini nodes for alternative models

### 5. Telegram Webhook
1. Activate workflow
2. Telegram Trigger auto-registers webhook
3. Test with `/start` in your bot

## Features

| Feature | Description |
|---------|-------------|
| 🤖 **Multi-LLM** | Swap between OpenAI, Claude, Gemini |
| 🌍 **9 Languages** | Full UI + database localization |
| 📝 **Smart Parsing** | Handles lists, tables, free-form text |
| 🔍 **Semantic Search** | Vector similarity + AI reranking |
| 📊 **Cost Breakdown** | Labor, materials, machines, hours |
| ✏️ **Inline Edit** | Modify quantities, delete items |
| 📤 **Export** | HTML report, Excel, PDF |
| 💾 **Session State** | Multi-turn conversation support |

## Example Input/Output

**Input (Telegram message):**
```
Living room renovation:
- Laminate flooring 25 m²
- Wall painting 60 m²
- Ceiling plasterboard 25 m²
- 3 electrical outlets
```

**Output:**
```
✅ Estimate Ready — 4 items found

1. Laminate flooring ✓
   25 m² × €18.50 = €462.50
   └ Labor: €125 · Materials: €337.50

2. Wall painting ✓
   60 m² × €8.20 = €492.00
   └ Labor: €312 · Materials: €180

3. Ceiling plasterboard ✓
   25 m² × €32.00 = €800.00
   └ Labor: €425 · Materials: €375

4. Electrical outlets ✓
   3 pcs × €45.00 = €135.00
   └ Labor: €95 · Materials: €40

─────────────────────
Total: €1,889.50

[↓ Excel] [↓ PDF] [↻ Restart]
```

## Notes & Tips

- **First run:** Ensure Qdrant has DDC CWICR data loaded before testing
- **Rate accuracy:** Results depend on query quality; AI reranking improves matching
- **Large lists:** Bot handles 50+ items; progress shown per-item
- **Customization:** Edit `Config` node for UI text, currencies, database mapping
- **Extend:** Chain with your CRM, project management, or reporting tools

## Categories

`AI` · `Data Extraction` · `Communication` · `Files & Storage`

## Tags

`telegram-bot`, `construction`, `cost-estimation`, `qdrant`, `vector-search`, `openai`, `multilingual`, `bim`, `cad`

---

## Author

**DataDrivenConstruction.io**  
[https://DataDrivenConstruction.io](https://DataDrivenConstruction.io)  
[info@datadrivenconstruction.io](mailto:info@datadrivenconstruction.io)

## Consulting & Training

We help construction, engineering, and technology firms implement:
- Open data principles for construction
- CAD/BIM processing automation
- AI-powered estimation pipelines
- ETL workflows for construction databases

**Contact us** to test with your data or adapt to your project requirements.

## Resources

- **DDC CWICR Database:** [GitHub](https://github.com/datadrivenconstruction/OpenConstructionEstimate-DDC-CWICR)
- **Qdrant Setup Guide:** [qdrant.tech/documentation](https://qdrant.tech/documentation/)
- **n8n AI Nodes:** [docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain](https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain/)

---

⭐ **Star us on GitHub!** [github.com/datadrivenconstruction/DDC-CWICR](https://github.com/datadrivenconstruction/OpenConstructionEstimate-DDC-CWICR)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Basic LLM Chain, Anthropic Chat Model, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
