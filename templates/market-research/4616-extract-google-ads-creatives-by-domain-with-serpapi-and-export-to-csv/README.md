# 📊 Extract Google Ads creatives by domain with SerpAPI and export to CSV

> ⚡ **1,346 views** · 📊 [Market Research & Insights](../)

## Description

## 🧾 Template: Extract Ad Creatives from Google’s Ads Transparency Center

This n8n workflow pulls ad creatives from Google's Ads Transparency Center using SerpApi, filtered by a specific domain and region. It extracts, filters, categorizes, and exports ads into neatly formatted CSV files for easy analysis.

---

### 👤 Who’s it for?

* **Marketing Analysts** researching competitive PPC strategies
* **Ad Intelligence Teams** monitoring creatives from specific brands
* **Digital Marketers** gathering visual and copy trends
* **Journalists & Watchdogs** reviewing ad activity transparency

---

### ✅ Features

* **Fetch creatives** using SerpApi's `google_ads_transparency_center` engine
* **Filter results** to include only ads with an exact match to your target domain
* **Categorize** by ad format: text, image, or video
* **Export CSVs**: Generates a downloadable file for each format under the `/files/` directory

---

### 🛠 How to Use

1. **Edit the “Set Domain & Region” node**

   * `domain`: e.g. `example.com`
   * `region`: SerpApi numeric region code → [See codes](https://serpapi.com/google-ads-transparency-center-regions)

2. **Add your SerpApi API key**

   * In the “Get Ads Page 1” node’s credentials section.

3. **Run the workflow**

   * Click "Test workflow" to initiate the process.

4. **Download your results**

   * Navigate to `/files/` to find:

     * `text_{domain}_ads.csv`
     * `image_{domain}_ads.csv`
     * `video_{domain}_ads.csv`

---

### 📌 Notes

* Only the **first page** (up to 50 creatives) is fetched; pagination is not included.
* Sticky Notes inside the workflow nodes offer helpful internal annotations.
* CSV files include creative-level details: ad copy, images, video links, etc.

## 🔗 Nodes Used

Function, HTTP Request, Spreadsheet File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
