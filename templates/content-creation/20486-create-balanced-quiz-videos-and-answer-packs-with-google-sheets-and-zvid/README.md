# 🎬 Create balanced quiz videos and answer packs with Google Sheets and Zvid

> ⚡ **13 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Create balanced three-round quiz videos from a reviewed Google Sheets question bank. Rotate topics and answer positions, prevent question reuse, and deliver a Zvid video with a source-backed answer CSV for editorial review.

## How it works
1. Start manually or on the schedule and read quiz rules, the question bank and episode history.
2. Select one approved easy, medium and hard question. Reject duplicate text, exclude used questions, and prefer less-used topics.
3. Rotate answer positions reproducibly while preserving the correct answer; prepare the question, countdown and reveal scenes.
4. Resume an accepted saved job or skip a completed episode instead of spending credits again.
5. Check optional music, build the video design, and use the Zvid node to validate and quote it against the credit ceiling.
6. In live mode, reserve the episode key, submit one render and save its job ID. Retry only explicit capacity rejections, within bounded limits.
7. Poll the accepted job, persist its actual outcome, and offer a completed MP4 through Watch video plus a CSV answer and source pack.

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before configuring credentials; a workspace owner/admin may need to install it. Create a Zvid API credential with your key from https://app.zvid.io/api-keys and Base URL https://api.zvid.io, then select it on all Zvid nodes.
2. Connect Google Sheets credentials and select your question-bank document/tab. Create a separate Quiz Episodes log tab and select the same log document/tab on every recovery read and write node.
3. Connect the question-bank read node to a separate source tab with QuestionKey, Question, OptionA, OptionB, OptionC, CorrectLetter, FunFact, Topic, Difficulty, SourceUrl and Approval. QuestionKey is recommended; blank keys are derived from question text. Use easy/medium/hard, A/B/C, an HTTPS SourceUrl and Approval=approved after reviewing the facts. Provide all three difficulties. Questions must be at most 130 characters, options 40 and FunFact 200. Keep existing completion markers.
4. Create exact recovery-log headers: RenderKey, Status, JobId, CreditsQuoted, PlanJson, VideoUrl, CompletedAt. Preserve the log history during upgrades.
5. Edit Set quiz episode and rotation rules and test manually before enabling the schedule. dryRun=false is the default and spends Zvid credits; maxCreditsPerVideo defaults to 60. dryRun=true returns design JSON, review rows and a quote, without rendering, creating an editor draft or changing the log.

## Requirements
- Self-hosted n8n with community nodes enabled, a funded Zvid account and Google Sheets access. Supply at least one approved question at each difficulty and retain HTTPS source references.

## Customization
- Set branding, optional topic filtering, rotationEpisodes and timings in Set quiz episode and rotation rules. Increase episodeRevision only for an intentional extra episode. The template does not publish to social channels.

## Additional info
Open Watch video → Binary → data → View after completion and download the source-specific review CSV before sharing. Preview downloads time out after 30 seconds and retry at most three times; the saved URL remains available. Run one execution at a time: Google Sheets is not an atomic lock. Inspect submitting, failed, timed_out or uncertain jobs before resetting any log row. Completed episodes are skipped and saved rendering jobs resume without another paid request. Current setup is described above; the linked repository guide supplies background. Support: https://zvid.io/contact

## 🔗 Nodes Used

Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
