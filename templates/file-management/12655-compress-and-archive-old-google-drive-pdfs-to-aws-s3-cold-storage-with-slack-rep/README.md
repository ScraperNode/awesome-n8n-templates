# 📁 Compress and archive old Google Drive PDFs to AWS S3 cold storage with Slack reports

> ⚡ **3 views** · 📁 [File Management](../)

## Description

# Consolidate and compress project archives for cost-optimized cloud storage

## 🎯 Description
Optimize your cloud storage costs by using this automation to intelligently compress and migrate aging project documentation. This workflow allows you to achieve a professional data lifecycle policy by identifying "stale" files in active storage, applying high-ratio PDF compression, and migrating them to cold storage while maintaining a searchable audit trail.

A critical technical feature of this template is the **Luxon-based lifecycle logic**. By utilizing `{{ $now.minus({ months: 6 }).toISODate() }}`, the workflow dynamically filters for files that haven't been modified in over half a year. It then generates a unique archive path using `{{ $now.toFormat('yyyy/MM_MMM') }}`, ensuring your cold storage bucket remains perfectly indexed by year and month without any manual folder creation or renaming.

### ✨ How to achieve automated storage optimization
You can achieve an enterprise-grade archiving system by using the available tools to:

1. **Monitor and age-gate** — Use the **Google Drive** node to list project files and a **Code node** to compare file metadata against a 6-month "hot storage" threshold.
2. **Compress and verify** — Pass identified files through the **HTML to PDF** compression engine to reduce file size by up to 80% while maintaining document readability.
3. **Migrate to cold storage** — Stream the compressed binary directly to **AWS S3** (or a dedicated archive folder), using dynamic naming conventions for organized retrieval.
4. **Log and notify** — Automatically alert the IT team via **Slack** upon batch completion, providing a report on the specific files migrated and the storage path used.

### 💡 Key features
* **Intelligent cost reduction** — Automatically targets large, old files for compression, significantly reducing long-term "Cold Storage" billing.
* **Dynamic indexing** — Uses **Luxon** to build a chronological folder structure in the cloud, making multi-year archives easy to navigate.
* **Integrity assurance** — The workflow ensures files meet specific age and type criteria before moving them, preventing accidental archival of active documents.

### 📦 What you will need
1. **Google Drive** — Your "Hot" storage where active project files are kept.
2. **HTML to PDF Node** — Used here for the PDF compression and optimization engine.
3. **AWS S3** — Your destination "Cold" storage for long-term archiving.
4. **Slack** — For automated reporting on storage optimization status.

---

**Ready to optimize your cloud storage?** Import this template, connect your credentials, and start saving on long-term data costs today.

## 🔗 Nodes Used

Slack, Google Drive, S3, Schedule Trigger

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
