# 👥 Send personalized job application emails with Telegram, OpenAI, and Gmail

> ⚡ **105 views** · 👥 [HR & Recruitment](../)

## Description

# 🔧 Setup Guide - Hiring Bot Workflow

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mosaab-yassir-lafrimi/)[![Telegram](https://img.shields.io/badge/Telegram-@joevenner-26A5E4?style=flat-square&logo=telegram&logoColor=white)](https://t.me/joevenner)

## 📋 Prerequisites

Before importing this workflow, make sure you have:

- ✅ **n8n Instance** (cloud or self-hosted)
- ✅ **Telegram Bot Token** (from [@BotFather](https://t.me/botfather))
- ✅ **OpenAI API Key** (with GPT-4 Vision access)
- ✅ **Gmail Account** (with OAuth setup)
- ✅ **Google Drive** (to store your resume)
- ✅ **Redis Instance** (free tier available at [Redis Cloud](https://redis.com/try-free/))

---

## 🚀 Step-by-Step Setup

### 1️⃣ **Upload Your Resume to OpenAI**

First, you need to upload your resume to OpenAI's Files API:

```bash
# Upload your resume to OpenAI
curl https://api.openai.com/v1/files \
  -H "Authorization: Bearer YOUR_OPENAI_API_KEY" \
  -F purpose="assistants" \
  -F file="@/path/to/your/resume.pdf"
```

**Important:** Save the `file_id` from the response (looks like `file-xxxxxxxxxxxxx`)

**Alternative:** Use OpenAI Playground or Python:
```python
from openai import OpenAI
client = OpenAI(api_key="YOUR_API_KEY")

with open("resume.pdf", "rb") as file:
    response = client.files.create(file=file, purpose="assistants")
    print(f"File ID: {response.id}")
```

---

### 2️⃣ **Upload Your Resume to Google Drive**

1. Go to [Google Drive](https://drive.google.com)
2. Upload your resume PDF
3. Right-click → "Get link" → Copy the file ID from URL
   - URL format: `https://drive.google.com/file/d/FILE_ID_HERE/view`
   - Example ID: `1h79U8IFtI2dp_OBtnyhdGaarWpKb9qq9`

---

### 3️⃣ **Create a Telegram Bot**

1. Open Telegram and message [@BotFather](https://t.me/botfather)
2. Send `/newbot`
3. Choose a name and username
4. Save the **Bot Token** (looks like `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)
5. (Optional) Set bot commands:
   ```
   /start - Start the bot
   /help - Get help
   ```

---

### 4️⃣ **Set Up Redis**

**Option A: Redis Cloud (Recommended - Free)**
1. Go to [Redis Cloud](https://redis.com/try-free/)
2. Create a free account
3. Create a database
4. Note: Host, Port, Password

**Option B: Local Redis**
```bash
# Docker
docker run -d -p 6379:6379 redis:latest

# Or via package manager
sudo apt-get install redis-server
```

---

### 5️⃣ **Import the Workflow to n8n**

1. Open n8n
2. Click **"+"** → **"Import from File"**
3. Select `Hiring_Bot_Anonymized.json`
4. Workflow will import with placeholder values

---

### 6️⃣ **Configure Credentials**

#### **A. Telegram Bot Credentials**
1. In n8n, go to **Credentials** → **Create New**
2. Select **"Telegram API"**
3. Enter your Bot Token from Step 3
4. Test & Save

#### **B. OpenAI API Credentials**
1. Go to **Credentials** → **Create New**
2. Select **"OpenAI API"**
3. Enter your OpenAI API Key
4. Test & Save

#### **C. Redis Credentials**
1. Go to **Credentials** → **Create New**
2. Select **"Redis"**
3. Enter:
   - Host: Your Redis host
   - Port: `6379` (default)
   - Password: Your Redis password
4. Test & Save

#### **D. Gmail Credentials**
1. Go to **Credentials** → **Create New**
2. Select **"Gmail OAuth2 API"**
3. Follow OAuth setup flow
4. Authorize n8n to access Gmail
5. Test & Save

#### **E. Google Drive Credentials**
1. Go to **Credentials** → **Create New**
2. Select **"Google Drive OAuth2 API"**
3. Follow OAuth setup flow
4. Authorize n8n to access Drive
5. Test & Save

---

### 7️⃣ **Update Node Values**

#### **A. Update OpenAI File ID in "PayloadForReply" Node**

1. Double-click the **"PayloadForReply"** node
2. Find this line in the code:
   ```javascript
   const resumeFileId = "YOUR_OPENAI_FILE_ID_HERE";
   ```
3. Replace with your actual OpenAI file ID from Step 1:
   ```javascript
   const resumeFileId = "file-xxxxxxxxxxxxx";
   ```
4. Save the node

#### **B. Update Google Drive File ID (Both "Download Resume" Nodes)**

**There are TWO nodes that need updating:**

**Node 1: "Download Resume"**
1. Double-click the node
2. In the **"File ID"** field, click "Expression"
3. Replace `YOUR_GOOGLE_DRIVE_FILE_ID` with your actual ID
4. Update **"Cached Result Name"** to your resume filename
5. Save

**Node 2: "Download Resume1"** (same process)
1. Double-click the node
2. Update File ID
3. Update filename
4. Save

---

### 8️⃣ **Assign Credentials to Nodes**

After importing, you need to assign your credentials to each node:

**Nodes that need credentials:**

| Node Name | Credential Type |
|-----------|----------------|
| Telegram Trigger | Telegram API |
| Generating Reply | OpenAI API |
| Store AI Reply | Redis |
| GetValues | Redis |
| Download Resume | Google Drive OAuth2 |
| Download Resume1 | Google Drive OAuth2 |
| Schedule Email | Gmail OAuth2 |
| SendConfirmation | Telegram API |
| Send a message | Telegram API |
| Edit a text message | Telegram API |
| Send a text message | Telegram API |
| Send a chat action | Telegram API |

**How to assign:**
1. Click on each node
2. In the **"Credentials"** section, select your saved credential
3. Save the node

---

## 🧪 Testing the Workflow

### 1️⃣ **Activate the Workflow**
1. Click the **"Active"** toggle in the top-right
2. Workflow should now be listening for Telegram messages

### 2️⃣ **Test with a Job Post**
1. Find a job post online (LinkedIn, Indeed, etc.)
2. Take a screenshot
3. Send it to your Telegram bot
4. Bot should respond with:
   - "Analyzing job post..." (typing indicator)
   - Full email draft with confirmation button

### 3️⃣ **Test Email Sending**
1. Click **"Send The Email"** button
2. Check Gmail to verify email was sent
3. Check if resume was attached

---

## 🐛 Troubleshooting

### **Issue: "No binary image found"**
- **Solution:** Make sure you're sending an image file, not a document

### **Issue: "Invalid resume file_id"**
- **Solution:** 
  1. Check OpenAI file_id format (starts with `file-`)
  2. Verify file was uploaded successfully
  3. Make sure you updated the code in PayloadForReply node

### **Issue: "Failed to parse model JSON"**
- **Solution:** 
  1. Check OpenAI API quota/limits
  2. Verify model name is correct (`gpt-5.2`)
  3. Check if image is readable

### **Issue: Gmail not sending**
- **Solution:**
  1. Re-authenticate Gmail OAuth
  2. Check Gmail permissions
  3. Verify "attachments" field is set to "Resume"

### **Issue: Redis connection failed**
- **Solution:**
  1. Test Redis connection in credentials
  2. Check firewall rules
  3. Verify host/port/password

### **Issue: Telegram webhook not working**
- **Solution:**
  1. Deactivate and reactivate workflow
  2. Check Telegram bot token is valid
  3. Make sure bot is not blocked

---

## 🔐 Security Best Practices

1. **Never share your credentials** - Keep API keys private
2. **Use environment variables** in n8n for sensitive data
3. **Set up Redis password** - Don't use default settings
4. **Limit OAuth scopes** - Only grant necessary permissions
5. **Rotate API keys** regularly
6. **Monitor usage** - Check for unexpected API calls

---

## 🎨 Customization Ideas

### **Change AI Model**
In the PayloadForReply node, update:
```javascript
const MODEL = "gpt-5.2"; // Change to gpt-4, claude-3-opus, etc.
```

### **Adjust Email Length**
Modify the system prompt:
```javascript
// From:
Email body: ~120–180 words unless INSIGHTS specify otherwise.

// To:
Email body: ~100–150 words for concise applications.
```

### **Add More Languages**
Update language detection logic in the system prompt to support more languages.

### **Custom Job Filtering**
Edit the system prompt to target specific roles:
```javascript
// From:
Only pick ONE job offer to process — the one most clearly related to Data roles

// To:
Only pick ONE job offer to process — the one most clearly related to [YOUR FIELD]
```

### **Add Follow-up Reminders**
Add a "Wait" node after email sends to schedule a reminder after 7 days.

---

## 📊 Workflow Structure

```
Telegram Input
    ↓
Switch (Route by type)
    ↓
├─ New Job Post
│   ↓
│   Send Chat Action (typing...)
│   ↓
│   PayloadForReply (Build AI request)
│   ↓
│   Generating Reply (Call OpenAI)
│   ↓
│   FormatAiReply (Parse JSON)
│   ↓
│   Store AI Reply (Redis cache)
│   ↓
│   SendConfirmation (Show preview)
│
└─ Callback (User clicked "Send")
    ↓
    GetValues (Fetch from Redis)
    ↓
    Format Response
    ↓
    Download Resume (from Drive)
    ↓
    ├─ Path A: Immediate Send
    │   ↓
    │   Send Confirmation Message
    │   ↓
    │   Edit Message (update status)
    │
    └─ Path B: Scheduled Send
        ↓
        Wait (10 seconds)
        ↓
        Download Resume Again
        ↓
        Schedule Email (Gmail)
        ↓
        Send Success Message
```

---

## 💡 Tips for Best Results

1. **High-Quality Resume:** Upload a well-formatted PDF resume
2. **Clear Screenshots:** Take clear, readable job post screenshots
3. **Use Captions:** Add instructions via Telegram captions
   - Example: `"make it more casual"`
   - Example: `"send to recruiter@company.com"`
4. **Review Before Sending:** Always read the draft before clicking send
5. **Update Resume Regularly:** Keep your Google Drive resume current
6. **Test First:** Try with a few test jobs before mass applying

---

## 🆘 Need Help?

- 📚 [n8n Documentation](https://docs.n8n.io/)
- 💬 [n8n Community Forum](https://community.n8n.io/)
- 📺 [n8n YouTube Channel](https://www.youtube.com/c/n8n-io)
- 🤖 [OpenAI Documentation](https://platform.openai.com/docs)
- 📱 [Telegram Bot API Docs](https://core.telegram.org/bots/api)

---

## 📝 Checklist

Use this checklist to verify your setup:

- [ ] OpenAI resume file uploaded (got file_id)
- [ ] Google Drive resume uploaded (got file ID)
- [ ] Telegram bot created (got bot token)
- [ ] Redis instance created (got credentials)
- [ ] All n8n credentials created and tested
- [ ] PayloadForReply node updated with OpenAI file_id
- [ ] Both Download Resume nodes updated with Drive file_id
- [ ] All nodes have credentials assigned
- [ ] Workflow activated
- [ ] Test message sent successfully
- [ ] Test email received successfully

---

**🎉 You're all set! Start applying to jobs in 10 seconds!**

Made with ❤️ and n8n

## 🔗 Nodes Used

HTTP Request, Redis, Telegram, Telegram Trigger, Google Drive, Gmail

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
