# 💬 AI real estate agent: end-to-end ops automation (web, data, voice)

> ⚡ **4,820 views** · 💬 [Lead Nurturing & AI Sales Agents](../)

## Description

**This suite automates distinct aspects of real estate operations: incoming web lead qualification, scheduled/manual data research and content generation, and automated voice call outreach with lead qualification. It leverages AI (primarily OpenAI GPT-4o Mini via Langchain), data processing nodes, and integrations with external APIs and Google Workspace.**

# Workflow 1: Incoming Web Lead Qualification & Scoring
This workflow captures leads from a web source, validates their input, uses AI to classify intent and urgency, checks against a property database, scores the lead, and prepares a structured lead object.

# Tools & Services Used:

AI Core & Processing: OpenAI (GPT-4o Mini via Langchain Agent and Chat Model nodes)
Data Processing: n8n Set, If, Code nodes
External API: HTTP Request node (for PropertyCheckAPI)
# Workflow Overview:
Trigger:
Incoming Web Lead Webhook (/incoming-lead): Captures new leads submitted via a web form.
Lead Data Ingestion & Validation:
Set & Rename Incoming Lead Fields: Standardizes input field names from the webhook.
IF User Message Valid: Checks if the userMessage field is present and meets a minimum length.
Clean User Message Text (Code): Pre-processes the user's message (e.g., removes extra spaces).
AI-Powered Lead Analysis:
AI Classify Lead Intent & Urgency (Langchain Agent): Analyzes the cleaned user message to determine the lead's primary intent (e.g., buying, selling, inquiry) and the urgency of their request.
Powered by: LLM for Lead Intent/Urgency Classification (OpenAI Chat Model - GPT-4o Mini).
Extract Intent & Urgency from AI Output (Set): Structures the AI's classification into distinct fields.
Data Standardization & Enrichment:
Standardize All Lead Data Fields (Code): Further standardizes all collected data points for consistency.
Call Property Check API (HTTP Request): Sends lead/property details to an external API (https://api.example.com/property-check) to verify listing status or gather more information.
Lead Scoring & Finalization:
IF Property is Known Listing: Checks the API response to see if a matchFound was "true".
Calculate Web Lead Score (Code): If a known listing (or based on other criteria), this node assigns a numerical or categorical score to the lead.
Set Final Structured Web Lead Data (Set): Consolidates all original, processed, classified, and scored data into a final, comprehensive lead object.
## Workflow 2: Scheduled/Manual AI-Powered Data Research & Content Generation (Red Background)
This workflow fetches data from external URLs, extracts information using AI, allows a sophisticated AI agent to perform research and generate analysis using various tools, and outputs results to Google Sheets, Google Docs, and potentially other AI processing steps.

# Tools & Services Used:
Orchestration & Automation: n8n
AI Core & Processing: OpenAI (GPT-4o Mini via Langchain Information Extractor, Langchain Agent, and direct OpenAI nodes)
AI Tools: Langchain Calculator, Langchain SerpAPI
Data Storage & Output: Google Sheets, Google Docs
Data Input: HTTP Request node

# Workflow Overview:
Triggers:
Manual Trigger for Data Analysis Flow: Allows on-demand execution.
Scheduled Trigger for Data Analysis Flow: Automates execution on a defined schedule.
Data Ingestion & Initial Extraction:
Fetch External Data for AI Analysis (HTTP Request): Retrieves content from a specified URL.
AI Extract Information from Fetched Data (Langchain Information Extractor): Uses an AI model to extract structured data from the fetched content.
Powered by: LLM for Data Information Extractor (OpenAI Chat Model - GPT-4o Mini).
Advanced AI Analysis & Tasking:
AI Agent for Research & Content Generation (Langchain Agent): Processes the extracted information to perform in-depth research, analysis, or content creation.
Powered by: LLM for Research & Content AI Agent (OpenAI Chat Model - GPT-4o Mini).
Utilizes Tools:
Calculator Tool for AI Agent: For numerical calculations.
SerpAPI Web Search Tool for AI Agent: For performing real-time web searches to gather additional context or verify information.
Output & Dissemination:
The AI Agent's output is routed to multiple destinations:
Update Google Doc with AI Agent Analysis (Google Docs): Inserts the generated analysis/content into a Google Document.
Split AI Agent Output Items (Split Out) -&gt; Log AI Analysis Data to Google Sheets (Google Sheets): If the agent produces multiple data items, they are split and logged individually into a Google Sheet.
OpenAI: Generate Text from Agent (Output 1) & OpenAI: Generate Text from Agent (Output 2): These nodes likely take the agent's output for further specialized AI processing (e.g., summarization for different purposes, reformatting).
## Workflow 3: Automated Lead Outreach & Voice Call Qualification (Green Background)
This workflow automates the initial contact with new leads via a voice call, uses AI to understand the lead's responses during the call, qualifies them, and logs the detailed interaction and a summary.
# Tools & Services Used:
Orchestration & Automation: n8n
AI Core & Processing: OpenAI (GPT-4o Mini via Langchain Agent and Chat Model nodes)
Voice Services: ElevenLabs (Text-to-Speech via HTTP Request), Twilio (Place Call via HTTP Request)
Data Storage & Output: Google Sheets
Error Handling: n8n Execute Workflow Trigger
# Workflow Overview:
Trigger:
Webhook for Voice Call Lead (/new-lead): Captures new leads designated for an automated voice call.
Call Preparation & Initiation:
Set Initial Voice Call Lead Details: Extracts basic lead info (name, phone, property ref, email) from the webhook.
Generate Voice Call Introduction Script (Function): Creates a personalized script for the call.
ElevenLabs: Convert Intro Script to Voice (HTTP Request): Sends the script to ElevenLabs API to generate natural-sounding audio.
Twilio: Initiate Voice Call to Lead (HTTP Request): Uses Twilio API to place the call and play the generated audio.
AI-Powered Call Interaction Analysis:
AI Agent: Extract Info from Voice Call (Langchain Agent): Processes the interaction from the call (e.g., a transcript of the lead's responses, or DTMF inputs if designed to capture them) to extract key qualification data like budget, timeline, and interest level.
Powered by: LLM for Voice Call Info Extraction Agent (OpenAI Chat Model - GPT-4o Mini).
Structure Extracted Voice Call Info (Function): Organizes the AI-extracted data into a structured JSON object.
Lead Qualification & Data Logging:
Set Lead Status Based on Call Interest: Updates the lead's status (e.g., "Interested" or "Not Interested") based on the AI's interpretation of the call.
IF Lead Interested (from Voice Call): Branches the workflow based on lead status.
If Interested:
Assign Score to Interested Voice Lead (Function): Calculates a lead score based on budget, timeline, etc.
Format Current Timestamp for Logging (DateTime): Generates a timestamp.
Log Qualified Voice Lead to Google Sheets: Appends the detailed, qualified lead information to a 'Leads' Google Sheet.
AI Agent: Generate Voice Call Lead Summary (Langchain Agent): Creates a concise summary of the entire lead interaction and qualification.
Powered by: LLM for Voice Call Lead Summary Agent (OpenAI Chat Model - GPT-4o Mini).
Log Voice Call Lead Summary to Google Sheets: Appends this summary to a separate 'LeadsSummary' Google Sheet.
Error Handling (for Sheets Logging):
IF Voice Lead Logging to Sheets Failed: Checks if the Google Sheets logging operation was unsuccessful.
Error Trigger: Notify Admin of Sheets Failure (Execute Workflow Trigger): If logging fails, triggers a separate workflow to alert an administrator.

## 🔗 Nodes Used

Function, Google Sheets, HTTP Request, Webhook, Google Docs, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
