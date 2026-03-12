# 📱 🎙️ Convert voice notes to X posts with Google Drive and AssemblyAI

> ⚡ **29 views** · 📱 [Social Media & Email Marketing](../)

## Description

## 🎙️ Voice Note to Tweet: Turn Audio Ideas into X Posts with n8n

A **lean, 3-node automation** that turns voice memos into tweets — so creators can capture ideas on the go and publish fast, without typing.


Capture inspiration the moment it strikes — even when you’re not at your desk. This 3-node workflow lets **content creators, coaches, and solopreneurs** turn voice memos into **X (Twitter) posts** automatically.

Just record a voice note, upload it to a Google Drive folder, and n8n will:

## 🛠️ Step-by-Step Setup Instructions

### 1. **Prepare Google Drive Folder**
- Create a folder: `Voice Notes to Tweet`
- Enable **Google Drive API** in your n8n credentials
- Share the folder with your automation account (if needed)

### 2. **Set Up AssemblyAI (or Whisper)**
- Sign up at [assemblyai.com](https://www.assemblyai.com/)
- Get your API key
- In n8n, add a credential for **HTTP Request** or use a dedicated node

&gt; 🔁 Alternative: Use OpenAI’s Whisper API if preferred

### 3. **Connect X (Twitter) Account**
- Use n8n’s **X (Twitter) node**
- Authenticate with your app key, secret, access token
- Ensure **write permissions**

### 4. **Deploy the Workflow**
- Import the JSON below
- Replace placeholder credentials:
  - `{{GOOGLE_DRIVE_FOLDER_ID}}`
  - `{{ASSEMBLYAI_API_KEY}}`
  - `{{TWITTER_CREDENTIAL}}`
- Activate the workflow

Now, every time you upload a `.m4a`, `.mp3`, or `.wav` file to your folder — it becomes a tweet.

---

## 🔄 Workflow Explanation

1. **Watch Google Drive** → Triggers when a new voice note is added  
2. **Transcribe Audio** → Sends file to AssemblyAI for speech-to-text  
3. **Post to X (Twitter)** → Publishes the transcript as a tweet  

Optional: Add a **Slack approval step** if you don’t want auto-posting.

---

## 📦 Pre-Conditions

- ✅ **n8n account** with access to HTTP and X nodes
- ✅ **Google Drive API enabled**
- ✅ **AssemblyAI or Whisper API key**
- ✅ **X (Twitter) Developer Account** with app credentials
- ✅ Internet-accessible audio files (hosted in Drive)

&gt; ⚠️ Note: X API v2 requires OAuth 2.0 and app approval.

---

## 🎨 Customization Guidance

| Enhancement | How |
|-----------|-----|
| **Add Approval Step** | Insert Slack/Telegram node to approve before posting |
| **Trim Long Transcripts** | Use Function node to limit to 280 chars |
| **Add Hashtags** | Append `#VoiceToTweet #ContentCreatorTips` |
| **Save to Archive** | After posting, move file to “Processed” folder |
| **Support iOS Voice Memos** | Auto-convert `.m4a` → compatible format |

---

## 🌐 Who It’s For

- **Coaches** who record insights on walks
- **Solopreneurs** building personal brands
- **Content creators** who hate writing from scratch
- **Thought leaders** capturing ideas in motion



### ✅ Final Notes for Submission

- All nodes have **sticky notes** explaining purpose
- Uses **standard APIs** with documented credentials
- Solves a **real creator pain point**
- No fluff, no “magic” — just **practical automation**

## 🔗 Nodes Used

HTTP Request, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
