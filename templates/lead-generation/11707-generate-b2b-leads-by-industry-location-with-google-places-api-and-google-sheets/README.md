# 🎣 Generate B2B leads by industry & location with Google Places API and Google Sheets

> ⚡ **635 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.

## Description

**How it works**
1. A form trigger accepts an Industry + Location query (e.g. Accountants London).
2. Text Search Page 1 calls Google Places Text Search to return results and a next_page_token.
3. Conditional checks + 5s wait nodes fetch page 2 and page 3 when a next page exists.
4. All pages are merged, split into individual place results, and each place_id is passed to Place Details.
5. Place Details returns name, formatted_phone_number, website, formatted_address.
6. Results are formatted and appended to a Google Sheet.

**Setup steps**
- Enable Google Cloud project billing and Places API (Text Search + Details).
- Create an API key and add it to the three Text Search and Place Details HTTP request nodes (&lt;YOUR KEY&gt;).
- Add Google Sheets OAuth credentials to the Google Sheets node.
- Create a Google Sheet with columns: Company Name, Phone Number, Website, Address
- Update the Google Sheets node documentId and sheetName to your spreadsheet.
- Import/paste this workflow into n8n and test with a small query.

**Customization**
- Edit Place Details fields to retrieve more/less info (address_components, opening_hours, etc.).
- Adjust the number of pages fetched (workflow currently supports up to 3 pages).
- Alter output mapping in the code node to add/remove columns or change column order.
- Add further nodes after the sheet (e.g., email scraper/ sender, CRM integration, enrichment API)

**Use cases**
- B2B lead generation for targeted industries and locations.
- Building outreach lists for sales teams and agencies.
- Enriching CRM with phone, website, and address data from Google Places.
- Rapid market mapping for local competitors, vendors, or partners.

**Troubleshooting tips**
- No results / invalid API key: verify API key is correct, not restricted incorrectly, and Places API is enabled.
- next_page_token not working: the token can take a couple of seconds to activate. Keep the 5s wait nodes; if still failing, increase to ~10s+
- Quota / billing errors: confirm billing is enabled on the Google Cloud project and check your Places API quota.
- Missing phone/website: not all places provide all fields; fallback handling is already included (nulls).
- Duplicates in Sheets: run tests on small queries and inspect the Merge/Split logic; add a dedupe step before appending if needed.
- Place Details rate limits: if you plan high volume, throttle requests or add longer waits to avoid quota/rate-limit errors.
- Permissions / OAuth: ensure the Google Sheets OAuth user has edit access to the target spreadsheet.

## 🔗 Nodes Used

Google Sheets, HTTP Request, n8n Form Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
