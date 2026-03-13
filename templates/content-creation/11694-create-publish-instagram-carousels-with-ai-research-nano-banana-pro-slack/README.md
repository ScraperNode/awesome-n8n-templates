# 🎬 Create & publish Instagram carousels with AI research, Nano Banana Pro & Slack

> ⚡ **703 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you've run into Facebook's Graph API permission restrictions, [ScraperNode](https://scrapernode.com/facebook) is a community node that scrapes [pages](https://scrapernode.com/facebook/scrapers/profiles), [groups](https://scrapernode.com/facebook/scrapers/groups), [posts](https://scrapernode.com/facebook/scrapers/posts), and [comments](https://scrapernode.com/facebook/scrapers/comments) directly — no app review needed.
>
> <a href="https://scrapernode.com/facebook"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

This workflow allows you to complete the entire process of creating and publishing detailed Instagram Carousels—from research to posting—without ever leaving Slack. It leverages **Nano Banana Pro**, a state-of-the-art image generation model capable of rendering perfect text, to create professional "consultant-style" slides that AI previously struggled with.

## How it works
1.  **Start in Slack**: You trigger the workflow by entering a topic ensuring the entire process starts in Slack.
2.  **Research (AI Agent)**: An AI agent searches the web for deep insights on the topic.
3.  **Drafting (AI Agent)**: Structures research into a carousel format designed for engagement.
4.  **Review in Slack**: The draft is sent to Slack as a formatted message. You approve it with a single click.
5.  **Image Generation**: Upon approval, **Nano Banana Pro** generates professional infographic-style images with legible, high-density text.
6.  **Final Review in Slack**: The created images and caption are sent back to Slack.
7.  **Publish from Slack**: One final approval in Slack automatically publishes the Carousel to Instagram.

## Setup steps
1.  **Configure Credentials**:
    *   **OpenAI API**: Required for the Research and Drafting agents (GPT-4o/GPT-5 recommended).
    *   **Slack API**: Required for notifications and approval buttons.
    *   **Kie.ai (Nano Banana Pro)**: Required for high-quality text-in-image generation.
    *   **Facebook Graph API**: Required for publishing to Instagram.
2.  **Set IDs**:
    *   Open the "Slack Approval" nodes and set your `Channel ID`.
    *   Open the "Instagram" nodes and set your `Instagram Business Account ID`.
3.  **Customize Prompts (Optional)**: Adjust the system prompts in the AI nodes to match your brand's tone of voice.

## Requirements
*   **n8n version**: 1.0+ (AI nodes required)
*   **Kie.ai Account**: For using the Nano Banana Pro model (excellent at rendering text).
*   **Slack Workspace**: For the Human-in-the-loop approval process.

## 🔗 Nodes Used

HTTP Request, Slack, Facebook Graph API, Schedule Trigger, Basic LLM Chain, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
