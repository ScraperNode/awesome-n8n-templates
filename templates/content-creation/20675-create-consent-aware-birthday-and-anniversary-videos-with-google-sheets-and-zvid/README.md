# 🎬 Create consent-aware birthday and anniversary videos with Google Sheets and Zvid

> ⚡ **0 views** · 🎬 [Content Creation & Video](../)

## Description

## Quick overview
Create private birthday and anniversary videos from approved, consented Google Sheets records. Annual keys prevent duplicate renders, saved jobs resume after interruptions, and optional email delivery requires separate approval.

## How it works
1. Run manually or on a schedule, read celebration records once, and load the separate recovery log.
2. Select one due occasion with approval and greeting consent. Respect DoNotContact, timezone and February 29 rules.
3. Use separate annual birthday and anniversary keys. Resume accepted jobs before selecting new paid work.
4. Build a branded two-scene greeting, validate its design, and check the quoted credits against the configured ceiling.
5. With dryRun=false, record the submission and render through the Zvid node. Explicit capacity rejections allow at most three submission attempts.
6. Wait for the accepted job, then save its final status and completed video URL in Celebration Runs.
7. Provide Watch video and a review CSV. Email is disabled by default and requires an approved recipient before sending.

## Setup
1. Use self-hosted n8n. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before credentials; an owner/admin may need to install it. Create a Zvid API credential at https://app.zvid.io/api-keys with Base URL https://api.zvid.io.
2. Connect Google Sheets. Select a source tab and a separate Celebration Runs tab. The log needs RenderKey, Status, JobId, CreditsQuoted, PlanJson, VideoUrl, CompletedAt and DeliveryStatus headers. Select the same log tab on all log nodes.
3. Source headers: CelebrationKey, Name, Type, Date, Approval, GreetingConsent. Use permanent unique keys, birthday/anniversary, YYYY-MM-DD dates, Approval=approved and confirmed consent. Optional fields include DoNotContact, Email, EmailApproval, ShowAge, Message and LastSentYear.
4. Configure branding, timezone and leapDayPolicy. dryRun=false spends credits; the default maxCreditsPerVideo is 15. Use dryRun=true for validation and a quote. Test manually before scheduling.
5. Optional delivery needs SMTP credentials, emailFrom, sendEmail=true, a valid recipient email and EmailApproval=approved. Keep email disabled during testing.

## Requirements
- Google Sheets access, a Zvid account with render credits, and self-hosted n8n with community nodes enabled. SMTP is optional.

## Customization
- manualDemo=true creates fictional greetings with fresh execution keys and no email recipient; disable it for real contacts. Keep replayRenderKey empty for new videos. Adjust colors, fonts and scene timings.

## Additional info
Run one execution at a time: Google Sheets is not an atomic lock. Preserve recovery history and inspect uncertain submissions before resetting any row. After completion, open Watch video → Binary → data → View. Support: https://zvid.io/contact

## 🔗 Nodes Used

Send Email, Google Sheets, HTTP Request, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
