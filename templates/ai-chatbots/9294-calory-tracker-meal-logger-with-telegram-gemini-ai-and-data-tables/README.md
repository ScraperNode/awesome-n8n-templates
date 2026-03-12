# 🤖 Calory tracker & meal logger with Telegram, Gemini AI and data tables

> ⚡ **88 views** · 🤖 [AI Chatbots & Agents](../)

## Description

# This can be your Alternative to Cal AI App

## Overview:
A comprehensive n8n workflow demonstrating advanced AI agent orchestration, stateful conversation management, and multi-modal input processing for nutrition tracking applications.

#### Technical Architecture:
This workflow showcases production-ready patterns for building complex conversational AI systems in n8n:

1. Multi-Agent System Design

Router Agent: Analyzes user intent and routes to specialized sub-agents
Registration Agent: Handles new user onboarding with guided data collection
Meal Logging Agent: Processes text, image, and voice inputs for nutrition analysis
Update Agent: Manages multi-turn conversations for meal corrections
Report Agent: Generates daily nutrition summaries
Profile Agent: Handles user preference updates

2. Stateful Conversation Management
The workflow implements a state machine using n8n Data Tables:

Tracks conversation context across messages
Enables multi-step workflows (e.g., "get meal ID → ask for new description → update")
Prevents context loss in long conversations
Auto-resets state after task completion

3. Multi-Modal Input Processing

Text: Direct AI analysis using Google Gemini
Images: Gemini Vision API with specialized nutrition analysis prompts
Voice: Audio-to-text transcription followed by analysis
Unified output format regardless of input type

4. Advanced Prompt Engineering

Specialized system prompts for each agent role
Structured output formatting for reliable data extraction
Regional cuisine knowledge (African/West African foods)
Error handling and clarification requests built into prompts

5. Data Persistence Layer
Uses n8n Data Tables for:

User profiles (calories, protein targets, preferences)
Meal logs (descriptions, macros, timestamps)
Conversation state (current step, context variables)

6. Telegram Integration

MarkdownV2 formatting with auto-chunking for long messages
Handles all Telegram message types (text, photo, voice)
"Typing" indicators for better UX

#### Learning Outcomes:
By studying this workflow, you'll understand:

How to build agent hierarchies with specialized roles
State management patterns for complex conversations
Multi-modal AI input processing techniques
Production data persistence strategies in n8n
Scalable webhook-based bot architecture

#### Technical Requirements:

n8n version 1.0+ (uses Data Tables feature)
Google Gemini API access
Telegram Bot Token
Basic understanding of: AI agents, webhook triggers, data tables

#### Difficulty Level: Intermediate to Advanced
Use Cases Beyond Nutrition:
The patterns here apply to any domain requiring:

Multi-step user onboarding
Data collection through conversation
Record updates via natural language
Report generation
Profile management

#### Components:

50+ nodes demonstrating n8n AI features
6 specialized AI agents
3 data tables with structured schemas
Custom JavaScript for MIME type handling and markdown formatting
Integration with Google Gemini (text + vision + audio models)

#### What Makes This Workflow Unique:
Most n8n AI examples show simple Q&A bots. This demonstrates enterprise-grade conversation management with real data persistence, making it suitable for actual production deployment.

### SETUP GUIDE

### Need Help?

### Reach me: https://www.linkedin.com/in/gerald-akhidenor-1ab1a45/

### Work with me: https://dominixai.com/

### My website: https://jobmonkey.dev

### My email: denorgerald@gmail.com


Cal AI Nutrition Bot - Complete Setup Guide

Who This Guide Is For:
This workflow is designed for beginner to intermediate no-code builders who want to launch a nutrition tracking bot. You should be comfortable:

Creating accounts on platforms (n8n, Google Cloud, Telegram)
Following step-by-step instructions
Copy-pasting API keys
Basic JSON importing

No programming experience required. If you can use Zapier or Make.com, you can set this up.

Prerequisites (30 minutes to gather)
1. n8n Account

Option A (Easiest): Sign up for n8n Cloud at n8n.io (14-day free trial, then $20/month)
Option B (Free): Self-host n8n on DigitalOcean/Railway/your server

2. Google Gemini API Key

Go to ai.google.dev
Click "Get API Key"
Create new project (free tier: 15 requests/minute)
Copy your API key

3. Telegram Bot

Open Telegram and search for @BotFather
Send /newbot command
Follow prompts to create your bot
Copy the bot token (looks like: 1234567890:ABCdefGHIjklMNOpqrsTUVwxyz)


Step 1: Import the Workflow (5 minutes)

Log into your n8n instance
Click "New Workflow" in top left
Click the three-dot menu → Import from File
Upload the My_workflow.json file you downloaded
The workflow will appear with all nodes connected


Step 2: Create Data Tables (10 minutes)
The workflow uses three data tables to store information. Create them exactly as shown:
Table 1: Cal AI Profiles

Navigate to n8n Data Tables section
Click Create Data Table
Name: Cal AI Profiles
Add columns:

User_ID (Text)
Name (Text)
Email (Text)
Calories_target (Number)
Protein_target (Number)
Country (Text)

Table 2: Cal AI Meals

Create new table: Cal AI Meals
Add columns:

Meal_ID (Text)
User_ID (Text)
Date (Text)
Meal_description (Text)
Calories (Number)
Proteins (Number)
Carbs (Text)
Fats (Text)


Table 3: Cal AI StateManagement

Create new table: Cal AI StateManagement
Add columns:

User_ID (Text)
State (Text)
Last_Interaction (DateTime)
Context_MealID (Text)


Step 3: Configure Credentials (15 minutes)
A. Add Google Gemini Credential

In any Google Gemini node, click "Create New Credential"
Paste your Gemini API key
Click Save
This credential will auto-apply to all Gemini nodes

B. Add Telegram Credential

Open any Telegram node
Click "Create New Credential"
Paste your bot token
Click Save

C. Link Data Tables

Open the "Is User Registered?" node
Click the Data Table dropdown
Select "Cal AI Profiles"
Repeat for all nodes with data table connections (n8n will show which ones need updating)


Step 4: Activate Telegram Webhook (5 minutes)

Open the "Telegram Trigger" node
Click "Execute Node" to register the webhook
You'll see "Webhook registered successfully"
Click "Listen for Test Event" to verify
Send a message to your bot on Telegram
You should see the message appear in n8n


Step 5: Test Each Function (20 minutes)
Test 1: User Registration

Send any message to your bot
Bot should ask for your name
Follow the prompts to complete registration
Check the "Cal AI Profiles" data table to confirm your data was saved

Test 2: Meal Logging (Text)

Send: "I had 2 eggs and toast"
Bot should respond with nutrition breakdown

Test 3: Meal Logging (Image)

Take a photo of food
Send it to the bot
Bot should analyze and log the meal

Test 4: Meal Logging (Voice)

Record a voice message: "I had chicken and rice"
Send it to your bot
Bot should transcribe and analyze

Test 5: Update Meal

Send: "update meal"
Follow prompts to provide meal ID and new description

Test 6: Get Report

Send: "show my report"
Bot should ask for a date and generate summary


Step 6: Customize (Optional)
Change Bot Personality

Edit the systemMessage in each Agent node
Adjust tone, add emojis, change coaching style

Add Your Branding

Update bot responses to mention your app name
Customize welcome messages

Modify Cuisine Focus

Update the nutrition analysis prompts to focus on your target cuisine
Current default: African/West African/Nigerian foods

Adjust Nutrition Calculations

Edit the Gemini Vision prompt in "Analyze image" node
Modify portion size assumptions or macro ratios


Troubleshooting
Bot doesn't respond:

Check webhook is activated in Telegram Trigger node
Verify Telegram credential is correct
Check execution logs for errors

"Data Table not found" errors:

Ensure all three tables are created with exact names
Relink tables in each node

Gemini API errors:

Verify API key is active
Check you haven't exceeded free tier limits (15/min)
Try regenerating API key

Meals not saving:

Check "Append Meal Data" node is connected
Verify User_ID matches between tables


Going Live
Once testing is complete:

Click "Active" toggle in top right
Share your bot link: t.me/YourBotUsername
Monitor the Executions tab for any errors


Target Users & Support
This workflow is perfect for:

Fitness coaches wanting client nutrition tracking without monthly SaaS fees
Health tech entrepreneurs building MVP before hiring developers
No-code builders learning advanced n8n AI patterns
Bootcamp graduates needing portfolio projects with real-world complexity
Small app studios prototyping before committing to custom development

You'll succeed with this if you:

Can follow detailed instructions
Are comfortable with web-based tools
Want to learn by doing (the workflow itself is educational)
Need a production-ready solution quickly

You might struggle if:

You've never used n8n before (recommend taking their free course first)
You're not comfortable with API concepts (keys, webhooks)
You need 100% hand-holding (this assumes basic technical literacy)

Support:

Reach me:  https://www.linkedin.com/in/gerald-akhidenor-1ab1a45/
Review Google Gemini documentation for AI customization
Telegram Bot API docs for advanced features


Next Steps After Setup

Invite Beta Users - Start with friends/clients to gather feedback
Monitor Usage - Watch which features get used most
Customize Prompts - Refine AI responses based on real conversations
Add Features - Use this as foundation for recipe suggestions, meal planning, etc.
Scale Infrastructure - Move to dedicated hosting as user base grows

Estimated total setup time: 1-2 hours for complete beginners, 30 minutes for experienced n8n users.

## 🔗 Nodes Used

Webhook, Telegram, Telegram Trigger, AI Agent, Simple Memory, Call n8n Workflow Tool

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
