# ⚡ Movie release calendar: Add TMDB films to Google Calendar via Telegram Bot

> ⚡ **155 views** · ⚡ [Personal Productivity](../)

## Description

## Add Upcoming Movies from TMDB to Your Google Calendar Via Telegram

This n8n template demonstrates how to automatically fetch upcoming movie releases from TMDB and let users add selected movies to their Google Calendar directly from Telegram.

## How it works

1. On a daily schedule, the workflow queries the TMDB API for upcoming movie releases.
2. Each movie is checked against an n8n data table to avoid duplicates.
3. New movies are stored in the data table for tracking.
4. Movie details are sent to a Telegram chat with an inline “Add to calendar” button.
5. When the button is pressed, the workflow retrieves the movie data from the table.
6. A calendar event is created in Google Calendar using the movie’s release date.

## Use cases

- Tracking upcoming movie releases

- Personal or shared release calendars

- Telegram-based reminders for entertainment events

- Automating calendar updates from public APIs

## Requirements

- TMDB API access token

- Telegram bot token and user ID

- Google Calendar OAuth credentials

- One n8n data table for storing movie metadata

## 🔗 Nodes Used

HTTP Request, Telegram, Telegram Trigger, Google Calendar, Schedule Trigger, Data table

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
