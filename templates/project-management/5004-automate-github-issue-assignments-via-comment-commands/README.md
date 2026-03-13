# 📋 Automate GitHub Issue Assignments via Comment Commands

> ⚡ **267 views** · 📋 [Project Management](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

# 🤖 GitHub Auto-Assign Bot

**Streamline your open source project** with intelligent issue assignment automation.

## ✨ What It Does
Automatically assigns GitHub issues to contributors who comment "assign me" - eliminating manual triage work and creating a fair, first-come-first-served system.

## 🔑 Key Features
- **Smart Detection**:  
  Monitors both new issues and comments for assignment requests
- **Conflict Prevention**:  
  Checks existing assignments before making new ones
- **Auto-Labeling**:  
  Adds "assigned" labels for better tracking
- **Self-Service Assignment**:  
  Contributors claim issues with simple "assign me" command
- **Polite Responses**:  
  Automatically notifies when issues are already assigned

## 🎯 Perfect For
- Open source maintainers
- Development teams managing GitHub repos
- Projects with active contributor communities
- Anyone reducing manual issue management

## ⚙️ Setup Requirements
1. GitHub repository with issues enabled
2. n8n instance with GitHub OAuth credentials
3. 5 minutes configuration time

## 🚀 How Contributors Use It
1. Find an unassigned issue
2. Comment `assign me` 
3. Get automatically assigned
4. Start coding immediately → no maintainer approval needed!

## ✅ Benefits
- **Reduces maintainer workload** - No manual assignments
- **Faster contributor onboarding** - Instant self-service
- **Prevents conflicts** - Built-in assignment checking
- **Scales automatically** - Works across unlimited issues
- **Improves contributor experience** - Simple, clear process

## ⚡ Workflow Triggers
- New GitHub issues containing "assign me"
- New comments with "assign me" on existing issues
- Automatic label management
- Conflict resolution responses

---

&gt; **Transform your GitHub workflow** - Perfect for growing open source projects and development teams!

## 🔗 Nodes Used

GitHub, Github Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
