# 🎬 Clone and change your voice 🤖🎙️with Elevenlabs and Telegram

> ⚡ **615 views** · 🎬 [Content Creation & Video](../)

## Description

This workflow creates a voice AI assistant accessible via Telegram that leverages [ElevenLabs](https://try.elevenlabs.io/ahkbf00hocnu)* powerful voice synthesis technology. Users can either **clone their own voice** or **transform their voice** using pre-existing voice models, all through simple voice messages sent to a Telegram bot.

*ONLY FOR STARTER, CREATOR, PRO PLAN

This workflow allows users to:
1. **Clone their voice** by sending a voice message to a Telegram bot (creates a new voice profile on ElevenLabs)
2. **Change their voice** to a cloned voice and save the output to Google Drive

---

### For Best Results

**Important Considerations for Best Results:**
For optimal voice cloning via Telegram voice messages:


**1. Recording Quality & Environment**
- Record in a quiet room with minimal echo and background noise
- Use a consistent microphone position (10-15cm from mouth)
- Ensure clear audio without distortion or clipping

**2. Content Selection & Variety**
- Send 1 voice messages totaling 5-10 minutes of speech
- Include diverse vocal sounds, tones, and natural speaking cadence
- Use complete sentences rather than isolated words

**3. Audio Consistency**
- Maintain consistent volume, tone, and distance from microphone
- Avoid interruptions, laughter, coughs, or background voices
- Speak naturally without artificial effects or filters

**4. Technical Preparation**
- Ensure Telegram isn't overly compressing audio (use HQ recording)
- Record all messages in the same session with same conditions
- Include both neutral speech and varied emotional expressions

---

### **How it works**

1. **Trigger**  
   The workflow starts with a Telegram trigger that listens for incoming messages (text, voice notes, or photos).

2. **Authorization check**  
   A Code node checks whether the sender’s Telegram user ID matches your predefined ID. If not, the process stops.

3. **Message routing**  
   A Switch node routes the message based on its type:
   - **Text** → Not processed further in this flow.
   - **Voice message** → Sent to the “Get audio” node to retrieve the audio file from Telegram.
   - **Photo** → Not processed further in this flow.

4. **Two main options**  
   From the “Get audio” node, the workflow splits into two possible paths:
   - **Option 1 – Clone voice**  
     The audio file is sent to ElevenLabs via an HTTP request to create a new cloned voice. The voice ID is returned and can be saved for later use.
   - **Option 2 – Voice changer**  
     The audio is sent to ElevenLabs for speech-to-speech conversion using a pre-existing cloned voice (voice ID must be set in the node parameters). The resulting audio is saved to Google Drive.

5. **Output**  
   - Cloned voice ID (for Option 1).  
   - Converted audio file uploaded to Google Drive (for Option 2).

---

### **Set up steps**

1. **Telegram bot setup**  
   - Create a bot via BotFather and obtain the API token.  
   - Set up the Telegram Trigger node with your bot credentials.

2. **Authorization configuration**  
   - In the “Sanitaze” Code node, replace `XXX` with your Telegram user ID to restrict access.

3. **ElevenLabs API setup**  
   - Get an API key from ElevenLabs.  
   - Configure the HTTP Request nodes (“Create Cloned Voice” and “Generate cloned audio”) with:
     - API key in the `Xi-Api-Key` header.  
     - Appropriate endpoint URLs (including voice ID for speech-to-speech).

4. **Google Drive setup** (for Option 2)  
   - Set up Google Drive OAuth2 credentials in n8n.  
   - Specify the target folder ID in the “Upload file” node.

5. **Voice ID configuration**  
   - For voice cloning: The voice name can be customized in the “Create Cloned Voice” node.  
   - For voice changing: Replace `XXX` in the “Generate cloned audio” node URL with your ElevenLabs voice ID.

6. **Test the workflow**  
   - Activate the workflow.  
   - Send a voice note from your authorized Telegram account to trigger cloning or voice conversion.

---

👉 [Subscribe to my new **YouTube channel**](https://youtube.com/@n3witalia). Here I’ll share videos and Shorts with practical tutorials and **FREE templates for n8n**.

[![image](https://n3wstorage.b-cdn.net/n3witalia/youtube-n8n-cover.jpg)](https://youtube.com/@n3witalia)


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Drive

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

YouTube's API quotas can be a bottleneck when you're pulling data at scale. [ScraperNode](https://scrapernode.com/youtube) is a community node with dedicated scrapers for [channels](https://scrapernode.com/youtube/scrapers/channels), [videos](https://scrapernode.com/youtube/scrapers/videos), and [comments](https://scrapernode.com/youtube/scrapers/comments) — no quota limits, just structured data.
