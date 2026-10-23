# 📱 Review content drafts for repetition, substance, tone and style using code

> ⚡ **1 views** · 📱 [Social Media & Email Marketing](../)

## Description

## Quick overview
Before you publish, this compares each draft in your content calendar against your last 30 published posts and flags the ones that will read as more of the same, then writes the reason back into the sheet.

## How it works
1. Runs every morning at 09:00 on a schedule trigger, or on demand with the manual trigger.
2. Reads rows marked ready from a Drafts tab in Google Sheets, and your last 30 posts from a Published tab.
3. Compares wording with bigram overlap (Jaccard). Word bigrams for languages with spaces, character bigrams for Chinese, Japanese and Thai, chosen automatically.
4. Compares structure on four signals: opening pattern, ending type, line and paragraph rhythm, and filler-phrase set. These are what make posts feel identical even when the words differ.
5. Flags a draft only when both trip: wording overlap above the threshold AND at least two structural signals match. Either one alone is normal and does not flag.
6. Writes approved or needs rework back to the sheet. A flagged row gets the offending past post plus the exact signals that matched, then goes to Slack.

## Setup
1. Create a Google Sheet with two tabs: Drafts with columns id, text, status, note; and Published with columns text, published_at.
2. Connect your Google Sheets credential on the three Sheets nodes and pick your document.
3. Connect Slack on the last node, or replace it with Telegram, Discord or Gmail. The message is already built for you in the previous node.
4. Put ready in a draft's status column, then activate the workflow.

## Requirements
- A Google Sheets credential, and a Slack credential or any other notifier you swap in. No AI model call and no paid API.
- A record of what you already published, in the Published tab. The repetition check has nothing to compare against without it.

## Customization
- Three numbers at the top of the Compare node: WORD_OVERLAP (0.18), STRUCTURE_HITS (2) and HISTORY (30). Raising either of the first two makes the gate quieter.
- Add your own autopilot phrases to the FILLERS list, and your own ending patterns to endingType. Plain text, no regex needed.

## Additional info
Most duplicate checks compare words, which misses the real problem: you can write thirty posts that share no vocabulary and still feel identical, because every one opens the same way, ends the same way and runs the same rhythm. Readers get bored by the shape, not the nouns. That is why this requires both signals before it flags anything: two posts that merely share a rhythm are not a problem.

## 🔗 Nodes Used

Google Sheets, Slack, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
