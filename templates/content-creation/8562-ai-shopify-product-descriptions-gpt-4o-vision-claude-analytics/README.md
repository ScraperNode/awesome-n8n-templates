# 🎬 AI Shopify product descriptions: GPT-4o Vision + Claude + Analytics

> ⚡ **1,228 views** · 🎬 [Content Creation & Video](../)

## Description

# Complete AI Product Description Generator
## Transforms product images into high-converting copy with GPT-4o Vision + Claude 3.5
The Shopify AI Product Description Factory is a **production-grade n8n workflow** that converts product images and metadata into refined, SEO-aware descriptions—fully automated and region-agnostic. It blends GPT-4o vision for visible attribute extraction, Claude 3.5 Sonnet for premium copy, Perplexity research for verified brand context, Google Sheets for orchestration and audit trails, **plus automated daily sales analytics enrichment**. Link-header pagination and structured output enforcement ensure reliable scale.

![generatedimage 3.png](fileId:2627)

*To refine according to your usecase connect via my profile*
[@connect](https://kumarshivam.link/)

## Key Advantages

### Vision-first copywriting
Uses **gpt-4o** to identify only visible physical attributes (closure, heel, materials, sole) from product images—no guesses.

### Premium copy generation
**anthropic/claude-3.5-sonnet** crafts concise, benefit-led descriptions with consistent tone, length control, and clean formatting.

### Research-assisted accuracy
**perplexityTool** verifies vendor/brand context from official sources to avoid speculation or fabricated claims.

### Pagination you can trust
Automates Shopify REST pagination via Link headers and persists `page_info` for resumable runs.

### Google Sheets orchestration
Centralized staging, status tracking, and QA in Products, with ProcessingState for batch/page markers, and Error_log for diagnostics.

### Bulletproof error feedback
**errorTrigger + AI diagnosis** logs clear, non-technical and technical explanations to Error_log for fast recovery.

### Automated sales analytics
**Daily sales tracking** automatically captures and enriches total sales data for comprehensive business intelligence and performance monitoring.

## How It Works

### Intake and filtering
- `httpRequest` fetches `/admin/api/2024-04/products.json?limit=200&{page_info}`
- `code` filters only items with:
  - Image present
  - Empty `body_html`
  - The `currSeas:SS2025` tag
- Extracts tag metadata such as `x-styleCode`, `country_of_origin`, and `gender` when available

### Pagination controller
- `code` parses Link headers for `rel="next"` and extracts `page_info`
- `googleSheets` updates ProcessingState with `page_info_next` and increments the batch number for resumable polling

### Generation pipeline
- `googleSheets` pulls rows with Status = Ready for AI Description; limit throttles batch size
- `openAi` Analyze image (model **gpt-4o**) returns strictly visible features
- `lmChatOpenRouter` (**Claude 3.5**) composes the SEO description, optionally blending verified vendor context from `perplexityTool`
- `outputParserStructured` guarantees strict JSON: `product_id`, `product_title` (normalized), `generated_description`, `status`
- `googleSheets` writes results back to Products for review/publish

### Sales analytics enrichment
- **Schedule Trigger** runs daily at 2:01 PM to capture previous day's sales
- `httpRequest` fetches paid orders from Shopify REST API with date range filtering
- `splitOut` and `summarize` nodes calculate total daily sales
- Automatic Google Sheets logging with date stamps and totals
- Zero-sale days are properly recorded for complete analytics continuity

### Reliability and insight
`errorTrigger` routes failures to an AI agent that explains the root cause and appends a concise note to Error_log.

## What's Inside (Node Map)

### Data + API
- `httpRequest` (Shopify REST 2024-04 for products and orders)
- `googleSheets` (multiple sheet operations)
- `googleSheetsTool` (error logging)

### AI models
- `openAi` (gpt-4o vision analysis)
- `lmChatOpenRouter` (anthropic/claude-3.5-sonnet for content generation)
- **AI Agent** (intelligent error diagnosis)

### Analytics & Processing
- `splitOut` (order data processing)
- `summarize` (sales totals calculation)
- `set` nodes (data field mapping)

### Tools and guards
- `perplexityTool` (brand research)
- `outputParserStructured` (JSON validation)
- `memoryBufferWindow` (conversation context)

### Control & Scheduling
- `scheduleTrigger` (multiple time-based triggers)
- `cron` (periodic execution)
- `limit` (batch size control)
- `if` (conditional logic)
- `code` (custom filtering and pagination logic)

### Observability
- `errorTrigger` + AI diagnosis to Error_log
- Processing state tracking
- Sales analytics logging

## Content & Compliance Rules

- **Locale-agnostic copy**; brand voice is configurable per store
- **Only image-verifiable attributes** (no guesses); clean HTML suitable for Shopify themes
- Optional normalization rules (e.g., color/branding cleanup, title sanitization)
- Style code inclusion supported when `x-styleCode` is present
- Gender-aware content generation when `gender` tag is present
- **Strict JSON output** and schema consistency for safe downstream publishing

## Setup Steps

### Core integrations
- **Shopify Access Token** — Products read + Orders read (REST 2024-04)
- **OpenAI API** — gpt-4o vision
- **OpenRouter API** — Claude Sonnet (3.5)
- **Perplexity API** — vendor/market verification via perplexityTool
- **Google Sheets OAuth** — Products, ProcessingState, Error_log, Sales analytics

### Configure sheets
- **ProcessingState** with fields:
  - batch number
  - `page_info_next`
- **Products** with:
  - Product ID
  - Product Title
  - Product Type
  - Vendor
  - Image url
  - Status
  - country of origin
  - x_style_code
  - gender
  - Generated Description
- **Error_log** with:
  - timestamp
  - Reason of Error
- **Sales Analytics Sheet** with:
  - Date
  - Total Sales

## Workflow Capabilities

### Discovery and staging
Auto-paginate Shopify; stage eligible products in Sheets with reasons and timestamps.

### Vision-grounded copywriting
Descriptions reflect only visible attributes plus verified brand context; concise, mobile-friendly structure with gender-aware tone.

### Metadata awareness
Auto-injects `x-styleCode`, `country_of_origin`, and `gender` when present; natural SEO for brand and product type.

### Sales intelligence
**Automated daily sales tracking** with Melbourne timezone support, handles zero-sale days, and maintains complete historical records.

### Error analytics
Layman + technical diagnosis logged to Error_log to shorten MTTR.

### Safe output
Structured JSON via `outputParserStructured` for predictable row updates.

## Credentials Required

- **Shopify Access Token** (Products + Orders read permissions)
- **OpenAI API Key** (GPT-4o vision)
- **OpenRouter API Key** (Claude Sonnet)
- **Perplexity API Key**
- **Google Sheets OAuth**

## Ideal For

- **E-commerce teams** scaling compliant, on-brand product copy with comprehensive sales insights
- **Agencies and SEO specialists** standardizing image-grounded descriptions with performance tracking and analytics
- **Stores** needing resumable pagination, auditable content operations, and automated daily sales reporting in Sheets

## Advanced Features

- **Dual-workflow architecture**: Content generation + Sales analytics in one system
- Link-header pagination with `page_info` persistence in ProcessingState
- Title/content normalization (e.g., color removal) configurable per brand
- **Gender-aware copywriting** based on product tags
- Memory windows (`memoryBufferWindow`) to keep multi-step prompts consistent
- **Melbourne timezone support** for accurate daily sales cutoffs
- **Zero-sales handling** ensures complete analytics continuity
- Structured Output enforcement for downstream safety
- **AI-powered error diagnosis** with technical and layman explanations

## Time & Scheduling (Universal)

The workflow includes **two independent schedules**:
- **Content Generation**: Every 5 minutes (configurable) for product processing
- **Sales Analytics**: Daily at 2:01 PM Melbourne time for previous day's sales

For globally distributed teams, schedule triggers and timestamps can be standardized on UTC to avoid regional drift.

## Pro Tip

Start with small batches (`limit` set to 10 or fewer) to validate both copy generation and sales tracking flows. The workflow handles **dual operations** independently - content generation failures won't affect sales analytics and vice versa. Monitor the Error_log sheet for any issues and use the ProcessingState sheet to track pagination progress.

## 🔗 Nodes Used

Cron, Google Sheets, HTTP Request, Schedule Trigger, AI Agent, Simple Memory

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
