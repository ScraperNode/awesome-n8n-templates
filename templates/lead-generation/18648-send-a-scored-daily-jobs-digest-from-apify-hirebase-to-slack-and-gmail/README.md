# 🎣 Send a scored daily jobs digest from Apify Hirebase to Slack and Gmail

> ⚡ **14 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs every morning at 8 AM, pulls job listings posted in the last 24 hours from the Hirebase Jobs Feed on Apify, formats them into a digest, and delivers the results to Slack and/or Gmail.

## How it works
1. Runs every day at 8 AM on a schedule.
2. Calls the Apify Hirebase Jobs Feed API with your keyword and timeframe filters to fetch up to 25 recent job listings.
3. Formats the returned jobs into a Slack-ready text digest and an HTML email version, including links, company name, location/type, and salary when available.
4. Posts the digest to a selected Slack channel.
5. Sends the same digest as an HTML email via Gmail.

## Setup
1. Create an Apify account, generate an API token, and add it as an HTTP Bearer Auth credential for the Hirebase API request.
2. Update the API request JSON body to set your `keywords`, optional `locationTypes`, `postedWithinDays`, and `maxResults` filters.
3. Connect a Slack OAuth2 credential and set the target channel name/ID in the Slack message step.
4. Connect a Gmail credential and replace the recipient placeholder email address in the email step (or delete the Slack or Gmail step if you only want one delivery channel).

## Requirements
- Apify account with an API token (the Hirebase Jobs Feed actor is pay per result, $3 per 1,000 jobs returned)
- Slack workspace where you can install the n8n Slack app (skip if you delete the Slack step)
- Gmail account for sending the digest (skip if you delete the email step)

## Customization
- Change the schedule time in the Schedule Trigger node
- Add more filters to the API request body: jobTitles, locations, jobTypes, experienceLevels, salaryMin, visaSponsorship, companySizes (see the actor's input page on Apify for all fields)
- Raise maxResults for broader niches, or lower it to keep digests short
- Delete the Slack or Gmail branch if you only want one delivery channel

## Additional info
The digest only includes jobs posted within the last 24 hours, so running it once a day gives no duplicates. Actor details and full input schema: apify.com/hirebase/jobs-feed. You can also learn more about the data at www.hirebase.org.

## 🔗 Nodes Used

Google Sheets, HTTP Request, Slack, Gmail, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
