# ⚡ Transforming emails into podcasts

> ⚡ **5,575 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — Since TikTok doesn't have a public API, getting data usually means fragile HTTP scraping. [ScraperNode](https://scrapernode.com/tiktok) is a community node that gives you clean JSON for [TikTok profiles](https://scrapernode.com/tiktok/scrapers/profiles), [videos](https://scrapernode.com/tiktok/scrapers/posts), and [comments](https://scrapernode.com/tiktok/scrapers/comments) — drop it into your workflow and skip the parsing.

## Description

# Transforming Emails into Podcasts 🎙️

- [Check out this channel](https://t.me/aqsati_services_bot) for example.

The n8n workflow described here aims to revolutionize the way users engage with promotional emails by converting them into entertaining audio podcasts. This innovative project leverages automation through n8n to streamline tasks and enhance user experience.

## Project Benefit 🎧🌟

The primary goal of this project is to transform "CATEGORY_PROMOTIONS" emails into engaging audio content. By converting text into speech, users can enjoy promotional material hands-free, making it easier to consume information while on the go or relaxing. The workflow consists of several key steps orchestrated seamlessly to deliver a delightful experience to users.

### How to Use the Workflow:

1. **Gmail trigger Node**: Initiates the workflow by fetching "CATEGORY_PROMOTIONS" emails at regular intervals.

     The Gmail Trigger node in your N8N workflow is set to poll for new emails every minute and is configured to filter emails with the label "CATEGORY_PROMOTIONS" before triggering the workflow.

   #### Steps to Use Filters Inside the Gmail Trigger Node:



   Configure Gmail Trigger Node:

   Set "Poll Times" to "Every Minute" to check for new emails at regular intervals.
Enable the "Simple" toggle if you want to simplify the node interface.
Under "Filters", specify the label IDs you want to filter by. In this case, it's set to "CATEGORY_PROMOTIONS".
Adjust any additional options as needed.


    // Configure Gmail Trigger node pollTimes: { item: [ { mode: "everyMinute" } ] }, simple: false, filters: { labelIds: [ "CATEGORY_PROMOTIONS" ] }, options: {}



      **Save and Execute**:
   - Save your workflow and execute it to start monitoring your Gmail account for new emails with the specified label filter.

     By following these steps, your workflow will effectively trigger based on new emails that match the "CATEGORY_PROMOTIONS" label in your Gmail account.

2. **Get message content Node**: Extracts the email content for processing.
      
3. **Summarization Chain Node**: Generates concise summaries using advanced methods for better readability.
   
4. **Delete the unnecessary items Node**: Removes irrelevant details from the email content.
   
5. **Text to Free TTS Node**: Converts the summary text into speech using Free TTS technology.
   
6. **Convert from base64 to File Node**: Transforms the audio data into a compatible file format.
   
7. **Merge Text with Audio Node**: Combines the text and audio components seamlessly.
   
8. **Aggregate in same cell Node**: Gathers all processed data for finalization.
   
9. **Send Message to Telegram Node**: Dispatches the audio message along with a caption to a designated Telegram chat ID.

By automating these tasks, the workflow ensures efficient communication and delivers content in a more engaging format, fostering a positive user experience.

### Configuration Instructions:

The configuration of this workflow involves setting up the necessary nodes and establishing connections between them. Each node performs a specific function crucial to the overall operation of the workflow. Additionally, credentials need to be provided for accessing Gmail and OpenAI services to enable seamless data processing and summarization.

## Utilizing Text-to-Speech API 🎧

In addition to n8n automation, an external Text-to-Speech API plays a pivotal role in generating audio content from text data. By sending a POST request with JSON data containing the text and voice preferences, users can quickly receive audio files of the converted content. The API offers a straightforward interface for text-to-speech conversion, making it ideal for creating audio clips efficiently.

To access this API, simply submit the desired text and voice selection to receive the generated speech audio file. The API endpoint can be accessed at [https://tiktok-tts.weilnet.workers.dev/api/generation](https://tiktok-tts.weilnet.workers.dev/api/generation) or through [https://tiktokvoicegenerator.com/](https://tiktokvoicegenerator.com/).

In conclusion, this n8n workflow coupled with a Text-to-Speech API presents a powerful solution for transforming emails into captivating podcasts, enhancing user engagement and communication effectiveness. By embracing automation and innovative technologies, this project aims to improve user experience and streamline content delivery processes. 🌈✨🚀

## 🔗 Nodes Used

HTTP Request, Telegram, Gmail, Gmail Trigger, Summarization Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
