# 📊 Scrape, search and browse the web with a Firecrawl AI agent webhook

> ⚡ **4,096 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

Turn any prompt into structured web data. Send a POST request with a natural language prompt and an optional JSON schema, and get back clean, structured results scraped from the web by an AI agent powered by Firecrawl.

## Use Cases

- **Data Enrichment**: Feed company names or URLs from your CRM and get back structured firmographic data (industry, funding, team size, tech stack).
- **Lead Generation**: Ask the agent to find pricing, contact pages, or product details for a list of competitors.
- **Market Research**: Extract structured pricing plans, feature comparisons, or product catalogs from any website.
- **Content Aggregation**: Pull structured news, events, or job postings from across the web on a schedule.
- **Sales Intelligence**: Enrich prospect lists with company info, recent news, or tech stack details before outreach.

## How It Works

```
POST /webhook/scrape-agent
```

1. **Receive Scrape Request** receives a POST request with `prompt` and an optional `output_schema`.
2. **Validate Output Schema** checks the schema. If none is provided, it falls back to a permissive default. If the schema is malformed, it returns a clear error via **Return Schema Error**.
3. **Research & Extract Web Data** takes the prompt and uses the full Firecrawl toolkit to research the web:
   - **Search** (`/search`): Finds relevant pages and sources across the web.
   - **Scrape** (`/scrape`): Extracts clean, structured content from any URL.
   - **Interact** (interactContext, interact, interactStop): Lets the agent interact with scraped pages in a live session. After scraping a page, the agent can click buttons, fill forms, navigate dynamic content, and extract data that static scraping cannot reach, all without managing sessions manually.
   
   This combination gives the AI agent complete web navigation capabilities. It can discover sources, read pages, and interact with dynamic content autonomously.
4. **Format Response to Schema** (Structured Output Parser) formats the agent's response to match the provided (or default) schema.
5. **Return Structured Results** sends the structured JSON back to the caller.

## Setup Requirements

- **Firecrawl API Key**: Sign up at [firecrawl.dev](https://www.firecrawl.dev) and grab your API key. Connect it in the Firecrawl credential nodes.
- **LLM Provider**: Configure your Primary Chat Model and Fallback Chat Model nodes (e.g., OpenRouter, OpenAI, Anthropic). The template uses two model nodes for reliability, plus a separate Parser Chat Model for the output parser.
- **n8n Instance**: Self-hosted or cloud. Make sure the webhook node is set to accept POST requests.

## API Reference

### Endpoint

```
POST https://your-n8n-instance/webhook/scrape-agent
```

### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `prompt` | string | Yes | Natural language instruction for the agent |
| `output_schema` | object | No | JSON Schema defining the desired output structure |

### Response

Returns a JSON object matching the provided schema, or a flexible object if no schema was given.

---

## Testing Examples

### 1. Basic Request (No Schema)

The agent decides the output structure on its own.

```bash
curl -X POST "https://your-n8n-instance/webhook/scrape-agent" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Find the latest pricing for Firecrawl"
  }' | jq
```

**Expected output**: A JSON object with whatever structure the agent finds most appropriate for the data. Since no schema was provided, the internal default (`{ "type": "object", "additionalProperties": true }`) is used.

### 2. Request With a Custom Schema

You define exactly the shape of data you want back.

```bash
curl -X POST "https://your-n8n-instance/webhook/scrape-agent" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Find the latest pricing for Firecrawl",
    "output_schema": {
      "type": "object",
      "properties": {
        "source": { "type": "string" },
        "plans": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": { "type": "string" },
              "price": { "type": "string" },
              "credits": { "type": "string" },
              "highlights": {
                "type": "array",
                "items": { "type": "string" }
              }
            }
          }
        }
      }
    }
  }' | jq
```

**Expected output**:

```json
{
  "output": {
    "source": "https://www.firecrawl.dev/pricing",
    "plans": [
      {
        "name": "Free",
        "price": "$0 (one-time)",
        "credits": "500 credits (one-time)",
        "highlights": [
          "Scrape up to 500 pages",
          "2 concurrent requests",
          "Low rate limits",
          "No credit card required"
        ]
      },
      {
        "name": "Hobby",
        "price": "$16/month (billed yearly, save $38)",
        "credits": "3,000 credits / month",
        "highlights": [
          "Scrape up to 3,000 pages",
          "5 concurrent requests",
          "Basic support",
          "$9 per extra 1k credits"
        ]
      }
    ]
  }
}
```

### 3. Invalid Schema (String Instead of Object)

```bash
curl -X POST "https://your-n8n-instance/webhook/scrape-agent" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Find the latest pricing for Firecrawl",
    "output_schema": "not a valid schema"
  }' | jq
```

**Expected output**:

```json
{
  "error": true,
  "message": "Invalid output_schema: must be a JSON object with a valid 'type' property (object, array, string, number, boolean)",
  "example_schema": {
    "type": "object",
    "properties": {
      "name": { "type": "string" },
      "price": { "type": "number" }
    }
  }
}
```

### 4. Invalid Schema (Array Instead of Object)

```bash
curl -X POST "https://your-n8n-instance/webhook/scrape-agent" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Find the latest pricing for Firecrawl",
    "output_schema": [1, 2, 3]
  }' | jq
```

**Expected output**: Same error response as above.

### 5. Invalid Schema (Missing `type` Property)

```bash
curl -X POST "https://your-n8n-instance/webhook/scrape-agent" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Find the latest pricing for Firecrawl",
    "output_schema": {
      "properties": {
        "name": { "type": "string" }
      }
    }
  }' | jq
```

**Expected output**: Same error response as above.

### 6. Invalid Schema (Invalid `type` Value)

```bash
curl -X POST "https://your-n8n-instance/webhook/scrape-agent" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Find the latest pricing for Firecrawl",
    "output_schema": {
      "type": "banana"
    }
  }' | jq
```

**Expected output**: Same error response as above.

---

## Workflow Architecture

```
Receive Scrape Request (POST)
  |
  v
Validate Output Schema
  |--- Error --&gt; Return Schema Error (error JSON)
  |--- Success --&gt; Research & Extract Web Data (AI Agent)
                     |
                     |--- Primary Chat Model
                     |--- Fallback Chat Model
                     |--- Search & Scrape:
                     |      - /search with Firecrawl
                     |      - /scrape with Firecrawl
                     |--- Interact Tool:
                     |      - Interact context with Firecrawl
                     |      - Execute interaction with Firecrawl
                     |      - Stop interaction with Firecrawl
                     |
                     v
                   Return Structured Results
                     |
                     |--- Format Response to Schema (Output Parser)
                            |
                            |--- Parser Chat Model
```

## Schema Validation Logic

The **Validate Output Schema** node runs this validation before passing data to the agent:

- If `output_schema` is **missing or null**, the default permissive schema is used: `{ "type": "object", "additionalProperties": true }`.
- If `output_schema` is **present**, it must be a JSON object (not a string, array, or primitive).
- It must have a `type` property with a valid value: `object`, `array`, `string`, `number`, or `boolean`.
- If validation fails, the workflow returns an error response with a helpful message and example schema.

## Notes

- The **Format Response to Schema** node (Structured Output Parser) requires the schema to be passed as a JSON string. The expression `{{ JSON.stringify($('Validate Output Schema').item.json.output_schema) }}` handles this conversion.
- The agent has access to Firecrawl's full toolkit: search, scrape, and interact. With all three connected, the agent has complete web navigation powers. It can discover sources via search, extract content via scrape, and interact with dynamic JavaScript-heavy pages via interact. The interact tools let the agent scrape a page first and then continue working with it in a live session, clicking buttons, filling forms, and navigating deeper, all without manual session management. The agent autonomously decides which tools to use based on the prompt.
- Response times vary depending on the complexity of the prompt and how many pages the agent needs to visit. Simple lookups take a few seconds; deep research can take longer.

## 🔗 Nodes Used

Webhook, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
