# 🎬 🉑 Generate Anki flash cards for language learning with Google Translate and GPT

> ⚡ **4,516 views** · 🎬 [Content Creation & Video](../)

## Description

### Context
Hey! I'm [Samir](https://samirsaci.com), a **Supply Chain Data Scientist from Paris** who spent six years in China studying and working while **struggling to learn Mandarin.**

![I want to study Mandarin (In Mandarin)](https://www.samirsaci.com/content/images/size/w1000/2025/03/image-23.png)

I know the challenges of **mastering a complex language** like Chinese and my greatest support was **flash cards**. Therefore,  I designed this workflow to support fellow Mandarin learners by **automating flashcard creation** using n8n, so they can focus more on learning and less on manual data entry.

📬 For business inquiries, you can add me on [Here](https://www.linkedin.com/in/samir-saci)

### Who is this template for?
This workflow template is designed for **language learners** and **educators** who want to automate the creation of flashcards for Mandarin (or any other language) using **Google Translate API**, an **AI agent** for phonetic transcription and generating an illustrative sentence and a **free image retrieval API**.

![Example of Flash Card](https://miro.medium.com/max/1400/1*q3203G-NbZGg1dqHewNgWA.png) 

#### Why?
If you use the open-source application **Anki**, this workflow will help you automatically generate personalized study materials.

#### How?
Let us imagine you want to learn how to say the word **Contract** in Mandarin.

The workflow will automatically
1. **Translate the word** in Simplified Mandarin *(Mandarin: 合同)*.
2. Provide the **phonetic transcription** *(Pinyin: Hétóng)* 
3. Generate **an example sentence** *(Example: 我们签订了一份合同.)*
4. Download an **illustrative picture** (For example, a picture of a contract signature)

![Example of Google Sheet](https://www.samirsaci.com/content/images/size/w1600/2025/03/image-1.png)

All these fields are automatically recorded in a Google Sheet, making it easy to import into Anki and generate flashcards instantly

### What do I need to start?
This workflow can be used with the free tier plans of the services used. It does not require any advanced programming skills.
#### Prerequisite
- A **Google Drive Account** with a folder including a Google Sheet
- API Credentials: **Google Drive API**, **Google Sheets API** and **Google Translate API** activated with OAuth2 credentials
- A free API key of pexels.com
- A google sheet with the columns
#### Next
Follow the **sticky notes** to set up the parameters inside each node and get ready to pump your learning skills.

I have detailed the steps in a **short tutorial** 👇

[![image.png](https://www.samirsaci.com/content/images/2025/04/Flash-Cards.png)](https://youtu.be/2mRZJATUTDw)

 🎥 [Check My Tutorial](https://youtu.be/2mRZJATUTDw)

### Notes
- This workflow can be used **for any language**. In the AI Agent prompt, you just need to replace the word pinyin with phonetic transcription.
- You can adapt the trigger to operate the workflow in the way you want. These operations can be performed by batch or triggered by Telegram, email, or webhook.
- If you want to learn more about how I used Anki flash cards to learn mandarin: 🈷️ [Blog Article about Anki Flash Cards](https://www.samirsaci.com/automate-flash-cards-creation-for-language-learning-with-python/)


*This workflow has been created with N8N  1.82.1*
*Submitted: March 17th, 2025*

## 🔗 Nodes Used

Google Sheets, HTTP Request, Google Drive, Google Translate, Google Sheets Trigger, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
