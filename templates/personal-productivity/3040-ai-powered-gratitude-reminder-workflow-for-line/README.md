# ⚡ AI-powered gratitude reminder workflow for LINE

> ⚡ **948 views** · ⚡ [Personal Productivity](../)

## Description

This workflow template, "Daily Gratitude Reminder Bot for LINE," is designed to help users cultivate a habit of gratitude by sending personalized, AI-generated reminders every evening at 9:00 PM. Using Azure OpenAI , the bot generates varied and engaging messages to prompt users to reflect on the positive aspects of their day. The reminders are then sent directly to users via the LINE messaging platform , ensuring a seamless and impactful experience.

Whether you're a developer, counselor, or business owner, this template offers a customizable and scalable solution for promoting mental wellness and fostering a culture of gratitude.

profile
Qwen2.5-Max
2:56 pm
Here’s a polished and detailed description for your "Daily Gratitude Reminder Bot for LINE" template, following the submission guidelines provided. This description is structured to meet all the requirements, including SEO optimization, clarity, and user convenience.

Daily Gratitude Reminder Bot for LINE
This workflow template, "Daily Gratitude Reminder Bot for LINE," is designed to help users cultivate a habit of gratitude by sending personalized, AI-generated reminders every evening at 9:00 PM. Using Azure OpenAI , the bot generates varied and engaging messages to prompt users to reflect on the positive aspects of their day. The reminders are then sent directly to users via the LINE messaging platform , ensuring a seamless and impactful experience.

Whether you're a developer, counselor, or business owner, this template offers a customizable and scalable solution for promoting mental wellness and fostering a culture of gratitude.

## Who Is This Template For?
**Developers** who want to integrate AI-powered workflows into messaging platforms like LINE.
**Counselors & Therapists** looking to encourage mindfulness and emotional well-being among their clients.
**Businesses & Organizations** focused on employee wellness or customer engagement through positive reinforcement.
**Educators & Nonprofits** seeking tools to promote mental health awareness and self-care practices.


## What Problem Does This Workflow Solve?
Gratitude journaling has been proven to improve mental health, reduce stress, and increase overall happiness. However, many people struggle to maintain the habit due to busy schedules or forgetfulness. This workflow solves that problem by automating daily reminders to reflect on positive experiences, making it easier for users to build and sustain a gratitude practice.

## What This Workflow Does
1. Scheduled Trigger:
The workflow is triggered every evening at 9:00 PM using a schedule node.
2. AI-Powered Message Generation:
An Azure OpenAI Chat Model generates a unique and engaging reminder message with a temperature setting of 0.9 to ensure variety and creativity.
3. Message Formatting:
The generated message is reformatted to comply with the LINE Push API requirements, ensuring smooth delivery.
4. Push Notification via LINE:
The formatted message is sent to the user via the LINE Push API , delivering the reminder directly to their chat.

## Setup Guide
**Pre-Requisites**
- Access to an Azure OpenAI account with credentials.
- A LINE Developers Console account with access to the Push API.
- Basic knowledge of n8n workflows and JSON formatting.

## How to Customize This Workflow to Your Needs
- Change the Time: Adjust the schedule trigger to send reminders at a different time.
Modify the Prompt: Edit the AI model's input prompt to generate messages tailored to your audience (e.g., focus on work achievements or personal growth).
- Expand Recipients: Update the LINE Push API node to send reminders to multiple users or groups.
- Integrate Additional Features: Add nodes to log user responses or track engagement metrics.
Why Use This Template?
- Promotes Mental Wellness: Encourages users to reflect on positive experiences, improving emotional well-being.
- Highly Customizable: Easily adapt the workflow to suit different audiences and use cases.
- Scalable: Send reminders to one user or thousands, making it suitable for both personal and organizational use.
- AI-Powered Creativity: Avoid repetitive messages by leveraging AI to generate fresh and engaging content.

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Basic LLM Chain, Azure OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
