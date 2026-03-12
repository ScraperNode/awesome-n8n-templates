# ⚙️ Daily Postgres table backup to GitHub in CSV format

> ⚡ **571 views** · ⚙️ [DevOps & CI/CD](../)

## Description

This workflow automatically backs up all public Postgres tables into a GitHub repository as CSV files every 24 hours.  
It ensures your database snapshots are always up to date updating existing files if data changes, or creating new backups for new tables.  

**How it works:**  
1. **Schedule Trigger** – Runs daily to start the backup process.  
2. **GitHub Integration** – Lists existing files in the target repo to avoid duplicates.  
3. **Postgres Query** – Fetches all table names from the `public` schema.  
4. **Data Extraction** – Selects all rows from each table.  
5. **Convert to CSV** – Saves table data as CSV files.  
6. **Conditional Upload** –  
   - If the table already exists in GitHub → Update the file.  
   - If new → Upload a new file.  

---

### **Postgres Tables Preview**
![postgres table](https://articles.emp0.com/wp-content/uploads/2025/08/backup-postgres-to-github-tables.png)

---

### **GitHub Backup Preview**
![github backup](https://articles.emp0.com/wp-content/uploads/2025/08/backup-postgres-to-github-repo.png)

---

**Use case:**  
Perfect for developers, analysts, or data engineers who want **daily automated backups** of Postgres data without manual exports keeping both history and version control in GitHub.  

**Requirements:**  
- Postgres credentials with read access.  
- GitHub repository (OAuth2 connected in n8n).

## 🔗 Nodes Used

GitHub, Postgres, Schedule Trigger, Convert to File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
