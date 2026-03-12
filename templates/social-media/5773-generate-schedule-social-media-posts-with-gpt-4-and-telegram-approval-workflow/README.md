# 📱 Generate & schedule social media posts with GPT-4 and Telegram approval workflow

> ⚡ **3,046 views** · 📱 [Social Media & Email Marketing](../)

## Description

Generate & Schedule Social Media Posts with GPT-4 and Telegram Approval Workflow

This comprehensive content automation system features 23 nodes that seamlessly orchestrate AI-powered content creation, validation, and multi-platform publishing through Telegram interaction. It supports posting to major platforms like Twitter, LinkedIn, Facebook, Instagram, and more via the Upload-Post API.

Core Components
Telegram Integration: Bidirectional messaging with approval workflows and real-time notifications.

AI Content Engine: Configurable language models (GPT-4, Claude, etc.) via OpenRouter with structured output parsing.

Content Validation: Character count enforcement (240-265), format checking, and quality threshold monitoring.

Multi-Platform Publishing: Post on any social media platform with Upload-Post API - better and easier to use than Blotato, with a dedicated n8n community node.

Approval System: Preview and approve/reject functionality before content goes live.

Web Research: Optional Tavily integration for real-time information gathering.

Target Users
Content creators seeking consistent social media presence.

Digital marketers managing multiple brand accounts.

Entrepreneurs wanting automated thought leadership.

Agencies needing scalable content solutions.

Small businesses without dedicated social media teams.

Setup Requirements
To get started, you'll need:

Telegram Bot: Create via @BotFather and configure webhook.

Required APIs:

OpenRouter (for AI model access).

Upload-Post API (superior alternative to Blotato with community node support).

Tavily API (optional for research).

n8n Prerequisites:

Version 1.7+ with Langchain nodes.

Webhook configuration enabled.

Proper credential storage setup.

Disclaimer: This template uses community-supported nodes, such as the Upload-Post API node. These may require additional setup and could change with n8n updates. Always verify compatibility and test in a safe environment.

Step-by-Step Setup Guide
Install n8n: Ensure you're running n8n version 1.7 or higher. Enable webhook configurations in your settings.

Set Up Credentials: In n8n, add credentials for OpenRouter, Upload-Post API, and optionally Tavily. Store them securely.

Create Telegram Bot: Go to Telegram, search for @BotFather, and create a new bot. Note the token and set up a webhook pointing to your n8n instance.

Import the Workflow: Copy the workflow JSON (available in the template submission) and import it into your n8n dashboard.

Configure Nodes:

Set your AI model preferences in the OpenRouter node.

Link your social media accounts via the Upload-Post API node.

Adjust validation settings (e.g., character limits, retry attempts) as needed.

Test the Workflow: Trigger a test run via Telegram by sending a content request. Approve or reject the preview, and monitor the output.

Schedule or Automate: Use n8n's scheduling features for automated triggers, or run manually for on-demand posts.

Usage Instructions
Initiate via Telegram: Send a message to your bot with a topic or prompt (e.g., "Create a post about AI automation for entrepreneurs").

AI Generation: The system generates content using your chosen model, with optional web research.

Validation Check: Content is automatically validated for length, quality (70% pass threshold), and format.

Approval Workflow: Receive a preview in Telegram. Reply with "approve" to post, or "reject" to retry (up to 3 attempts).

Publishing: Approved content posts to your selected platforms. Get notifications on success or errors.

Customization: Adapt for single posts, 3-6 post threads, or different tones (business, creative, educational, personal, technical). Use scheduling for consistent posting.

Workflow Features
Universal Platform Support: Post to any social media platform via Upload-Post API.

Scheduling Flexibility: Automated triggers or manual execution.

Content Types: Single posts or multi-post threads.

Quality Control: 30% error tolerance with detailed validation reporting.

Character Optimization: Enforced 240-265 character range for maximum engagement.

Topic Versatility: Adapts tone and style based on content type.

Error Handling: Comprehensive validation with helpful user feedback.

Performance Specifications:

AI retry attempts: 3 for reliability.

Validation threshold: 70% pass rate.

Format support: Single posts and 3-6 post threads.

Platform coverage: Any social media platform through Upload-Post API.

Research capability: Optional web search for trending topics.

Why Upload-Post API?
Community-supported n8n node for easier integration.

More reliable and feature-rich than Blotato.

Supports all major social platforms.

Active development and support.

Workflow Image
![n8n_AutomatedContent.png](fileId:1752)

Need help customizing this workflow for your specific use case, Femi? As a fellow entrepreneur passionate about automation and business development, I'd be happy to consult. Connect with me on LinkedIn: https://www.linkedin.com/in/femi-adedayo-h44/ or email for support. Let's make your AI automation agency even more efficient!

## 🔗 Nodes Used

Telegram, Telegram Trigger, Schedule Trigger, AI Agent, Structured Output Parser, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
