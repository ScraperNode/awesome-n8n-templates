# 📖 Structure gym FAQ data for AI chatbot matching with Google Sheets

> ⚡ **30 views** · 📖 [Internal Wiki & Knowledge Base](../)

## Description

## Quick overview
Fetches FAQ entries from Google Sheets for a specified gym branch, processes them with keyword extraction and language detection, and returns a structured object optimized for AI chatbot question matching. Supports English, Arabic, and French.

## How it works
1. Receives branch and optional category parameters from the AI Agent
2. Reads the Spreadsheet ID from a central config sheet
3. Routes to the correct branch FAQ sheet
4. Processes each FAQ entry — extracts keywords, detects language (EN/AR/FR), generates similar question variations
5. Returns a fully structured response grouped by category with all metadata

## Setup
1. Add a Google Sheets OAuth2 credential in n8n and connect it to all Google Sheets nodes in the workflow
2. Add your Google Spreadsheet ID to the Gymbot_Config sheet under the sheet_id column
3. Create two FAQ sheets named FAQ_Rabieh and FAQ_Bikfaya — or rename them to match your branch names
4. Add your FAQ content with these required columns: Question, Answer, Tags, ImageURL

## Requirements
- Google Sheets account with OAuth2 credential
- A Gymbot_Config sheet with a sheet_id column
- Called by an AI Agent as a tool sub-workflow
- Part of the GymBot Pro WhatsApp AI Booking System

## Customization
- Add more branches by duplicating the IF routing logic
- Extend keyword extraction with domain-specific stop words
- Add more language detection patterns for your target market

## 🔗 Nodes Used

Google Sheets, Execute Workflow Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
