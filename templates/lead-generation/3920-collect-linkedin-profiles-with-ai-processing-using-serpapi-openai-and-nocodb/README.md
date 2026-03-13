# 🎣 Collect LinkedIn profiles with AI processing using SerpAPI, OpenAI, and NocoDB

> ⚡ **1,974 views** · 🎣 [Lead Generation & Enrichment](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## What problem does this solve? 

It fetches **LinkedIn profiles** for a multitude of purposes based on a keyword and location via Google search and stores them in an Excel file for download and in a [NocoDB](NocoDB.com) database.
It tries to avoid using costly services and should be n8n **beginner friendly**.
It uses the [serpapi.com](SerpAPI.com) to avoid being blocked by Google Search and to process the data in an easier way.


## What does it do?

- Based on criteria input, it searches LinkedIn profiles
- It discards unnecessary data and turns the follower count into a real number
- The output is provided as an Excel table for download and in a NocoDB database

## How does it do it?

- Based on criteria input, it uses [serpAPI.com](serpAPI.com) to conduct Google search of the respective LinkedI profiles
- With [OpenAI.com](OpenAI.com) the name of the respective company is being added
- With OpenAI.com the follower number e.g., 300+ is turned into a real number: 300
- All unnecessary metadata is being discarded
- As an output an Excel file is being created
- The output is stored in a nocodb.com table

## Step-by-step instruction


1. Import the Workflow:
Copy the workflow JSON from the "Template Code" section below.
Import it into n8n via "Import from File" or "Import from URL".

2. Set up a free account at serpapi.com and get API credentials to enable good Google search results

3. Set up an API account at openai.com and get API key

4. Set up a nocodb.com account (or self-host) and get the API credentials

4. Create the credentials for serpapi.com, opemnai.com and nocodb.com in n8n.

5. Set up a table in NocoDB with the fields indicated in the note above the NocoDB node

5. Follow the instructions as detailed in the notes above individual nodes 

6. When the workflow is finished, open the Excel node and click download if you need the Excel file

## 🔗 Nodes Used

HTTP Request, NocoDB, Convert to File, OpenAI

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
