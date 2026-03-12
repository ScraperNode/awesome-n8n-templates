# ⚒️ Automated hazard analysis for ISO 26262 compliance using GPT-4

> ⚡ **561 views** · ⚒️ [Engineering](../)

## Description

**Modular Hazard Analysis Workflow : Free Version**

## **Business Value Proposition**
**Accelerates ISO 26262 compliance** for automotive/industrial systems by automating safety analysis while maintaining rigorous audit standards.

## :chart_with_upwards_trend: **Key Benefits**
+ Time
    - Instant report generation vs. weeks of documentation for HAZOP

+ Risk Mitigation
    - Pre-validated templates reduce human error

### Quick guide
- Input a systems_description file to the workflow
- Provide an OPENAI_API_KEY to the chat model. You can also replace the chat model with the model of your interest.


### :play_or_pause_button: Running the Workflow
Refer to the [github repo](https://github.com/ManiRajan1/Project_repositories/blob/AI_Assisted_HARA/docs/README.AI_Assisted_HARA.md) to understand in detail about how the workflow can be used 

### :email: Contact
For collaboration proposals or security issues, contact me by [Email](gopalakrishnan.manirajan@gmail.com).


## :warning: Validation & Limitations

### **AI-Assisted Analysis Considerations**
| Advantage | Mitigation Strategy | Implementation Example |
|-----------|---------------------|------------------------|
| Rapid hazard identification | Human validation layer | Manual review nodes in workflow |
| Consistent S/E/C scoring | Rule-based validation | ASIL-D → Redundancy check |
| Edge case coverage | Cross-reference with historical data | Integration with incident databases |

## 🔗 Nodes Used

AI Agent, OpenAI Chat Model, Simple Memory, Read/Write Files from Disk, Convert to File, Extract from File

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)

---

## 💡 Pro Tip

If you need GitHub data beyond what the REST API gives you, [ScraperNode](https://scrapernode.com/github) has a [repository scraper](https://scrapernode.com/github/scrapers/repositories) that extracts metadata at scale without token rate limits.
