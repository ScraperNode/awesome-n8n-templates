# 📱 📰 EU sustainability news curation with RSS, GPT, Gmail, ElevenLabs & Telegram

> ⚡ **250 views** · 📱 [Social Media & Email Marketing](../)

## Description

*Tags: EU News, RSS, AI Classifier, Data Table, Email Digest, Automation, n8n*

### Context

Hi! I’m [Samir](https://samirsaci.com) , Supply Chain Engineer and Data Scientist based in Paris, and founder of the startup [LogiGreen](https://logi-green.com).

This workflow helps me closely follow EU sustainability news that impacts my business.

[![Workflow Overview](https://www.samirsaci.com/content/images/size/w1600/2025/11/image-18.png)](https://youtu.be/vNavNGRqcK4)

&gt; Use this assistant to automatically curate and summarize EU news tailored to the topics that matter most to you.

By default, the workflow filters **sustainability-related news**, but you can easily adapt the topic description (e.g. AI, trade, digital, energy) using the edit node **Topic Config**.

📬 For business inquiries, you can find me on [LinkedIn](https://www.linkedin.com/in/samir-saci)

### Who is this template for?

This template is designed for:

- **Policy analysts and researchers** who want to track EU updates on a specific topic
- **Consultants and sustainability teams** who need a daily view of relevant announcements
- **Business owners or startup founders**, like myself, who need to adapt their business strategies to the recent news

### What does this workflow do?

This workflow acts as an **AI-powered EU news filter and digest generator**.

1. **Fetches the latest press releases** from the Council of the EU RSS feed every morning at 09:00
2. **Filters out** all the news already recorded to avoid duplicates  
3. **Uses an AI classifier** (OpenAI) to decide whether each article is relevant to your topic  
4. **Stores only the relevant items** in an **n8n Data	 Table**  
5. **Generates a formatted HTML newsletter** grouping the day’s relevant articles  
6. **Sends the digest by email** using the Gmail node
7. **Generates an audio summary** with ElevenLabs that is sent via Telegram

Here’s an example of the generated email:

[![Digest Example](https://www.samirsaci.com/content/images/size/w1000/2025/11/image-5.png)](https://youtu.be/vNavNGRqcK4)

### 🎥 Tutorial

A complete tutorial (with explanations of every node) is available on YouTube:

[![Tutorial + Demo](https://www.samirsaci.com/content/images/2025/11/temp-9.png)](https://youtu.be/vNavNGRqcK4)

### Next Steps

🗒️ Inside the workflow:

- Replace the Data Table reference with your own  
- Set up your Gmail, OpenAI and ElevenLabs credentials
- Update the recipient email address in the Gmail node
- Customize the HTML digest (colors, logo, style) in the Code node  
- Adjust the schedule time if necessary  

*Submitted: 18 November 2025*
*Template designed with n8n version 1.116.2*

## 🔗 Nodes Used

RSS Read, Telegram, Gmail, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
