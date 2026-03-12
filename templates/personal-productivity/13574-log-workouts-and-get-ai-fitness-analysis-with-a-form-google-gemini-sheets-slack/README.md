# ⚡ Log workouts and get AI fitness analysis with a form, Google Gemini, Sheets, Slack, and Gmail

> ⚡ **73 views** · ⚡ [Personal Productivity](../)

## Description

## Who is this for

Gym-goers, runners, home workout enthusiasts, and personal trainers who want to track workouts without fiddling with complicated fitness apps. Just type what you did and let AI handle the rest.

## What this workflow does

Fill in a simple web form with your workout in plain text — something like "Bench press 60kg x10 x3, 5km run 28min, squats bodyweight x20 x4." Google Gemini AI parses each exercise, identifies the muscle groups worked, estimates calories burned, and rates the workout intensity. A code node validates the AI output and structures it into a clean record. Everything gets saved to a Google Sheet as a running training log. You receive a Slack notification and an email summary with personalized tips and a suggestion for your next session.

## How to set up

1. Create a Google Sheet with a "Workouts" tab and add column headers: Date, Workout, Duration, Feeling, Type, Exercises, Calories, Muscles, Intensity, Tips, Next Suggestion, Notes, Logged At
2. Add your Google Sheets and Gmail credentials in n8n
3. Get a free Gemini API key from Google AI Studio
4. Connect Slack and set the channel ID in the Slack node
5. Update the email address in the Gmail node
6. Activate and bookmark the form URL

## Requirements

- Google Gemini API key (free tier available)
- Google Sheets and Gmail credentials
- Slack workspace with a connected app

## How to customize

- Edit the AI prompt to add sport-specific analysis (swimming, cycling, climbing)
- Remove Slack or Gmail if you only need one notification channel
- Add a weekly summary node that aggregates your training volume

## 🔗 Nodes Used

Google Sheets, Slack, Gmail, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
