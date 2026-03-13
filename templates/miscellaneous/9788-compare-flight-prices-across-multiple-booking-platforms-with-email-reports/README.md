# 🔧 Compare flight prices across multiple booking platforms with email reports

> ⚡ **815 views** · 🔧 [Miscellaneous](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow automates flight price comparison across multiple booking platforms (Kayak, Skyscanner, Expedia, Google Flights). It accepts natural language queries, extracts flight details using NLP, scrapes prices in parallel, identifies the best deals, and sends professional email reports with comprehensive price breakdowns and booking links.

## 📦 What You'll Get

A **fully functional, production-ready** n8n workflow that:

✅ Compares flight prices across 4 major platforms (Kayak, Skyscanner, Expedia, Google Flights)  
✅ Accepts natural language requests ("Flight from NYC to London on March 25")  
✅ Sends beautiful email reports with best deals  
✅ Returns real-time JSON responses for web apps  
✅ Handles errors gracefully with helpful messages  
✅ Includes detailed documentation with sticky notes

---

## 🚀 Quick Setup (3 Steps)

### Step 1: Import Workflow to n8n

1. **Copy the JSON** from the first artifact (workflow file)
2. **Open n8n** → Go to **Workflows**
3. **Click "Import from File"** → **Paste JSON** → Click **Import**
4. ✅ Workflow imported successfully!

### Step 2: Setup Python Scraper

**On your server (where n8n SSH nodes will connect):**

```bash
# Navigate to your scripts directory
cd /home/oneclick-server2/

# Create the scraper file
nano flight_scraper.py

# Copy the entire Python script from the second artifact
# Save with Ctrl+X, then Y, then Enter

# Make it executable
chmod +x flight_scraper.py

# Install required packages
pip3 install selenium

# Install Chrome and ChromeDriver
sudo apt update
sudo apt install -y chromium-browser chromium-chromedriver

# Test the scraper
python3 flight_scraper.py JFK LHR 2025-03-25 2025-03-30 round-trip 1 economy kayak
```

**Expected Output:**
```
Delta|$450|7h 30m|0|10:00 AM|6:30 PM|https://kayak.com/...
British Airways|$485|7h 45m|0|11:30 AM|8:15 PM|https://kayak.com/...
...
```

### Step 3: Configure n8n Credentials

**A. Setup SMTP (for sending emails):**

1. In n8n: **Credentials** → **Add Credential** → **SMTP**
2. Fill in details:
   ```
   Host: smtp.gmail.com
   Port: 587
   User: your-email@gmail.com
   Password: [Your App Password]
   ```

**For Gmail Users:**
- Enable 2FA: https://myaccount.google.com/security
- Create App Password: https://myaccount.google.com/apppasswords
- Use the 16-character password in n8n

**B. Setup SSH (already configured if you used existing credentials):**

1. In workflow, SSH nodes use: `ilPh8oO4GfSlc0Qy`
2. Verify credential exists and points to correct server
3. Update path if needed: `/home/oneclick-server2/`

**C. Activate Workflow:**

1. Click the workflow **toggle** → **Active** ✅
2. Webhook is now live!

---

## 🎯 How to Use

### Method 1: Direct Webhook Call

```bash
curl -X POST https://your-n8n-domain.com/webhook/flight-price-compare \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Flight from Mumbai to Dubai on 15th March, round-trip returning 20th March",
    "email": "user@example.com",
    "name": "John Doe"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Flight comparison sent to user@example.com",
  "route": "BOM → DXB",
  "bestPrice": 450,
  "airline": "Emirates",
  "totalResults": 18
}
```

### Method 2: Natural Language Queries

The workflow understands various formats:

**✅ All these work:**
- "Flight from New York to London on 25th March, one-way"
- "NYC to LHR March 25 round-trip return March 30"
- "I need a flight from Mumbai to Dubai departing 15th March"
- "JFK LHR 2025-03-25 2025-03-30 round-trip"

**Supported cities (auto-converts to airport codes):**
- New York → JFK
- London → LHR
- Mumbai → BOM
- Dubai → DXB
- Singapore → SIN
- And 20+ more cities

### Method 3: Structured JSON

```json
{
  "from": "JFK",
  "to": "LHR",
  "departure_date": "2025-03-25",
  "return_date": "2025-03-30",
  "trip_type": "round-trip",
  "passengers": 1,
  "class": "economy",
  "email": "user@example.com",
  "name": "John"
}
```

---

## 📧 Email Report Example

Users receive an email like this:

```
FLIGHT PRICE COMPARISON
==================================================

Route: JFK → LHR
Departure: 25 Mar 2025
Return: 30 Mar 2025
Trip Type: round-trip
Passengers: 1

🏆 BEST DEAL
--------------------------------------------------
British Airways
Price: $450
Duration: 7h 30m
Stops: Non-stop
Platform: Kayak

💰 Save $85 vs highest price!

📊 ALL RESULTS (Top 10)
--------------------------------------------------
1. British Airways - $450 (Non-stop) - Kayak
2. Delta - $475 (Non-stop) - Google Flights
3. American Airlines - $485 (Non-stop) - Expedia
4. Virgin Atlantic - $495 (Non-stop) - Skyscanner
5. United - $520 (1 stop) - Kayak
...

Average Price: $495
Total Results: 23

Prices subject to availability.
Happy travels! ✈️
```

---

## 🔧 Customization Options

### Change Scraping Platforms

**Add more platforms:**

1. Duplicate an SSH scraping node
2. Change platform parameter: `kayak` → `new-platform`
3. Add scraping logic in `flight_scraper.py`
4. Connect to "Aggregate & Analyze Prices" node

**Remove platforms:**

1. Delete unwanted SSH node
2. Workflow continues with remaining platforms

### Modify Email Format

Edit the "Format Email Report" node:

```javascript
// Change to HTML format
const html = `
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
  <h1>Flight Deals</h1>
  <p>Best price: ${bestDeal.currency}${bestDeal.price}</p>
&lt;/body&gt;
&lt;/html&gt;
`;

return [{
  json: {
    subject: "...",
    html: html,  // Instead of text
    ...data
  }
}];
```

Then update "Send Email Report" node:
- Change `emailFormat` to `html`
- Use `{{$json.html}}` instead of `{{$json.text}}`

### Add More Cities/Airports

Edit "Parse & Validate Flight Request" node:

```javascript
const airportCodes = {
  ...existing codes...,
  'berlin': 'BER',
  'rome': 'FCO',
  'barcelona': 'BCN',
  // Add your cities here
};
```

### Change Timeout Settings

In each SSH node, add:

```javascript
"timeout": 30000  // 30 seconds
```

---

## 🐛 Troubleshooting

### Issue: "No flights found"

**Possible causes:**
1. Scraper script not working
2. Website structure changed
3. Dates in past
4. Invalid airport codes

**Solutions:**
```bash
# Test scraper manually
cd /home/oneclick-server2/
python3 flight_scraper.py JFK LHR 2025-03-25 "" one-way 1 economy kayak

# Check if output shows flights
# If no output, check Chrome/ChromeDriver installation
```

### Issue: "Connection refused" (SSH)

**Solutions:**
1. Verify SSH credentials in n8n
2. Check server is accessible: `ssh user@your-server`
3. Verify path exists: `/home/oneclick-server2/`
4. Check Python installed: `which python3`

### Issue: "Email not sending"

**Solutions:**
1. Verify SMTP credentials
2. Check email in spam folder
3. For Gmail: Confirm App Password is used (not regular password)
4. Test SMTP connection:
   ```bash
   telnet smtp.gmail.com 587
   ```

### Issue: "Webhook not responding"

**Solutions:**
1. Ensure workflow is **Active** (toggle on)
2. Check webhook path: `/webhook/flight-price-compare`
3. Test with curl command (see "How to Use" section)
4. Check n8n logs: Settings → Log Streaming

### Issue: "Scraper timing out"

**Solutions:**
```python
# In flight_scraper.py, increase wait times
time.sleep(10)  # Instead of time.sleep(5)

# Or increase WebDriverWait timeout
WebDriverWait(driver, 30)  # Instead of 20
```

---

## 📊 Understanding the Workflow

### Node-by-Node Explanation

**1. Webhook - Receive Flight Request**
- Entry point for all requests
- Accepts POST requests
- Path: `/webhook/flight-price-compare`

**2. Parse & Validate Flight Request**
- Extracts flight details from natural language
- Converts city names to airport codes
- Validates required fields
- Returns helpful errors if data missing

**3. Check If Request Valid**
- Routes to scraping if valid
- Routes to error response if invalid

**4-7. Scrape [Platform] (4 nodes)**
- Run in parallel for speed
- Each calls Python script with platform parameter
- Continue on failure (don't break workflow)
- Return pipe-delimited flight data

**8. Aggregate & Analyze Prices**
- Collects all scraper results
- Parses flight data
- Finds best overall deal
- Finds best non-stop flight
- Calculates statistics
- Sorts by price

**9. Format Email Report**
- Creates readable text report
- Includes route details
- Highlights best deal
- Lists top 10 results
- Shows statistics

**10. Send Email Report**
- Sends formatted email to user
- Uses SMTP credentials

**11. Webhook Response (Success)**
- Returns JSON response immediately
- Includes best price summary
- Confirms email sent

**12. Webhook Response (Error)**
- Returns helpful error message
- Guides user on what's missing

---

## 🎨 Workflow Features

### ✅ Included Features

- **Natural Language Processing**: Understands flexible input formats
- **Multi-Platform Comparison**: 4 major booking sites
- **Parallel Scraping**: All platforms scraped simultaneously
- **Error Handling**: Graceful failures, helpful messages
- **Email Reports**: Professional format with all details
- **Real-Time Responses**: Instant webhook feedback
- **Sticky Notes**: Detailed documentation in workflow
- **Airport Code Mapping**: Auto-converts 20+ cities

### 🚧 Not Included (Easy to Add)

- **Price Alerts**: Monitor price drops (add Google Sheets)
- **Analytics Dashboard**: Track searches (add Google Sheets)
- **SMS Notifications**: Send via Twilio
- **Slack Integration**: Post to channels
- **Database Logging**: Store searches in PostgreSQL
- **Multi-Currency**: Show prices in the user's currency

---

## 💡 Pro Tips

### Tip 1: Speed Up Scraping

Use faster scraping service (like ScraperAPI):

```javascript
// Replace SSH nodes with HTTP Request nodes
{
  "url": "http://api.scraperapi.com",
  "qs": {
    "api_key": "YOUR_KEY",
    "url": "https://kayak.com/flights/..."
  }
}
```

### Tip 2: Cache Results

Add caching to avoid duplicate scraping:

```javascript
// In Parse node, check cache first
const cacheKey = `${origin}-${dest}-${departureDate}`;
const cached = await $cache.get(cacheKey);

if (cached && Date.now() - cached.time &lt; 3600000) {
  return cached.data; // Use 1-hour cache
}
```

### Tip 3: Add More Platforms

Easy to add Momondo, CheapOair, etc.:

1. Add function in `flight_scraper.py`
2. Add SSH node in workflow
3. Connect to aggregator

### Tip 4: Improve Date Parsing

Handle more formats:

```javascript
// Add to Parse node
const formats = [
  'DD/MM/YYYY',
  'MM-DD-YYYY',
  'YYYY.MM.DD',
  // Add your formats
];
```

## 🔗 Nodes Used

Send Email, Webhook, SSH

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
