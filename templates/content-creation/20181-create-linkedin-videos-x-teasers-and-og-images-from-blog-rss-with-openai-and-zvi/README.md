# 🎬 Create LinkedIn videos, X teasers and OG images from blog RSS with OpenAI and Zvid

> ⚡ **1 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.
>
> <a href="https://scrapernode.com/linkedin"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Quick overview
This workflow runs daily (or on manual test) to turn the newest post from an RSS feed into a coordinated social kit using OpenRouter for copy and Zvid for rendering, producing a LinkedIn square video, an X teaser video, and an Open Graph share image.

## How it works
1. Runs every day at 9am (or when triggered manually) and loads the workflow configuration values.
2. Reads the configured RSS feed, picks the newest post, and stops if that post was already processed in a previous production run.
3. Fetches the blog post page (with feed text as fallback), then sends the article text to OpenRouter to generate JSON copy for the LinkedIn video, X teaser, and Open Graph image.
4. Checks the configured background music URL with an HTTP HEAD request and skips the audio track if it is unreachable or exceeds the size limit.
5. Builds project JSON for each enabled asset, validates the payload and credit quote with the Zvid node, then follows the configured dryRun branch.
6. Optional dryRun=true creates draft projects and returns editor links with a credit estimate. This branch requires an installed Zvid node version exposing Project → Create; AI calls may still incur charges.
7. With the default dryRun=false, renders one asset at a time, retries explicit rate-limit rejections, and polls each job within the configured timeout. Run summary returns media links; the gated Watch video step opens completed videos and the share image for review.

## Setup
1. Install @zvid/n8n-nodes-zvid from Settings → Community nodes before configuring credentials. A workspace owner/admin may need to install it. Create your Zvid API key at https://app.zvid.io/api-keys, then select a Zvid API credential with Base URL https://api.zvid.io on every Zvid node.
2. Add an OpenRouter API credential for the OpenRouter Chat Completions request used to generate the kit copy.
3. Update the Config values (feedUrl, brandName, domainOverride, brand colors/fonts, output toggles, durations, and musicUrl) to match your blog and branding.
4. The template defaults to dryRun=false: running it spends Zvid render credits, and AI usage may charge separately. To preview drafts with dryRun=true, first confirm your installed Zvid node exposes Project → Create. Test manually, inspect every output, and only then enable the daily schedule.

## Requirements
- An n8n workspace that permits the Zvid community package, funded Zvid and OpenRouter accounts, a public RSS feed and article page, and permission to use the source content and any background music.

## Customization
- In Config, adjust branding, fonts, copy labels, timing, music, the OpenRouter model and output toggles. Keep at least one of makeLinkedInVideo, makeXTeaser and makeOgImage enabled.

## Additional info
Manual tests can rebuild the newest post; the last-post marker persists only on production executions. Review the copy against the source article before sharing. This workflow generates assets but does not publish to social platforms. Full guide: https://github.com/Zvid-io/zvid-n8n/blob/master/workflows/blog-content-kit.md

## 🔗 Nodes Used

HTTP Request, RSS Read, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
