# 🔬 Generate marketing reports from Google Sheets with GPT-4 insights and PDF.co

> ⚡ **330 views** · 🔬 [Document Extraction & Analysis](../)

## Description

This workflow pulls **marketing data from Google Sheets**, aggregates spend by channel, generates an **AI-written summary**, and outputs a formatted **PDF report** using a custom HTML template on **PDF.co**.  

---

## ⚙️ Setup Instructions

### 1️⃣ Prepare Your Google Sheet  
- Copy this template into your Google Drive: [Sample Marketing Data](https://docs.google.com/spreadsheets/d/1UDWt0-Z9fHqwnSNfU3vvhSoYCFG6EG3E-ZewJC_CLq4/edit?gid=365710158#gid=365710158)  
- Add or update your marketing spend data in rows 2–100.  

#### Connect Google Sheets in n8n  
1. Go to **n8n → Credentials → New → Google Sheets (OAuth2)**  
2. Log in with your Google account and grant access  
3. Select the **Spreadsheet ID** and **Worksheet** in the workflow  

---

### 2️⃣ Set Up PDF.co for PDF Reports  
1. Create a free account at [PDF.co](https://pdf.co/)  
2. In **PDF.co Dashboard → HTML to PDF Templates**, create a new **Mustache template**  
   - Paste the HTML provided at the bottom of this description  
   - Save, and note your **Template ID**  
3. In **n8n → Credentials → New → PDF.co API**, paste your **API Key** and save  
4. In the workflow, select your **PDF.co credential** in the `Create PDF` node  
5. Replace the `templateId` with your Template ID  

---

## 🧠 How It Works  
- **Google Sheets Node**: Pulls marketing spend data  
- **Summarize Nodes**: Aggregate total spend and spend per channel  
- **OpenAI Node**: Writes a daily summary of marketing performance  
- **Code Node**: Converts aggregated data into the correct shape for the PDF template  
- **PDF.co Node**: Generates a final, formatted **PDF report**  

---

## 📬 Contact  
Need help customizing this (e.g., filtering by campaign, sending reports by email, or formatting your PDF)?  

- 📧 **robert@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**  

---

## 📄 HTML Template (for PDF.co)  

&gt; Paste this into a new **HTML Template** on [PDF.co](https://pdf.co/) and reference its Template ID in your workflow.

```html
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="utf-8" /&gt;
  &lt;title&gt;Invoice {{invoiceNumber}}&lt;/title&gt;
  &lt;style&gt;
    body { font-family: Arial, Helvetica, sans-serif; margin: 36px; color: #222; }
    .header { display: flex; justify-content: space-between; align-items: center; }
    .brand { max-height: 56px; }
    h1 { margin: 12px 0 4px; font-size: 22px; }
    .meta { font-size: 12px; color: #555; }
    .two-col { display: flex; gap: 24px; margin-top: 16px; }
    .box { flex: 1; border: 1px solid #ddd; padding: 12px; border-radius: 6px; }
    .label { font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: .02em; }
    table { width: 100%; border-collapse: collapse; margin-top: 16px; }
    th, td { border-bottom: 1px solid #eee; padding: 10px 8px; font-size: 13px; }
    th { background: #fafafa; text-align: left; }
    tfoot td { border-top: 2px solid #ddd; font-size: 13px; }
    .right { text-align: right; }
    .totals td { padding: 6px 8px; }
    .grand { font-weight: 700; font-size: 14px; }
    .notes { margin-top: 18px; font-size: 12px; color: #444; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  <div>
    <div>
      <h1>Invoice {{invoiceNumber}}</h1>
      <div>Date: {{invoiceDate}} &nbsp; | &nbsp; Due: {{dueDate}}</div>
    </div>
    {{#company.logoUrl}}
    <img src alt="Logo" />
    {{/company.logoUrl}}
  </div>

  <div>
    <div>
      <div>From</div>
      <div><strong>{{company.name}}</strong></div>
      <div>{{company.address}}</div>
      <div>{{company.phone}}</div>
      <div>{{company.email}}</div>
    </div>
    <div>
      <div>Bill To</div>
      <div><strong>{{billTo.name}}</strong></div>
      <div>{{billTo.address}}</div>
      <div>{{billTo.email}}</div>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Description</th>
        <th>Qty</th>
        <th>Unit Price</th>
        <th>Line Total</th>
      </tr>
    </thead>
    <tbody>
      {{#items}}
      <tr>
        <td>{{line}}</td>
        <td>{{description}}</td>
        <td>{{qty}}</td>
        <td>{{unitPriceFmt}}</td>
        <td>{{lineTotalFmt}}</td>
      </tr>
      {{/items}}
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4">Subtotal</td>
        <td>{{subTotalFmt}}</td>
      </tr>
      <tr>
        <td colspan="4">Tax ({{taxRatePct}})</td>
        <td>{{taxAmountFmt}}</td>
      </tr>
      <tr>
        <td colspan="4">Discount</td>
        <td>-{{discountFmt}}</td>
      </tr>
      <tr>
        <td colspan="4">Total</td>
        <td>{{totalFmt}}</td>
      </tr>
    </tfoot>
  </table>

  <div>
    <strong>Notes:</strong> {{notes}}<br />
    <strong>Terms:</strong> {{terms}}
  </div>
&lt;/body&gt;
&lt;/html&gt;

## 🔗 Nodes Used

Google Sheets, AI Agent, OpenAI Chat Model, Structured Output Parser, Summarize

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
