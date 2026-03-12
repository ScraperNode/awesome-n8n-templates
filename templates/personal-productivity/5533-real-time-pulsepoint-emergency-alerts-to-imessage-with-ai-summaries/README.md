# ⚡ Real-time PulsePoint emergency alerts to iMessage with AI summaries

> ⚡ **453 views** · ⚡ [Personal Productivity](../)

## Description

# 🚨 Emergency Alerts Reporter to iMessage

This n8n template fetches real-time emergency incident alerts from PulsePoint for a specific agency and delivers them directly to any phone number via iMessage using the Blooio API. It's designed to keep users informed with clear, AI-summarized reports of emergency activity near them—automatically and reliably.

Use cases are powerful and immediate:  
- Get real-time fire/medical alerts for your neighborhood.  
- Use it for family, local safety groups, or even emergency response teams.  
- Convert technical dispatch data into readable updates with emojis and plain English.

---

## 🧠 Good to Know

- You’ll need a **PulsePoint agency ID** (see instructions below).  
- iMessages are sent using [Blooio’s API](https://blooio.com) (which supports Apple’s iMessage and fallback RCS/SMS).  
- Messages are AI-enhanced using OpenAI's `o4-mini` model to summarize incident reports with context and urgency.  
- The workflow runs every hour, but this can be configured to match your needs.  
- Each report is sent **only once**, thanks to persistent tracking of seen incident IDs in workflow static memory.

---

## ⚙️ How it Works

1. **Trigger**: A Schedule Trigger (every hour) or manual start kicks off the flow.  
2. **Get Alerts**: A `code` node fetches the latest PulsePoint incidents for a specified agency and decrypts the data.  
3. **Filter New Incidents**: We store previously seen incident IDs to prevent duplicate alerts.  
4. **Merge Incidents**: All new incident details are merged into a single payload.  
5. **Condition Check**: If there are no new incidents, nothing is sent.  
6. **AI Summary**: The incident data is passed to an AI agent for summarization with human-friendly emojis and formatting.  
7. **Send Message**: The final summary is sent via Blooio’s API to your phone using iMessage.

---

## 📝 How to Use

1. **Get Your PulsePoint Agency ID**:  
   - Visit [https://web.pulsepoint.org](https://web.pulsepoint.org).  
   - Find your agency by location or name.  
   - Inspect the API call or browser network log to get the `agencyid` (e.g. `19100` from a URL like `?agencyid=19100`).  

2. **Set Up Blooio for Messaging**:  
   - Sign up at [https://blooio.com](https://blooio.com).  
   - Go to your account and retrieve your Bearer API Key.  
   - Pricing details available on their [pricing page](https://blooio.com#pricing).  
   - Add your key to the HTTP Request node as a **Bearer Token**.  

3. **OpenAI API**:  
   - Create or use an existing OpenAI account.  
   - Use the `o4-mini` model for efficient, readable summaries.  
   - Get your OpenAI API key from [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys).  

4. **Add Your Phone Number**:  
   - Replace `+1111112222` with your actual number (international format).  
   - You can also modify the message content or prepend special tags/emojis.

---

## ✅ Requirements

- **PulsePoint agency ID** – See usage instructions above  
- **OpenAI API Key** – [Get API Key](https://platform.openai.com/account/api-keys)  
- **Blooio Account & Bearer Token** – [Get Started](https://blooio.com)  
- **Phone number** for iMessage delivery  

---

## 🔧 Customizing This Workflow

- **Change the schedule** to get alerts more or less frequently  
- **Add filters** to only get alerts for specific incident types (e.g. fires, traffic accidents)  
- **Send to groups**: Expand to send alerts to multiple recipients or use Slack instead of iMessage  
- **Use different AI prompts** to get detailed, humorous, or abbreviated alerts depending on your audience  

---

With just a few credentials and a phone number, you’ll have real-time incident alerts with human-friendly summaries at your fingertips.

🛠️ Stay informed. Stay safe.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
