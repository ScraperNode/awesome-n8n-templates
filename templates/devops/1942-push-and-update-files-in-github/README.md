# ⚙️ Push and update files in GitHub

> ⚡ **6,985 views** · ⚙️ [DevOps & CI/CD](../)

> 💡 **Pro Tip** — If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.

## Description

This workflow performs various Git operations. It starts with a manual trigger, sets the local repository path, decodes a file and then updates a file's content, adds, commits, and pushes changes to a GitHub repository, and finally pulls changes.

The upper branch of the workflow retrieves a specific file ("README.md") from a GitHub repository ("git_push_article") owned by "teds-tech-talks." It then decodes the file's binary data into readable text using a code node. The decoded content is used to update the file by adding a timestamp and data. Finally, the modified file is pushed back to the repository using a GitHub node, completing the process of editing and updating the file directly via the workflow.

This bottom branch of the workflow makes changes to a local Git repository. It starts by updating the "README.md" file with a timestamp and some content. Then, it adds the modified files, commits the changes with a message, and pushes them to a remote GitHub repository owned by "teds-tech-talks." Additionally, the workflow allows pulling changes from the remote repository into the local repository. The goal is to demonstrate how to perform various Git operations using n8n nodes, including adding, committing, pushing, and pulling changes.

## 🔗 Nodes Used

GitHub, Git

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
