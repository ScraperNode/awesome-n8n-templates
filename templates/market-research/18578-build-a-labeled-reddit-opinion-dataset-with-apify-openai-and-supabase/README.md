# 📊 Build a labeled Reddit opinion dataset with Apify, OpenAI, and Supabase

> ⚡ **5 views** · 📊 [Market Research & Insights](../)

## Description

## Quick overview
This workflow runs weekly to scrape Reddit posts and comments via Apify, labels each comment’s reaction type with OpenAI, and stores structured rows plus OpenAI embeddings in Supabase tables for analysis and vector search.

## How it works
1. Runs weekly on a schedule and loads dataset inputs like subreddits, sort order, time window, minimum score, and item limits.
2. Splits the subreddit plan into individual scrape jobs and uses the Apify Reddit Scraper actor to collect posts and their comments.
3. Filters and formats scraped posts into structured metadata rows and inserts them into a Supabase `posts` table.
4. Creates OpenAI embeddings for each post’s combined context text and inserts the vectors into a Supabase `documents` table.
5. Filters and formats scraped comments, then uses OpenAI (gpt-4.1-mini) to classify each comment into one reaction type.
6. Inserts labeled comments into a Supabase `comments` table and embeds the comment text into the Supabase `documents` table for vector search.

## Setup
1. Add Apify API token credential.
2. Create a Supabase project, enable pgvector, create the `posts`, `comments`, and `documents` tables, and add a Supabase credential using your project URL and service_role key.
3. Add an OpenAI API credential for the classification and embedding steps.
4. Update the dataset parameters (subreddits list with per-subreddit max results, sort, time filter, minScore, and maxCommentsPerPost/maxItems) in the workflow’s input configuration before activating it.

## Requirements
- Apify, Supabase and OpenAI accounts

## 🔗 Nodes Used

Supabase, Schedule Trigger, Embeddings OpenAI, Supabase Vector Store, Default Data Loader, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
