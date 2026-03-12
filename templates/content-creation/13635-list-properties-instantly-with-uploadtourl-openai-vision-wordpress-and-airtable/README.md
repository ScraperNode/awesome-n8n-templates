# 🎬 List properties instantly with UploadToURL, OpenAI Vision, WordPress and Airtable

> ⚡ **3 views** · 🎬 [Content Creation & Video](../)

## Description

Accelerate your real estate marketing by moving from "photo capture" to "published listing" in seconds. This workflow automates the entire listing process by hosting property photos via **UploadToURL**, using **GPT-4o Vision** to write professional MLS descriptions, and parallel-publishing the results to **WordPress** and **Airtable**.

## 🎯 What This Workflow Does

Turns on-site property photos into fully-enriched digital listings:

1. **📝 Captures Property Media** - Receives a photo (binary or URL) and basic address metadata via Webhook.
2. **☁️ Instant CDN Hosting** - **UploadToURL** converts the photo into a permanent, high-speed CDN link for your website.
3. **👁️ Intelligent Property Analysis** - **GPT-4o Vision** analyzes the image to detect room type, condition scores (1–10), professional feature tags, and lighting quality.
4. **✍️ Automated Copywriting** - Generates a 2-3 sentence, MLS-compliant description using professional real estate terminology.
5. **⚡ Parallel Publishing** - Simultaneously creates a draft post in **WordPress** (using Gutenberg blocks) and a new record in your **Airtable** MLS database.
6. **📲 Instant Agent Confirmation** - Sends a **Telegram** message to the agent with live links to the WordPress draft and Airtable record for immediate review.

## ✨ Key Features

- **UploadToURL Integration**: Native community node hosting ensures your property photos are web-ready instantly without manual resizing or cloud storage management.
- **Vision-Powered Insights**: AI automatically detects "premium finishes" or "renovation age," providing pricing signals without manual entry.
- **Parallel Execution**: Uses a split-branch logic to publish to multiple platforms at once, significantly reducing total execution time.
- **Unified Response**: A Merge node assembles the final IDs and URLs from all platforms into a single, clean JSON response.
- **Audit-Ready MLS**: Every Airtable record is timestamped and includes the original high-res CDN link for external syndication.

## 💼 Perfect For

- **Real Estate Agencies**: Managing high-volume listings across multiple agents and neighborhoods.
- **Property Managers**: Quickly documenting unit conditions and updates for internal tracking.
- **Independent Realtors**: Automating their personal website and CRM directly from their smartphone while on-site.
- **Property Photographers**: Delivering "ready-to-publish" assets to clients with AI-generated metadata already attached.

## 🔧 What You'll Need

### Required Integrations
- **[UploadToURL](https://uploadtourl.com)** - To host property photos and provide CDN links.
- **n8n Community Node** - `n8n-nodes-uploadtourl` must be installed.
- **OpenAI API** - GPT-4o Vision for professional image analysis and copywriting.
- **WordPress** - Basic Auth or Application Password to create draft posts.
- **Airtable** - Personal Access Token to manage your MLS database.

### Optional Integrations
- **Telegram** - To receive real-time notifications with links to your new listings.

## 🚀 Quick Start

1. **Import Template** - Copy the JSON and import it into your n8n canvas.
2. **Install Node** - Ensure the **UploadToURL** community node is installed.
3. **Set Credentials** - Link your UploadToURL, OpenAI, WordPress, Airtable, and Telegram accounts.
4. **Define Variables** - Update n8n variables: `WP_BASE_URL`, `AIRTABLE_BASE_ID`, and `TELEGRAM_CHAT_ID`.
5. **Prepare Airtable** - Ensure your table has columns for `Listing ID`, `Address`, `Price`, and `MLS Description`.
6. **Deploy** - Activate the workflow and start publishing properties instantly from the field.

## 🎨 Customization Options

- **Watermarking**: Insert a node to add your agency logo to photos before they are uploaded to the CDN.
- **Zillow/MLS Sync**: Add a branch to push the AI-generated data to external listing services via API.
- **Virtual Staging**: Route photos through an AI staging service before hosting them on UploadToURL.
- **Price Formatting**: Update the code node to support different currencies or regional price display formats.

## 📈 Expected Results

- **Save 20-30 minutes per listing** by eliminating manual uploading, writing, and platform syncing.
- **Improved SEO**: Every property photo includes AI-generated Alt-Text and descriptive filenames.
- **Better Accuracy**: AI consistently captures features (like "crown molding" or "natural light") that agents might miss in a rush.
- **Zero Friction**: Agents can go from taking a photo to having a draft live on the website before they leave the property.

## 🏆 Use Cases

### Rapid Market Entry
A team of agents can document an entire apartment complex in one afternoon, with every room automatically categorized and described in WordPress by the time they get back to the office.

### Internal Quality Audits
Property managers use the condition score (1–10) generated by the AI to prioritize maintenance and renovations across a portfolio.

### Social Media Teasers
The AI-generated "Marketing Blurb" can be used to instantly trigger a second workflow that posts a property "sneak peek" to Instagram or LinkedIn.

## 💡 Pro Tips

- **Structured Filenames**: The workflow automatically renames files to `{listingId}_{address}.jpg` for better organization and SEO.
- **Draft Status**: Listings are created as "Drafts" in WordPress by default, allowing for a quick "Human-in-the-loop" review before going live.
- **Lighting Analysis**: Use the AI-detected "Lighting Quality" field to identify photos that might need professional retouching.

---

**Ready to automate your real estate pipeline?** Import this template and connect **UploadToURL** to start publishing professional listings faster.

**Questions about the Airtable schema?** The workflow includes detailed sticky notes explaining the exact field types required for the MLS record sync.

## 🔗 Nodes Used

Airtable, HTTP Request, Webhook, Telegram, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
