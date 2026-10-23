# 🎣 Log new hiring leads from Apify to Sheets with GPT-4o-mini and Slack alerts

> ⚡ **5 views** · 🎣 [Lead Generation & Enrichment](../)

## Description

## Quick overview
This workflow runs every morning to pull the last 24 hours of job postings from Apify, groups them by company, deduplicates companies across runs, uses OpenAI to draft two-line outreach openers, logs leads to Google Sheets, and posts hot-lead alerts and a daily digest to Slack.

## How it works
1. Runs every morning at 8 AM.
2. Builds a search payload from your niche settings and queries the Apify Hirebase jobs feed for recent job postings.
3. If the job feed fails, sends a Slack message with the error details and stops logging leads.
4. Groups all returned postings by company, summarizing role count, titles, locations, and job links into one lead per company.
5. Skips companies that have already appeared in previous workflow executions and filters out companies below your minimum open-role threshold.
6. Uses OpenAI to generate a two-line cold outreach opener for each remaining company.
7. Appends each lead (company details, roles, links, and AI opener) to Google Sheets and posts either an immediate Slack alert for hot leads or a Slack digest for standard leads.

## Setup
1. Add an Apify connection and ensure the Apify node `@apify/n8n-nodes-apify` is installed if it is not available in your instance.
2. In Radar Settings, set at least one of Job Titles or Keywords and adjust optional filters like industries, company sizes, locations, and the min/hot open-role thresholds.
3. Add an OpenAI API credential and select the model you want to use for generating the two-line opener.
4. Add a Google Sheets OAuth2 credential, set the target spreadsheet and sheet name, and ensure your sheet has matching columns (Date Found, Company, Industry, Company Size, Open Roles, Role Titles, Locations, Website, AI Opener, Job Links).
5. Add a Slack OAuth2 credential, choose the channel for hot-lead alerts and the daily digest, and replace the digest channel placeholder value with your real channel.

## Requirements
- Apify Account

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger, AI Agent, OpenAI Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
