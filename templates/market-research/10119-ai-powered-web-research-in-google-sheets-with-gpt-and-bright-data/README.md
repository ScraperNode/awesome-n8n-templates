# 📊 AI-powered web research in Google Sheets with GPT and Bright Data

> ⚡ **5,662 views** · 📊 [Market Research & Insights](../)

## Description

# 🔍 AI-Powered Web Research in Google Sheets with Bright Data

## 📋 Overview

Transform any Google Sheets cell into an intelligent web scraper! Type `=BRIGHTDATA("cell", "search prompt")` and get AI-filtered result from every website in ~20 seconds.

**What happens automatically:**
- AI optimizes your search query
- Bright Data scrapes the web (bypasses bot detection)
- AI analyzes and filters result
- Returns clean data directly to your cell
- Completes in &lt;25 seconds

**Cost:** ~$0.02-0.05 per search | **Time saved:** 3-5 minutes per search

---

## 👥 Who's it for

- Market researchers needing competitive intelligence
- E-commerce teams tracking prices
- Sales teams doing lead prospecting
- SEO specialists gathering content research
- Real estate agents monitoring listings
- Anyone tired of manual copy-paste

---

## ⚙️ How it works

1. **Webhook Call** - Google Sheets function sends POST request
2. **Data Preparation** - Organizes input structure
3. **AI Query Optimization** - GPT-4.1 Mini refines search query
4. **Web Scraping** - Bright Data fetches data while bypassing blocks
5. **AI Analysis** - GPT-4o Mini filters and summarizes result
6. **Response** - Returns plain text to your cell
8. **Logging** - Updates logs for monitoring

---

## 🛠️ Setup Instructions

**Time to deploy:** 20 minutes

### Requirements

- n8n instance with public URL
- Bright Data account + API key
- OpenAI API key
- Google account for Apps Script

### Part 1: n8n Workflow Setup

1. Import this template into your n8n instance
2. **Configure Webhook node:**
   - Copy your webhook URL: `https://n8n.yourdomain.com/webhook/brightdata-search`
   - Set authentication: Header Auth
   - Set API key: `12312346` (or create your own)
3. **Add OpenAI credentials** to AI nodes.
4. **Configure Bright Data:** Add API credentials
5. **Configure Output Language:** Manually edit the "Set Variables" Node.
6. Test workflow with manual execution
7. Activate the workflow

### Part 2: Google Sheets Function

1. Open Google Sheet → **Extensions** → **Apps Script**
2. Paste this code:

```javascript
function BRIGHTDATA(prompt, source) {
  if (!prompt || prompt === "") {
    return "❌ Must enter prompt";
  }
 
  source = source || "google";
 
  // Update with YOUR webhook URL
  const N8N_WEBHOOK_URL = "https://your-n8n-domain.com/webhook/brightdata-search";
  
  // Update with YOUR password
  const API_KEY = "12312346";
 
  let spreadsheetId, sheetName, cellAddress;
 
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const activeCell = sheet.getActiveCell();
    spreadsheetId = SpreadsheetApp.getActiveSpreadsheet().getId();
    sheetName = sheet.getName();
    cellAddress = activeCell.getA1Notation();
  } catch (e) {
    return "❌ Cannot identify cell";
  }
 
  const payload = {
    prompt: prompt,
    source: source.toLowerCase(),
    context: {
      spreadsheetId: spreadsheetId,
      sheetName: sheetName,
      cellAddress: cellAddress,
      timestamp: new Date().toISOString()
    }
  };
 
  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
    headers: {
      "Accept": "text/plain",
      "key": API_KEY
    }
  };
 
  try {
    const response = UrlFetchApp.fetch(N8N_WEBHOOK_URL, options);
    const responseCode = response.getResponseCode();
   
    if (responseCode !== 200) {
      Logger.log("Error response: " + response.getContentText());
      return "❌ Error " + responseCode;
    }
   
    return response.getContentText();
   
  } catch (error) {
    Logger.log("Exception: " + error.toString());
    return "❌ Connection error: " + error.toString();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "alive",
    message: "Apps Script is running",
    timestamp: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
```

3. Update `N8N_WEBHOOK_URL` with your webhook
4. Update `API_KEY` with your password
5. **Save** (Ctrl+S / Cmd+S) - Important!
6. Close Apps Script editor

---

## 💡 Usage Examples


```
=BRIGHTDATA("C3", "What is the current price of the product?")
=BRIGHTDATA("D30", "What is the size of this company?")
=BRIGHTDATA("A4", "Do this comapny is hiring Developers?")
```
---

## 🎨 Customization

### Easy Tweaks
- **AI Models** - Switch to GPT-4o for better optimization
- **Response Format** - Modify prompt for specific outputs
- **Speed** - Optimize AI prompts to reduce time
- **Language** - Change prompts for any language

### Advanced Options
- Implement rate limiting
- Add data validation
- Create async mode for long queries
- Add Slack notifications

---

## 🚀 Pro Tips

- **Be Specific** - "What is iPhone 15 Pro 256GB US price?" beats "What is iPhone price?"
- **Speed Matters** - Keep prompts concise (30s timeout limit)
- **Monitor Costs** - Track Bright Data usage
- **Debug** - Check workflow logs for errors

---

## ⚠️ Important Notes

- **Timeout:** 30-second Google Sheets limit (aim for &lt;20s)
- **Plain Text Only:** No JSON responses
- **Costs:** Monitor Bright Data at console.brightdata.com
- **Security:** Keep API keys secret
- **No Browser Storage:** Don't use localStorage/sessionStorage

---

## 🔧 Troubleshooting

| Error | Solution |
|-------|----------|
| "Exceeded maximum execution time" | Optimize AI prompts or use async mode |
| "Could not fetch data" | Verify Bright Data credentials |
| Empty cell | Check n8n logs for AI parsing issues |
| Broken characters | Verify UTF-8 encoding in webhook node |

---

## 📚 Resources

- [Bright Data API Docs](https://docs.brightdata.com/)
- [n8n Webhook Documentation](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/)
- [Google Apps Script Reference](https://developers.google.com/apps-script/reference/spreadsheet)

---

**Built with ❤️ by [Elay Guez](https://www.linkedin.com/in/elay-g)**

## 🔗 Nodes Used

HTTP Request, Webhook, AI Agent, Basic LLM Chain, OpenAI Chat Model, Structured Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
