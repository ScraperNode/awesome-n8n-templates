# 🎬 Automate social media content planning with Llama 3.3 AI, trending topics & Google Suite

> ⚡ **477 views** · 🎬 [Content Creation & Video](../)

## Description

**How it works:**

1. Daily Trigger:
Every morning at 8 AM, the workflow is automatically triggered.

2. Fetch Trending Topics:
The workflow collects trending topics from external sources, such as news RSS feeds and Reddit popular posts. These trends are merged and summarized to provide up-to-date context for content generation.

3. Read Active Campaigns:
The workflow reads all rows from the “Active Campaigns” Google Sheet, but only processes campaigns with a status of "active" to avoid generating content for paused or inactive campaigns.

4. Enrich Campaigns with Trends:
Each active campaign is enriched with the latest trending topics, so the generated content can reference current events or popular themes.

5. AI Content Generation:
For each enriched campaign, Groq AI generates:
- An engaging post caption tailored to the platform and target audience
- Creative direction with visual suggestions
- Relevant hashtags (5-10)
- Best posting time recommendation for the platform

6. Quality Scoring:
The workflow calculates a quality score for each generated content idea, considering factors like caption length, hashtag count, and creative direction.

7. Append to Google Sheets:
The generated content ideas, along with their quality scores and other details, are appended to the “Daily Content Plan” Google Sheet for record-keeping and team collaboration.

8. Schedule in Google Calendar:
For each campaign, an event is created in Google Calendar with the content details and recommended posting time, ensuring the team is reminded to review or publish the content.

9. Daily Email Summary (Optional):
At the end of the process, a summary email can be sent to the team, including statistics such as the number of campaigns processed, average quality score, and a platform breakdown.


**Set up steps:**

1. Prepare Your Google Sheets:

- Create a sheet named “Active Campaigns” with columns: Project Name, Theme, Target Audience, Platform, and Status (to mark campaigns as active/inactive).
- Create another sheet named “Daily Content Plan” with columns for Project Name, Date, Platform, Caption, Creative Direction, Hashtags, and any other details you want to track.

2. Connect Google Services to n8n:
- In n8n, set up and authenticate your Google Sheets and Google Calendar credentials. You can find authentication information in the n8n documentation for Google credentials.

3. Add a Cron Node:
Drag in a Cron node and set it to trigger every day at 8:00 AM.

4. Read Campaigns from Google Sheets:
- Add a Google Sheets node.
- Set the operation to “Read Rows” and select your “Active Campaigns” sheet.
- (Optional) Use a Filter or IF node to process only rows where Status is “active”.

5. (Optional) Fetch Trending Topics:
If you want to enrich your content with trending topics, add nodes to fetch data from RSS feeds, Reddit, or other sources.

6. Process Each Campaign:
- Use a SplitInBatches node to process each campaign row individually.

7. Generate Content Ideas with Groq AI:
- Add a Groq AI node (or OpenAI node if Groq is not available).
- Configure the prompt to generate a content idea using the campaign’s theme, target audience, and platform. You can reference fields from the Google Sheets node using expressions like $("Google Sheets").item.json['Theme'].

8. Append Results to “Daily Content Plan”:
- Add another Google Sheets node.
- Set the operation to “Append” and select your “Daily Content Plan” sheet.
- Map the generated content fields to the appropriate columns.

9. Schedule Events in Google Calendar:
- Add a Google Calendar node.
- Set the operation to “Create Event”.
- Use the project name and content idea for the event title and description, and set the event time as needed.

10. (Optional) Send a Daily Summary Email:
- Add an Email node to send a summary of the day’s content plan to your team.

11. Test the Workflow:
- Run the workflow manually to ensure all steps work as expected.
- Check that new content ideas appear in the “Daily Content Plan” sheet and that events are created in Google Calendar.

12. Activate the Workflow:
- Once you’ve confirmed everything works, activate the workflow so it runs automatically every morning.

## 🔗 Nodes Used

Google Sheets, RSS Read, Google Calendar, Gmail, Reddit, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
