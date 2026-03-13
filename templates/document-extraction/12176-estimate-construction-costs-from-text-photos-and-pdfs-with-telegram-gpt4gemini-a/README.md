# 🔬 Estimate construction costs from text, photos and PDFs with Telegram, GPT‑4/Gemini and DDC CWICR

> ⚡ **169 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

A **full-featured Telegram bot** that accepts **text descriptions**, **photos**, or **PDF floor plans** and returns detailed **cost estimates** with work breakdown. Powered by **GPT-4 Vision / Gemini 2.0**, vector search, and the open-source **DDC CWICR** database (55,000+ construction rates).

## Who's it for

- **Contractors & Estimators** who need estimates from any input format
- **Construction managers** evaluating scope from site photos or drawings
- **Architects** getting quick cost feedback on floor plans
- **Real estate professionals** assessing renovation costs
- **Project managers** doing rapid feasibility checks via mobile

## What it does

1. **Receives** text / photo / PDF via Telegram
2. **Analyzes** input with AI (Gemini 2.0 Flash or GPT-4 Vision)
3. **Extracts** work items with quantities and units
4. **Searches** DDC CWICR vector database for matching rates
5. **Generates** professional HTML report with full cost breakdown
6. **Exports** results as Excel or PDF

**Supports 9 languages:** 🇩🇪 DE · 🇬🇧 EN · 🇷🇺 RU · 🇪🇸 ES · 🇫🇷 FR · 🇮🇹 IT · 🇵🇱 PL · 🇧🇷 PT · 🇺🇦 UK

## How it works

```
┌─────────────────────────────────────────────────────────────────────┐
│                        TELEGRAM INPUT                                │
│  📝 Text Description  │  📷 Construction Photo  │  📄 PDF Floor Plan │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│                         MAIN ROUTER                                  │
│  Parse message → Detect content type → Route to handler (17 actions) │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
         ┌──────────────────────────┼──────────────────────────┐
         ↓                          ↓                          ↓
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Text LLM       │     │  Vision API     │     │  Vision PDF     │
│  Parse works    │     │  Analyze photo  │     │  Read floor plan│
│  from text      │     │  GPT-4/Gemini   │     │  Gemini 2.0     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         └──────────────────────────┼──────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│                    CALCULATION LOOP                                  │
│  For each work item:                                                 │
│  1️⃣ Transform query → 2️⃣ Optimize search → 3️⃣ Get embedding         │
│  4️⃣ Qdrant search → 5️⃣ Score results → 6️⃣ AI rerank → 7️⃣ Calculate  │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│                      OUTPUT                                          │
│  📊 Telegram message  │  🌐 HTML Report  │  📑 Excel  │  📄 PDF      │
└─────────────────────────────────────────────────────────────────────┘
```

## Input Types

| Type | Description | AI Used |
|------|-------------|---------|
| 📝 **Text** | Work lists, specifications, notes | OpenAI GPT-4 |
| 📷 **Photo** | Construction site photos (up to 4) | GPT-4 Vision / Gemini |
| 📄 **PDF** | Floor plans, architectural drawings | Gemini 2.0 Flash |

## Route Actions (17 total)

| # | Action | Description |
|---|--------|-------------|
| 0 | show_lang | Language selection menu |
| 1 | ask_photo | Request photo upload |
| 2 | lang_selected | Save language preference |
| 3 | show_analyze | Photo analysis options |
| 4 | analyze | Run AI vision analysis |
| 5 | show_edit_menu | Edit work quantities |
| 6 | works_updated | After quantity change |
| 7 | ask_new_work | Add manual work item |
| 8 | start_calc | Start cost calculation |
| 9 | show_help | Display help message |
| 10 | view_details | Show resource details |
| 11 | export_excel | Generate CSV export |
| 12 | export_pdf | Generate PDF export |
| 13 | process_pdf | Analyze PDF floor plan |
| 14 | analyze_text | Parse text description |
| 15 | refine | Re-analyze with context |
| 16 | fallback | Handle unknown input |

## Prerequisites

| Component | Requirement |
|-----------|-------------|
| **n8n** | v1.30+ with Telegram Trigger |
| **Telegram Bot** | Token from @BotFather |
| **OpenAI API** | For embeddings + text parsing |
| **Gemini API** | For Vision (photos/PDF) — or use GPT-4 Vision |
| **Qdrant** | Vector DB with DDC CWICR collections |
| **DDC CWICR Data** | [github.com/datadrivenconstruction/DDC-CWICR](https://github.com/datadrivenconstruction/OpenConstructionEstimate-DDC-CWICR) |

## Setup

### 1. Configure 🔑 TOKEN Node
```json
{
  "bot_token": "YOUR_TELEGRAM_BOT_TOKEN",
  "AI_PROVIDER": "gemini",
  "GEMINI_API_KEY": "YOUR_GEMINI_KEY",
  "OPENAI_API_KEY": "YOUR_OPENAI_KEY",
  "QDRANT_URL": "http://localhost:6333",
  "QDRANT_API_KEY": "YOUR_QDRANT_KEY"
}
```

### 2. Vision Provider Selection
- `AI_PROVIDER: "gemini"` → Gemini 2.0 Flash (recommended for photos + PDF)
- `AI_PROVIDER: "openai"` → GPT-4 Vision (photos only)

### 3. n8n Credentials
1. **Settings** → **Credentials** → **Add** → **Telegram API**
2. Enter bot token, save
3. Select credential in **Telegram Trigger** node

### 4. Qdrant Collections
Load DDC CWICR embeddings for target languages (example for Russian):
```
RU_STPETERSBURG_workitems_costs_resources_EMBEDDINGS_3072_DDC_CWICR
```

### 5. Activate & Test
1. Activate workflow
2. Send `/start` to your bot
3. Select language → send photo/text/PDF

## Features

| Feature | Description |
|---------|-------------|
| 📷 **Photo Analysis** | GPT-4 Vision or Gemini 2.0 for site photos |
| 📄 **PDF Processing** | Floor plan analysis with room extraction |
| 📝 **Text Parsing** | Natural language work lists |
| 🔍 **Vector Search** | Semantic matching via Qdrant + OpenAI embeddings |
| 🤖 **AI Reranking** | LLM-based result scoring for accuracy |
| ✏️ **Inline Editing** | Modify quantities via Telegram buttons |
| 📊 **HTML Report** | Professional expandable report with KPIs |
| 📑 **Excel Export** | CSV with full work breakdown |
| 📄 **PDF Export** | HTML-based PDF document |
| 🌍 **9 Languages** | Full UI + database localization |
| 💾 **Session State** | Multi-turn conversation support |
| 🔧 **Refine Mode** | Re-analyze with additional context |

## Example Workflow

**User:** `/start`  
**Bot:** Language selection menu (9 options)

**User:** Selects 🇷🇺 Russian  
**Bot:** "Отправьте фото, PDF или текстовое описание работ"

**User:** Sends bathroom photo  
**Bot:** "📷 Анализ фото... ⏳"

**Bot:** Shows detected works:
```
🏠 Ванная комната — 4.5 m²

Найдено 12 работ:
1. Демонтаж плитки стен — 18 m²
2. Демонтаж плитки пола — 4.5 m²
3. Гидроизоляция пола — 4.5 m²
4. Гидроизоляция стен — 8 m²
5. Стяжка пола — 4.5 m²
6. Укладка плитки стены — 18 m²
7. Укладка плитки пол — 4.5 m²
8. Установка унитаза — 1 шт
9. Установка раковины — 1 шт
10. Установка смесителя — 2 шт
...

[✏️ Редактировать] [📊 Рассчитать]
```

**User:** Taps 📊 Calculate  
**Bot:** Shows progress per item, then final result:

```
✅ Смета готова — 12 позиций

💰 Итого: ₽ 89,450

Работа: ₽ 35,200 (39%)
Материалы: ₽ 48,750 (55%)
Механизмы: ₽ 5,500 (6%)

[📋 Детали] [↓ Excel] [↓ PDF] [↻ Заново]
```

## HTML Report Features

- **KPI Cards:** Total cost, item count, labor days, cost breakdown %
- **Expandable rows:** Click work item to show resources
- **Resource tags:** Color-coded (Labor/Material/Machine)
- **Scope of work:** Expandable detailed descriptions
- **Quality indicators:** Match quality dots (high/medium/low)
- **Responsive design:** Works on mobile and desktop
- **Export buttons:** Expand/Collapse all

## Notes & Tips

- **Photo tips:** Capture full room, include reference objects (doors, tiles)
- **PDF support:** Works best with clear floor plans and room schedules
- **Text input:** Supports lists, tables, free-form descriptions
- **Rate accuracy:** Depends on DDC CWICR coverage for your region
- **Session timeout:** User sessions persist across messages
- **Extend:** Chain with CRM, project management, or notification tools

## Categories

`AI` · `Communication` · `Data Extraction` · `Document Ops`

## Tags

`telegram-bot`, `construction`, `cost-estimation`, `gpt-4-vision`, `gemini`, `pdf-analysis`, `qdrant`, `vector-search`, `multilingual`, `html-report`

---

## Author

**DataDrivenConstruction.io**  
[https://DataDrivenConstruction.io](https://DataDrivenConstruction.io)  
[info@datadrivenconstruction.io](mailto:info@datadrivenconstruction.io)

## Consulting & Training

We help construction, engineering, and technology firms implement:
- AI-powered estimation systems (text, photo, PDF)
- Multi-channel bot integrations (Telegram, WhatsApp, Web)
- Vector database solutions for construction data
- Multilingual cost database deployment

**Contact us** to test with your data or adapt to your project requirements.

## Resources

- **DDC CWICR Database:** [GitHub](https://github.com/datadrivenconstruction/OpenConstructionEstimate-DDC-CWICR)
- **Qdrant Documentation:** [qdrant.tech/documentation](https://qdrant.tech/documentation/)
- **Gemini API:** [aistudio.google.com](https://aistudio.google.com/)
- **n8n Telegram Trigger:** [docs.n8n.io](https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.telegramtrigger/)

---

⭐ **Star us on GitHub!** [github.com/datadrivenconstruction/DDC-CWICR](https://github.com/datadrivenconstruction/OpenConstructionEstimate-DDC-CWICR)

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
