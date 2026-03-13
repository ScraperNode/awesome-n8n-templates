# 🎬 Auto-generate & post LinkedIn carousels with Gemini AI and Post Nitro

> ⚡ **794 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Try It Out!
### Automatically generate Linkedin Carousal and Upload to Linkedin

Use case : Linkedin Content Creation, specifically carousal. But could be adjusted for many other creations as well.

### How it works
* It will run automatically every 6:00 AM
* Get latest News from TechRadar
* Parse it into readable JSON
* AI will decide, which news resonates with your profile
* Then give the title and description of that news to generate the final linkedin carousal content.
* This step is also trigerred by Form trigger
* After carousal generation, it will give it to Post Nitro to create images on that content. 
* Post Nitro provides the PDF file.
* We Upload the PDf file to Linkedin and get the file ID, in next step, it will be used.
* Finally create the Post description and Post it to Linkedin

### How to use
* It will run every 6:00 AM automatically. Just make it Live
* Submit the form, with correct title and description ( i did not added tests for that so must give that correct 😅 )

### Requirements
* Install Post Nitro community Node
@postnitro/n8n-nodes-postnitro-ai

* We need the following API keys to make it work
1. Google Gemini ( for Gemini 2.5-Flash Usage )
Docs [Google Gemini Key](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini/)
2. Post Nitro credentials ( API key + Template id +  Brand id )
Docs [Post Nitro](https://postnitro.ai/docs/embed/obtaining-an-api-key)
3. Linkedin API key
Docs [Linkedin API](https://docs.n8n.io/integrations/builtin/credentials/linkedin)


### Need Help?
Message on Linkedin the [Linkedin](https://www.linkedin.com/in/shayan-khan20/)

Happy Automation!

## 🔗 Nodes Used

HTTP Request, Schedule Trigger, Basic LLM Chain, n8n Form Trigger, Google Gemini Chat Model, Google Gemini

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
