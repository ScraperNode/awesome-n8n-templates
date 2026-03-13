# 🔬 Generate photo-based construction cost estimates with GPT-4 Vision and DDC CWICR

> ⚡ **38 views** · 🔬 [Document Extraction & Analysis](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Upload a **construction photo** via web form → get a detailed **cost estimate** with work breakdown, resource costs, and professional HTML report. Powered by **GPT-4 Vision** and the open-source **DDC CWICR** database (55,000+ work items).

## Who's it for

- **Site managers** who need quick estimates from mobile photos
- **Renovation contractors** evaluating project scope from initial site visit
- **Real estate inspectors** estimating repair costs
- **Construction consultants** providing rapid ballpark figures
- **DIY enthusiasts** planning home improvement budgets

## What it does

1. **Collects** photo + region/language via n8n Form
2. **Analyzes** photo with GPT-4 Vision (room type, elements, dimensions)
3. **Decomposes** visible elements into construction work items
4. **Searches** DDC CWICR vector database for matching rates
5. **Generates** professional HTML report with cost breakdown

**Supports 9 regions:** 🇩🇪 Berlin · 🇬🇧 Toronto · 🇷🇺 St. Petersburg · 🇪🇸 Barcelona · 🇫🇷 Paris · 🇧🇷 São Paulo · 🇨🇳 Shanghai · 🇦🇪 Dubai · 🇮🇳 Mumbai

## How it works

```
┌──────────────┐    ┌───────────────┐    ┌───────────────┐    ┌──────────────┐
│  Web Form    │ →  │  STAGE 1      │ →  │  STAGE 4      │ →  │  Loop Works  │
│  Photo+Lang  │    │  GPT-4 Vision │    │  Decompose    │    │  per item    │
└──────────────┘    └───────────────┘    └───────────────┘    └──────────────┘
                           ↓                     ↓                    ↓
                    ┌─────────────────────────────────────────────────────┐
                    │  Identify room, elements, fixtures, dimensions      │
                    │  → Break down into 15-40 construction work items    │
                    └─────────────────────────────────────────────────────┘
                                                                     ↓
┌──────────────┐    ┌───────────────┐    ┌───────────────┐    ┌──────────────┐
│  HTML Report │ ←  │  STAGE 7.5    │ ←  │  STAGE 5      │ ←  │  Qdrant      │
│  Response    │    │  Aggregate    │    │  Parse+Score  │    │  Vector DB   │
└──────────────┘    └───────────────┘    └───────────────┘    └──────────────┘
```

**Pipeline stages:**

| Stage | Node | Description |
|-------|------|-------------|
| 1 | GPT-4 Vision | Analyzes photo: room type, elements, materials, dimensions |
| 4 | GPT-4 Decompose | Breaks elements into work items with quantities |
| 5 | Vector Search + Score | Finds matching rates in DDC CWICR, quality scoring |
| 7.5 | Aggregate & Validate | Sums costs, groups by phase, validates results |
| 9 | HTML Report | Generates professional estimate document |

## Prerequisites

| Component | Requirement |
|-----------|-------------|
| **n8n** | v1.30+ with Form Trigger support |
| **OpenAI API** | GPT-4 Vision + Embeddings access |
| **Qdrant** | Vector DB with DDC CWICR collections |
| **DDC CWICR Data** | [github.com/datadrivenconstruction/DDC-CWICR](https://github.com/datadrivenconstruction/OpenConstructionEstimate-DDC-CWICR) |

## Setup

### 1. n8n Credentials (Settings → Credentials)
- **OpenAI API** — required (GPT-4 Vision + text-embedding-3-large)
- **Qdrant API** — your Qdrant instance connection

### 2. Qdrant Collections
Load DDC CWICR embeddings for your target regions:
```
DE_BERLIN_workitems_costs_resources_EMBEDDINGS_3072_DDC_CWICR
ENG_TORONTO_workitems_costs_resources_EMBEDDINGS_3072_DDC_CWICR
RU_STPETERSBURG_workitems_costs_resources_EMBEDDINGS_3072_DDC_CWICR
ES_BARCELONA_workitems_costs_resources_EMBEDDINGS_3072_DDC_CWICR
FR_PARIS_workitems_costs_resources_EMBEDDINGS_3072_DDC_CWICR
PT_SAOPAULO_workitems_costs_resources_EMBEDDINGS_3072_DDC_CWICR
ZH_SHANGHAI_workitems_costs_resources_EMBEDDINGS_3072_DDC_CWICR
AR_DUBAI_workitems_costs_resources_EMBEDDINGS_3072_DDC_CWICR
HI_MUMBAI_workitems_costs_resources_EMBEDDINGS_3072_DDC_CWICR
```

### 3. Activate Workflow
1. Import JSON into n8n
2. Link OpenAI + Qdrant credentials to respective nodes
3. Activate workflow
4. Access form at: `https://your-n8n/form/photo-estimate-pro-v3`

## Features

| Feature | Description |
|---------|-------------|
| 📸 **Photo Analysis** | GPT-4 Vision identifies room type, elements, fixtures |
| 📏 **Dimension Estimation** | Uses reference objects (doors, tiles) for sizing |
| 🔧 **Work Decomposition** | Breaks down to 15-40 specific work items |
| 🎯 **Quality Scoring** | Rates match quality (high/medium/low/not_found) |
| 📊 **Phase Grouping** | PREPARATION → MAIN → FINISHING → MEP |
| 💰 **Cost Breakdown** | Labor, materials, machines per item |
| ✅ **Validation** | Warns if &lt;50% rates found or missing demolition |
| 🌍 **9 Languages** | Full localization + regional pricing |

## Form Fields

| Field | Type | Options |
|-------|------|---------|
| 📷 Upload Photo | File | .jpg, .png, .webp |
| 🌍 Region & Language | Dropdown | 9 regions with currencies |
| 🏗️ Work Type | Dropdown | New / Renovation / Repair / Auto |
| 📝 Description | Textarea | Optional context |

## Example Output

**Input:** Bathroom photo (renovation)  
**Region:** 🇩🇪 German - Berlin (EUR €)

**Generated Work Items:**
```
PREPARATION (3 items)
├── Demolition of wall tiles — 12 m² — €180
├── Demolition of floor tiles — 4.5 m² — €95
└── Disposal of construction waste — 0.8 m³ — €120

MAIN (8 items)
├── Floor waterproofing — 4.5 m² — €225
├── Wall waterproofing wet zone — 8 m² — €280
├── Floor screed — 4.5 m² — €135
├── Wall tiling — 22 m² — €880
├── Floor tiling — 4.5 m² — €225
├── Toilet installation — 1 pcs — €320
├── Sink installation — 1 pcs — €185
└── Shower cabin installation — 1 pcs — €450

FINISHING (3 items)
├── Ceiling painting — 4.5 m² — €68
├── Grouting — 26.5 m² — €133
└── Silicone sealing — 8 m — €48

MEP (4 items)
├── Socket installation — 2 pcs — €90
├── Light point installation — 2 pcs — €120
├── Mixer/faucet installation — 2 pcs — €160
└── Ventilation installation — 1 pcs — €85

─────────────────────────────────────
TOTAL: €3,799.00
Labor: €1,520 · Materials: €1,900 · Machines: €379
Quality: 78% high match · 18 work items
```

## Quality Scoring System

| Score | Level | Meaning |
|-------|-------|---------|
| 60-100 | 🟢 High | Exact match with resources |
| 40-59 | 🟡 Medium | Good match, minor differences |
| 20-39 | 🟠 Low | Partial match, review needed |
| 0-19 | 🔴 Not Found | No suitable rate found |

**Scoring factors:**
- Has price in database (+30)
- Has resources breakdown (+25)
- Unit matches expected (+20)
- Material keywords match (+15)
- Work type keywords match (+10)
- Vector similarity &gt;0.5 (+10)

## Notes & Tips

- **Best photo angles:** Capture full room, include reference objects (doors, sockets)
- **Renovation mode:** AI automatically adds demolition works
- **Validation warnings:** Check if &lt;50% rates found — may need manual additions
- **Rate accuracy:** Depends on DDC CWICR coverage for your region
- **Extend:** Chain with PDF generation, email delivery, or CRM integration

## Categories

`AI` · `Data Extraction` · `Document Ops` · `Files & Storage`

## Tags

`photo-analysis`, `gpt-4-vision`, `construction`, `cost-estimation`, `qdrant`, `vector-search`, `form-trigger`, `html-report`, `multilingual`

---

## Author

**DataDrivenConstruction.io**  
[https://DataDrivenConstruction.io](https://DataDrivenConstruction.io)  
[info@datadrivenconstruction.io](mailto:info@datadrivenconstruction.io)

## Consulting & Training

We help construction, engineering, and technology firms implement:
- AI-powered visual estimation systems
- CAD/BIM data processing pipelines
- Vector database integration for construction data
- Multilingual cost database solutions

**Contact us** to test with your data or adapt to your project requirements.

## Resources

- **DDC CWICR Database:** [GitHub](https://github.com/datadrivenconstruction/OpenConstructionEstimate-DDC-CWICR)
- **Qdrant Documentation:** [qdrant.tech/documentation](https://qdrant.tech/documentation/)
- **n8n Form Trigger:** [docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.formtrigger](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.formtrigger/)

---

⭐ **Star us on GitHub!** [github.com/datadrivenconstruction/DDC-CWICR](https://github.com/datadrivenconstruction/OpenConstructionEstimate-DDC-CWICR)

## 🔗 Nodes Used

Basic LLM Chain, Embeddings OpenAI, OpenAI Chat Model, n8n Form Trigger, Qdrant Vector Store

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
