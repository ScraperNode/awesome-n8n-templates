# 📊 Extract drug discovery intelligence with Claude, Voyage AI, Pinecone, Airtable and Slack

> ⚡ **14 views** · 📊 [Market Research & Insights](../)

## Description

## Quick Overview
This workflow runs daily to collect new drug-discovery items from PubMed, bioRxiv/medRxiv, a patents API, and ClinicalTrials.gov, extracts structured R&D intelligence with Anthropic Claude, embeds and indexes results in Pinecone, stores structured records in Airtable, and sends high-value alerts plus a run digest to Slack.

## How it works
1. Runs daily at 6am (or manually) and loads the search keywords, watch-target list, thresholds, and destination settings.
2. Fetches recent publications from PubMed, preprints from bioRxiv/medRxiv, patent results from the configured patents API, and clinical trial updates from ClinicalTrials.gov.
3. Normalizes all source responses into a single document format and deduplicates against documents seen in previous runs using workflow static data.
4. Processes each new document one at a time and sends its text to Anthropic Claude to extract structured fields such as targets, molecules, mechanism of action, development stage, competing organizations, and a summary.
5. Scores each extraction for strategic relevance using watch-target matching and first-in-class signals, then creates a Voyage AI embedding and upserts it into Pinecone with metadata.
6. Upserts a structured intelligence record into Airtable and posts an immediate Slack alert for high-scoring discoveries.
7. Posts a Slack digest at the end of the run with a completion note and cumulative indexed-document count.

## Setup
1. Add API credentials for Anthropic (Claude), Voyage AI, Pinecone, Airtable, and Slack.
2. Add and configure credentials for the HTTP sources you use (NCBI E-utilities/PubMed, bioRxiv API, your chosen patents API endpoint, and ClinicalTrials.gov), updating any required headers or keys.
3. Update the configuration values for searchKeywords, watchTargets, noveltyThreshold, Slack channel, Airtable base/table, and Pinecone index URL/namespace.
4. Create the target Airtable table with fields that match the written columns (for example URL, DocID, Title, Summary, Molecules, DrugTargets, SourceType, PublishedDate, IsFirstInClass, RelevanceScore, DevelopmentStage, MechanismOfAction, and CompetingOrganizations) and ensure your Pinecone index matches the Voyage embedding dimensions.

## 🔗 Nodes Used

Airtable, HTTP Request, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
