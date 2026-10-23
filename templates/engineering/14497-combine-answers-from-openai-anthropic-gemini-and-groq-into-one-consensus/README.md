# ⚒️ Combine answers from OpenAI, Anthropic, Gemini and Groq into one consensus

> ⚡ **119 views** · ⚒️ [Engineering](../)

## Description

## Stop trusting one model. Let multiple LLMs show you where they agree and where they don't.
 
Ask the same question to multiple LLMs and get one answer you can actually trust. Instead of hoping one model gets it right, this workflow sends your question to four models at once, compares what they say, and catches the ones that sound confident but are probably wrong.
 
This is not a "chain models together" template. Instead of trusting one model's answer, it makes multiple models prove they agree by checking every answer against the others and showing you exactly how much they align.
 
### How it works
 
The workflow runs in four stages:
 
1. **Ask in parallel:** Your question goes to four LLMs at the same time. Each model answers on its own and reports how confident it is. No model sees what the others said.
2. **Compare answers:** A similarity engine checks how much the answers actually agree. It uses two different methods (Jaccard and Cosine) plus extra checks for short answers. So if one model says "4" and another says "The answer is 4," both get credit for agreeing.
3. **Calibrate confidence:** This is the key part. The system looks at what each model claims versus what the others actually said. A model saying it is 95% sure while everyone else disagrees? Its confidence gets cut. A model that is unsure but matches what the group said? Its confidence goes up. Overconfident outliers are usually the first sign of a hallucination.
4. **Deliver the result:** If models agree, you get a single weighted answer with a visual bar showing how strong the agreement is. If they properly disagree, the system switches to peer review mode and shows every answer so you can decide for yourself.
 
### Key Benefits
- **Catches hallucinations with maths, not prompts.** An overconfident model that disagrees with the group gets its score reduced automatically.
- **Three clear tiers.** Strong agreement gets a green label. Partial agreement gets yellow. Weak agreement gets orange. You always know how much to trust the response.
- **Works with any LLM you want.** Default setup uses OpenAI, Anthropic, Gemini, and Groq. Swap any of them or add more.
- **Tells you when a model fails.** If one provider is down or not set up yet, the response says so instead of breaking silently.

### Setup

- Add your API credentials.
- Activate the workflow and open the production chat URL.
- Type any question and wait for the consensus analysis

 
### Who this is for
 
- AI engineers comparing model reliability across different providers
- Product teams that need dependable AI answers for things users will see
- Researchers looking at how different LLMs handle the same question
- Anyone who has been burned by one model confidently making things up
 
### Required APIs & Credentials

Add credentials for the LLM providers you want to use. The default setup includes OpenAI, Anthropic, Google Gemini, and Groq, but you can swap or remove any of them.

### How to customise it
 
- **Swap models:** Replace any LLM node with a different provider. Add more branches if you want and update the Merge node input count.
- **Adjust the calibration:** Open the Confidence Calibration node and change what counts as overconfident, underconfident, or divergent.
- **Change the agreement tiers:** In the Format Chat Message node, the defaults are green at 70%, yellow at 40%, orange below that.
- **Use a different trigger:** Replace the chat trigger with a webhook, Slack command, or scheduled trigger.
- **Send the output somewhere:** The structured JSON from Format Final Output works with Google Sheets, databases, dashboards, or any other workflow.
 
### Known limitations
 
This workflow picks the answer most models agree on. That works well for factual questions. But if three models share the same wrong answer and one model gets it right, the correct answer gets penalised for being the outlier. For trick questions or topics where popular knowledge is wrong, keep that in mind.

## 🔗 Nodes Used

AI Agent, Anthropic Chat Model, OpenAI Chat Model, Chat Trigger, Google Gemini Chat Model, Groq Chat Model

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
