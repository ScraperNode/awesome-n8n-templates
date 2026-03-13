# 🧾 Automatically create invoices from Gmail labels with GPT-4O + QuickBooks

> ⚡ **856 views** · 🧾 [Invoice Processing](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## What It Does
This workflow reads Gmail threads labeled `Invoice Needed`, extracts invoice and client details using an AI agent, and creates a draft invoice in QuickBooks Online. It then downloads the invoice as a PDF and drafts a reply email with the invoice attached — all automatically.

Perfect for freelancers, agencies, or small businesses looking to streamline client billing from email.

## Prerequisites
To use this workflow, you’ll need:

- A Gmail OAuth2 credential
- A QuickBooks OAuth2 credential
- An OpenAI credential (for AI-powered data extraction)

## How to Label Threads
- In Gmail, apply the label `Invoice Needed` to any email thread that contains details for an invoice request.
- The workflow will process only those threads.

## How It Works
1. **Trigger:** The workflow runs on a schedule (e.g., every hour)
2. **Fetch Emails:** Gmail node pulls all threads with the `Invoice Needed` label
3. **Group Messages:** Emails in each thread are grouped together
4. **AI Extraction:** An OpenAI-powered agent extracts client info, billing address, invoice amount, and description
5. **Add a New Client:** This node will attempt to create a new client in QuickBooks
6. **Find Existing Client** If the client already exists, this node will find the client's id
7. **Create Invoice:** An invoice is created based on the extracted details
8. **Download PDF:** The invoice is saved as a PDF
9. **Draft Reply:** A Gmail draft is created with a template message and the invoice attached
10. **Remove Label:** The processed thread is untagged to avoid duplicates

## Example Use Cases
- Automatically generate invoices from client emails
- Use AI to extract invoice data without manual input
- Ensure consistent and timely billing
- Create a paper trail with attached PDFs in replies
- Free up your inbox by processing and clearing labeled threads

## How to Use
- Set your schedule (e.g., every hour or more often if needed)
- Select a product in the `Create A New Invoice` node
- Ask the client to provide invoice details if needed (company name, billing address)
- Add the `Invoice Needed` label to threads manually, via a Gmail filter or via another workflow
- Review and send the drafted replies in Gmail
- Optionally, add your branding or custom template to the email message

## Optimization Instructions:
- For larger companies with frequent invoice requests, consider shortening the interval between workflow runs. This helps prevent the system from processing too many labeled threads at once, ensuring smoother performance and faster response times.

## Customization Options
- Add line multiple items based on the product or service purchased instead of a single invoice row
- Add conditional logic to skip certain threads
- Auto-send emails instead of saving drafts (after testing)
- Use custom prompts to extract additional fields

## Why It's Useful
This workflow eliminates the manual labor of crafting invoices from scratch by automating the entire process—from email to invoice. It reduces the need to switch between multiple apps, since you no longer have to open QuickBooks Online to create an invoice. By streamlining your billing workflow, it saves time, minimizes errors, and lets you stay focused on your actual work while still keeping full control over outgoing communications.

## 🔗 Nodes Used

Gmail, QuickBooks Online, Schedule Trigger, AI Agent, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
