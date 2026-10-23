# 🎬 Generate AI math RPG quests from study logs with Google Sheets and OpenRouter

> ⚡ **77 views** · 🎬 [Content Creation & Video](../)

## Description

## Generate AI math RPG quests from study logs in Google Sheets

## Who it's for
This template is for educators, parents, or self-learners who want to gamify their study routines. It turns boring study logs into an interactive RPG math battle using AI.

## How it works
This system consists of two workflows (Part 1: Quest Generation, Part 2: Quiz Battle).
In this workflow, when a user submits their study time via an n8n Form, the system logs the data into Google Sheets, calculates total EXP, and retrieves the user's current level. Then, it uses a Basic LLM Chain to generate a math question tailored to that level, along with an RPG-style monster and flavor text. The generated quest is saved back to Google Sheets with a `pending` status, ready for the user to answer.

## How to set up
1. Create a Google Sheet with three tabs: `StudyLogs`, `Users`, and `Quests`.
2. Connect your Google Sheets credential and select your spreadsheet in all Google Sheets nodes.
3. Connect your OpenAI or OpenRouter credential.
4. Run the "Study Log Input Form" to generate your first monster!

## Requirements
- A Google account (for Google Sheets)
- An OpenAI or OpenRouter API key

## How to customize the workflow
You can easily change the prompt in the "Generate RPG Quest" node to create language quizzes, history trivia, or any other subject instead of math!

## 🔗 Nodes Used

Google Sheets, Basic LLM Chain, Structured Output Parser, n8n Form Trigger, OpenRouter Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
