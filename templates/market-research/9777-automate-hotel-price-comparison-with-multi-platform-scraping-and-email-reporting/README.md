# 📊 Automate hotel price comparison with multi-platform scraping and email reporting

> ⚡ **1,026 views** · 📊 [Market Research & Insights](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This is a **production-ready, end-to-end workflow** that automatically compares hotel prices across multiple booking platforms and delivers beautiful email reports to users. Unlike basic building blocks, this workflow is a complete solution ready to deploy.

---

## ✨ What Makes This Production-Ready

### ✅ Complete End-to-End Automation
- **Input**: Natural language queries via webhook
- **Processing**: Multi-platform scraping & comparison
- **Output**: Professional email reports + analytics
- **Feedback**: Real-time webhook responses

### ✅ Advanced Features
- 🧠 Natural Language Processing for flexible queries
- 🔄 Parallel scraping from multiple platforms
- 📊 Analytics tracking with Google Sheets integration
- 💌 Beautiful HTML email reports
- 🛡️ Error handling and graceful degradation
- 📱 Webhook responses for real-time feedback

### ✅ Business Value
- **For Travel Agencies**: Instant price comparison service for clients
- **For Hotels**: Competitive pricing intelligence
- **For Travelers**: Save time and money with automated research

---

## 🚀 Setup Instructions

### Step 1: Import Workflow

1. Copy the workflow JSON from the artifact
2. In n8n, go to **Workflows** → **Import from File/URL**
3. Paste the JSON and click **Import**

### Step 2: Configure Credentials

#### A. SMTP Email (Required)
```
Settings → Credentials → Add Credential → SMTP

Host: smtp.gmail.com (for Gmail)
Port: 587
User: your-email@gmail.com
Password: your-app-password (not regular password!)
```

**Gmail Setup:**
1. Enable 2FA on your Google Account
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use the generated password in n8n

#### B. Google Sheets (Optional - for analytics)
```
Settings → Credentials → Add Credential → Google Sheets OAuth2

Follow the OAuth flow to connect your Google account
```

**Sheet Setup:**
1. Create a new Google Sheet
2. Name the first sheet "Analytics"
3. Add headers: `timestamp`, `query`, `hotel`, `city`, `checkIn`, `checkOut`, `bestPrice`, `platform`, `totalResults`, `userEmail`
4. Copy the Sheet ID from URL and paste in the "Save to Google Sheets" node

### Step 3: Set Up Scraping Service

You need to create a scraping API that the workflow calls. Here are your options:

#### Option A: Use Your Existing Python Script

**Create a simple Flask API wrapper:**

```python
# api_wrapper.py
from flask import Flask, request, jsonify
import subprocess
import json

app = Flask(__name__)

@app.route('/scrape/&lt;platform&gt;', methods=['POST'])
def scrape(platform):
    data = request.json
    query = f"{data['checkIn']} to {data['checkOut']}, {data['hotel']}, {data['city']}"
    
    try:
        result = subprocess.run(
            ['python3', 'price_scrap_2.py', query, platform],
            capture_output=True,
            text=True,
            timeout=30
        )
        
        # Parse your script output
        output = result.stdout
        # Assuming your script returns price data
        
        return jsonify({
            'price': extracted_price,
            'currency': 'USD',
            'roomType': 'Standard Room',
            'url': booking_url,
            'availability': True
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

**Deploy:**
```bash
pip install flask
python api_wrapper.py
```

**Update n8n HTTP Request nodes:**
```
URL: http://your-server-ip:5000/scrape/booking
URL: http://your-server-ip:5000/scrape/agoda
URL: http://your-server-ip:5000/scrape/expedia
```

#### Option B: Use Third-Party Scraping Services

**Recommended Services:**
- **ScraperAPI** (scraperapi.com) - $49/month for 100k requests
- **Bright Data** (brightdata.com) - Pay as you go
- **Apify** (apify.com) - Has pre-built hotel scrapers

**Example with ScraperAPI:**
```javascript
// In HTTP Request node
URL: http://api.scraperapi.com
Query Parameters:
  api_key: YOUR_API_KEY
  url: https://booking.com/search?hotel={{$json.hotelName}}...
```

#### Option C: Use n8n SSH Node (Like Your Original)

Keep your SSH approach but improve it:

1. Replace HTTP Request nodes with SSH nodes
2. Point to your server with the Python script
3. Ensure error handling and timeouts

```javascript
// SSH Node Configuration
Host: your-server-ip
Command: python3 /path/to/price_scrap_2.py "{{$json.hotelName}}" "{{$json.city}}" "{{$json.checkInISO}}" "{{$json.checkOutISO}}" "booking"
```

### Step 4: Activate Webhook

1. Click on "Webhook - Receive Request" node
2. Click "Listen for Test Event"
3. Copy the webhook URL (e.g., `https://your-n8n.com/webhook/hotel-price-check`)
4. Test with this curl command:

```bash
curl -X POST https://your-n8n.com/webhook/hotel-price-check \
  -H "Content-Type: application/json" \
  -d '{
    "message": "I want to check Marriott Hotel in Singapore from 15th March to 18th March",
    "email": "user@example.com",
    "name": "John Doe"
  }'
```

### Step 5: Activate Workflow

1. Toggle the workflow to **Active**
2. The webhook is now live and ready to receive requests

---

## 📝 Usage Examples

### Example 1: Basic Query
```json
{
  "message": "Hilton Hotel in Dubai from 20th December to 23rd December",
  "email": "traveler@email.com",
  "name": "Sarah"
}
```

### Example 2: Flexible Format
```json
{
  "message": "I need prices for Taj Hotel, Mumbai. Check-in: 5th January, Check-out: 8th January",
  "email": "customer@email.com"
}
```

### Example 3: Short Format
```json
{
  "message": "Hyatt Singapore March 10 to March 13",
  "email": "user@email.com"
}
```

---

## 🎨 Customization Options

### 1. Add More Booking Platforms

**Steps:**
1. Duplicate an existing "Scrape" node
2. Update the platform parameter
3. Connect it to "Aggregate & Compare"
4. Update the aggregation logic to include the new platform

### 2. Change Email Template

Edit the "Format Email Report" node's JavaScript:
- Modify HTML structure
- Change colors (currently purple gradient)
- Add your company logo
- Include terms and conditions

### 3. Add SMS Notifications

**Using Twilio:**
1. Add new node: Twilio → Send SMS
2. Connect after "Aggregate & Compare"
3. Format: "Best deal: ${hotel} at ${platform} for ${price}"

### 4. Add Slack Integration

1. Add Slack node after "Aggregate & Compare"
2. Send to #travel-deals channel
3. Include quick booking links

### 5. Implement Caching

Add Redis or n8n's built-in cache:
```javascript
// Before scraping, check cache
const cacheKey = `${hotelName}-${city}-${checkIn}-${checkOut}`;
const cached = await $cache.get(cacheKey);

if (cached && Date.now() - cached.timestamp &lt; 3600000) {
  return cached.data; // Use 1-hour cache
}
```

---

## 📊 Analytics & Monitoring

### Google Sheets Dashboard

The workflow automatically logs to Google Sheets. Create a dashboard with:

**Metrics to track:**
- Total searches per day/week
- Most searched hotels
- Most searched cities
- Average price ranges
- Platform with best prices (frequency)
- User engagement (repeat users)

**Example Sheet Formulas:**
```
// Total searches today
=COUNTIF(A:A, TODAY())

// Most popular hotel
=INDEX(C:C, MODE(MATCH(C:C, C:C, 0)))

// Average best price
=AVERAGE(G:G)
```

### Set Up Alerts

Add a node after "Aggregate & Compare":
```javascript
// Alert if prices are unusually high
if (bestDeal.price &gt; avgPrice * 1.5) {
  // Send alert to admin
  return [{
    json: {
      alert: true,
      message: `High prices detected for ${hotelName}`
    }
  }];
}
```

---

## 🛡️ Error Handling

The workflow includes comprehensive error handling:

### 1. Missing Information
If user doesn't provide hotel/city/dates → Responds with helpful prompt

### 2. Scraping Failures
If all platforms fail → Sends "No results" email with suggestions

### 3. Partial Results
If some platforms work → Shows available results + notes errors

### 4. Email Delivery Issues
Uses `continueOnFail: true` to prevent workflow crashes

---

## 🔒 Security Best Practices

### 1. Rate Limiting
Add rate limiting to prevent abuse:

```javascript
// In Parse & Validate node
const userEmail = $json.email;
const recentSearches = await $cache.get(`searches:${userEmail}`);

if (recentSearches && recentSearches.length &gt; 10) {
  return [{
    json: {
      status: 'rate_limited',
      response: 'Too many requests. Please try again in 1 hour.'
    }
  }];
}
```

### 2. Input Validation
Already implemented - validates hotel names, cities, dates

### 3. Email Verification
Add email verification before first use:

```javascript
// Send verification code
const code = Math.random().toString(36).substring(7);
await $sendEmail({
  to: userEmail,
  subject: 'Verify your email',
  body: `Your code: ${code}`
});
```

### 4. API Key Protection
Never expose scraping API keys in responses or logs
---

## 🚀 Deployment Options

### Option 1: n8n Cloud (Easiest)
1. Sign up at n8n.cloud
2. Import workflow
3. Configure credentials
4. Activate

**Pros:** No maintenance, automatic updates
**Cons:** Monthly cost

### Option 2: Self-Hosted (Most Control)
```bash
# Using Docker
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n

# Using npm
npm install -g n8n
n8n start
```

**Pros:** Free, full control
**Cons:** You manage updates

### Option 3: Cloud Platforms
- Railway.app (recommended for beginners)
- DigitalOcean App Platform
- AWS ECS
- Google Cloud Run

---

## 📈 Scaling Recommendations

### For &lt; 100 searches/day
- Current setup is perfect
- Use n8n Cloud Starter or small VPS

### For 100-1000 searches/day
- Add Redis caching (1-hour cache)
- Use queue system for scraping
- Upgrade to n8n Cloud Pro

### For 1000+ searches/day
- Implement job queue (Bull/Redis)
- Use dedicated scraping service
- Load balance multiple n8n instances
- Consider microservices architecture

---

## 🐛 Troubleshooting

### Issue: Webhook not responding
**Solution:**
1. Check workflow is Active
2. Verify webhook URL is correct
3. Check n8n logs: Settings → Log Streaming

### Issue: No prices returned
**Solution:**
1. Test scraping endpoints individually
2. Check if hotel name matches exactly
3. Verify dates are in future
4. Try different date ranges

### Issue: Emails not sending
**Solution:**
1. Verify SMTP credentials
2. Check "less secure apps" setting (Gmail)
3. Use App Password instead of regular password
4. Check spam folder

### Issue: Slow response times
**Solution:**
1. Enable parallel scraping (already configured)
2. Add timeout limits (30 seconds recommended)
3. Implement caching
4. Use faster scraping service

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Webhook

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
