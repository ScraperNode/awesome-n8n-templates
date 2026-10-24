# 🎬 Generate and push AI SEO product content to PrestaShop with Google Gemini and Sheets

> ⚡ **205 views** · 🎬 [Content Creation & Video](../)

## Description

## Who Is This For?

This workflow is built for PrestaShop store owners, eCommerce managers, and digital agencies who need to bulk-generate professional, SEO-optimized product content in Spanish or any other language — without writing a single word manually.

---

## What Problem Does It Solve?

Writing titles, descriptions, meta tags, and SEO slugs for hundreds of products is one of the most time-consuming tasks in eCommerce. This workflow automates the entire process using an AI Agent powered by Google Gemini, pulling real product data from the web and pushing it directly into PrestaShop via the REST API.

---

## How It Works

1. Reads unprocessed products from a Google Sheet filtered by an "Updated" status column
2. Limits to 50 products per run to stay within API rate limits
3. Extracts the PrestaShop Product ID from each product URL using regex
4. Loops through products one at a time
5. AI Agent researches the product online using trusted Spanish pharmacy sources and generates Title, Short Description, Long Description in HTML, Meta Title, Meta Description, and SEO-friendly URL Slug — all in Spanish
6. Structured Output Parser enforces clean JSON output every single time — no fragile regex parsing
7. Sends a PATCH request to the PrestaShop Admin API to update the product
8. Logs the result back to Google Sheets and marks the row as Updated
9. Waits 8 seconds between each product to respect API rate limits

---

## What You Need to Set Up

- [ ] Google Sheets OAuth2 credential
- [ ] Google Gemini API credential
- [ ] PrestaShop Bearer API token — paste into the **Arrange Data** node
- [ ] A Google Sheet with these columns: `Address` | `Previous Title` | `Title` | `Short Description` | `Long Description` | `Meta Title` | `Meta Description` | `Slug` | `Update`

---

## Nodes Used

Google Sheets, AI Agent, Google Gemini Chat Model, Structured Output Parser, HTTP Request, Loop Over Items, Code, Filter, Limit, Wait, Set

---

## 📩 Support & Contact

* 📧 Email: salmanmehboob1947@gmail.com
* 💼 LinkedIn: [Salman Mehboob](https://www.linkedin.com/in/salman-mehboob-pro/)

## 🔗 Nodes Used

Google Sheets, HTTP Request, Filter, AI Agent, Structured Output Parser, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
