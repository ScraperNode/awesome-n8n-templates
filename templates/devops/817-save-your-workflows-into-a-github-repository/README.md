# ⚙️ Save your workflows into a GitHub repository

> ⚡ **13,336 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
>
> <a href="https://scrapernode.com/github"><img src="https://img.shields.io/badge/View_All_Scrapers_%E2%86%92-ff6d5a?style=for-the-badge" alt="View All Scrapers" /></a>

## Description

## Basics

Provides a mechanism to save all your workflows into a github repository and path (of your choosing).  These can then be shared through your entire org and used to track changes (if you make any sad 'oopsies'.

## Flow

1. Obtains and creates listing of currently configured workflows.
2. Iterates through each workflow looking at the following
	1. Github source (if present)
	2. Actual workflow code (from N8N)
3. Workflow code is sorted and compared for any changes
4. If changed (or new) the workflows are saved / archived into github.

## Configuration

Most of the configuration is done in the `Globals` node which houses the repo detail for github nodes.  The only other dependency is that it by default looks for a `GitHub` credential, if you use something other than that precise wording you will need to change the credential used on the respective nodes.  We gave it 'Manage' rights, but that was only so that it was able to override a requirement for checks to complete?  Most would probably only need 'Write' privileges.

## Background

Well, so we initially started using N8N just as a kubernetes-based service housed with its DB running inside the pod.  Worked great for getting to know N8N and we jut kept all our workflows and credentials listed in a readme.  Fast forward about a year...

We have migrated this into our 'production' toolsets and maintain a bunch of team worflows inside it (not company-wide, but LOTS of team fun).  While trying to spin a copy of our production RDS database, the ++actual++ production database was deleted, and in doing so AWS was nice enough to wipe our snapshots too!! Yea!

Thankfully it only took us a few hours to get everything back up and running thanks to this, so I'm sharing it for everyone to benefit.  We have used it to restore old workflows, changes, and now to test our full DR proceedures! (Ok, I might have taken that a bit far)

## 🔗 Nodes Used

Cron, Function, GitHub, HTTP Request, Start

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
