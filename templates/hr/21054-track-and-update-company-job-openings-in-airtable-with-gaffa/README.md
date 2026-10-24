# 👥 Track and update company job openings in Airtable with Gaffa

> ⚡ **0 views** · 👥 [HR & Recruitment](../)

## Description

## Quick overview
This workflow runs every Monday, reads a list of companies from Airtable, uses Gaffa to extract current open roles from each company’s careers page, and then updates Airtable by adding newly found roles, closing roles that disappeared, and writing per-company status and counts.

## How it works
1. Runs every Monday morning on a schedule.
2. Reads the currently open job records and the list of companies with a non-empty careers page URL from Airtable.
3. Loops through each company and uses Gaffa to load the careers page and parse the open roles (title, team, location, and link).
4. Compares the roles found on the careers page with the company’s open roles in Airtable to determine which roles are new and which have likely closed.
5. Creates new job records in the Airtable Jobs table for roles that are newly found.
6. Updates existing job records in the Airtable Jobs table to set a “Closed on” date for roles that are no longer listed when the page results look complete enough.
7. Updates each company record in Airtable with the latest open/new role counts and a status message, or logs an error status when the careers page cannot be read.

## Setup
1. Install the @gaffa-dev/n8n-nodes-gaffa community node and add a Gaffa API credential.
2. Add an Airtable credential (personal access token) with access to the base you want to update.
3. Create an Airtable base with a Companies table (including at least Name and Careers page fields) and a Jobs table (including fields such as Title, Company link, Team, Location, First seen, and Closed on).
4. In the workflow Settings values, enter your Airtable base ID and confirm the Companies/Jobs table names and the min_share threshold match your schema.

## 🔗 Nodes Used

Airtable, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
