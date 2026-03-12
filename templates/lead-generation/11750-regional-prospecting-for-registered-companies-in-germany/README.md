# 🎣 Regional prospecting for registered companies in Germany

> ⚡ **93 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

# Regional Prospecting for registered Companies in Germany

Find and qualify registered companies in specific regions using Implisense Search API (Handelsregister). This API provides all officially registered companies in Germany (about 2,5 million).

**Input Parameters:**
- `query`: Search terms (e.g., "software OR it")
- `regionCode`: ZIP/postal code region (e.g., "de-10")
- `industryCode`: NACE industry code (e.g., "J62")
- `pageSize`: Max results (1-1000)

**Quality Levels:**
- **High:** Score ≥15 (active, website, full address)
- **Medium:** Score &lt;15

## How it works

Phase 1: Init
Phase 2: Search
Phase 3: Vetting

## Setup steps

### 1.  **Configure Credentials**: Set up RapidAPI API credentials
   - Create an account on RapidAPI  (free tier available)
   - Insert your RapidAPI x-rapidapi-key as password

### 2. Configure Search Parameters
see above.

### 3. Connect CRM/Database
After "Merge & Log Results" node, add:
- HTTP Request node for REST API
- Database node for direct insertion
- Or CRM-specific integration node

## 🔗 Nodes Used

HTTP Request

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
