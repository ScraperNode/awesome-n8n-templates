# ⚡ LINE messages with GPT: Save notes, namecard data and tasks

> ⚡ **2,465 views** · ⚡ [Personal Productivity](../)

> 💡 **Pro Tip** — HTTP Request scraping tends to break when sites update their markup. If you're scraping a major platform, check if [ScraperNode](https://scrapernode.com) covers it — it has maintained scrapers for [LinkedIn](https://scrapernode.com/linkedin), [Instagram](https://scrapernode.com/instagram), [TikTok](https://scrapernode.com/tiktok), [YouTube](https://scrapernode.com/youtube), and [20+ other platforms](https://scrapernode.com) that return structured data.
>
> <a href="https://scrapernode.com"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow template, "Personal Assistant to Note Messages and Extract Namecard Information" is designed to streamline the processing of incoming messages on the LINE messaging platform. It integrates with powerful tools like Microsoft Teams , Microsoft To Do , OneDrive , and OpenRouter.ai to handle tasks such as saving notes, extracting namecard information, and organizing images. Whether you’re managing personal productivity or automating workflows for teams, this template offers a versatile and customizable solution.

By leveraging this workflow, you can automate repetitive tasks, improve collaboration, and enhance efficiency in handling LINE messages.

## Who Is This Template For?
This template is ideal for:

- Professionals: Who want to save important messages, extract data from namecards, or organize images automatically.
- Teams: Looking to integrate LINE messages into tools like Microsoft Teams and Microsoft To Do for better collaboration.
- Developers: Seeking to build intelligent workflows that process text, images, and other inputs from LINE.
- Business Owners: Who need to manage customer interactions, follow-ups, and task tracking efficiently.

## What Problem Does This Workflow Solve?
Managing incoming messages on LINE can be time-consuming, especially when dealing with diverse input types like text, images, and namecards. This workflow solves that problem by:
- Automatically identifying and routing different message types (text, images, namecards) to appropriate actions.
- Extracting structured data from namecards and saving it for follow-up tasks.
- Uploading images to OneDrive and saving text messages to Microsoft Teams or Microsoft To Do for easy access.
- Sending real-time feedback to users via LINE to confirm that their messages have been processed.

## What This Workflow Does
- Receive Messages via LINE Webhook:
The workflow is triggered whenever a user sends a message (text, image, or other types) to the LINE bot.
- Display Loading Animation:
A loading animation is displayed to reassure the user that their request is being processed.
Route Input Types:

The workflow uses a Switch node to determine the type of input:
- Text Starting with "T": Adds the message as a task in Microsoft To Do.
- Plain Text: Saves the message in Microsoft Teams under a designated channel (e.g., "Notes").
- Images: Identifies whether the image is a namecard, handwritten note, or other content, then processes accordingly.
- Unsupported formats trigger a polite response indicating the limitation.
Process Namecards:

**Images **
If the image is identified as a namecard, the workflow extracts structured data (e.g., name, email, phone number) using OpenRouter.ai and saves it to Microsoft To Do for follow-up tasks.
Save Images to OneDrive:

Images are uploaded to OneDrive, renamed based on their unique message ID, and linked in Microsoft Teams for reference.

**Send Feedback via LINE:**
The workflow replies to the user with confirmation messages, such as "[ Task Created ]" or "[ Message Saved ]."

## Setup Guide
**Pre-Requisites**
- Access to the LINE Developers Console to configure your webhook and bot.
- Accounts for Microsoft Teams , Microsoft To Do, and OneDrive with API access.
- An OpenRouter.ai account with credentials to access models like GPT-4o.
- Basic knowledge of APIs, webhooks, and JSON formatting.

**Step-by-Step Setup**
1) Configure the LINE Webhook:
- Go to the LINE Developers Console and set up a webhook to receive incoming messages.
- Copy the Webhook URL from the Line Webhook node and paste it into the LINE Console.
- Remove any "test" configurations when moving to production.
2) Set Up Microsoft Integrations:
- Connect your Microsoft Teams, Microsoft To Do, and OneDrive accounts to the respective nodes in the workflow.
3) Set Up OpenRouter.ai:
- Create an account on OpenRouter.ai and obtain your API credentials.
- Connect your credentials to the OpenRouter nodes in the workflow.

**Test the Workflow:**
- Simulate sending text, images, and namecards to the LINE bot to verify that all actions are processed correctly.

## How to Customize This Workflow to Your Needs
- Add More Actions: Extend the workflow to handle additional input types or integrate with other tools.
- Enhance Image Processing: Use advanced OCR tools to improve text extraction from complex images.
- Customize Feedback Messages: Modify the reply format to include emojis, links, or other formatting options.
- Expand Use Cases: Adapt the workflow for specific industries, such as sales or customer support, by tailoring the actions to relevant tasks.

**Why Use This Template?**
- Versatile Automation: Handles multiple input types (text, images, namecards) with ease.
- Seamless Integration: Connects LINE messages to popular productivity tools like Microsoft Teams and To Do.
- Structured Data Extraction: Extracts and organizes data from namecards, saving time and effort.
- Real-Time Feedback: Keeps users informed about the status of their requests with instant notifications.

## 🔗 Nodes Used

HTTP Request, Webhook, Microsoft OneDrive, Microsoft Teams, Microsoft To Do, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
