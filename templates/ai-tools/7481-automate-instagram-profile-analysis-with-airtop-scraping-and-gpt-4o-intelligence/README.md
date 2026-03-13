# 🎯 Automate Instagram profile analysis with Airtop scraping and GPT-4o intelligence

> ⚡ **1,192 views** · 🎯 [AI Summarization & Classification](../)

> 💡 **Pro Tip** — Heads up — if this workflow's Instagram scraping breaks (it happens whenever Meta updates their frontend), [ScraperNode](https://scrapernode.com/instagram) is a community node that handles [profiles](https://scrapernode.com/instagram/scrapers/profiles), [posts](https://scrapernode.com/instagram/scrapers/posts), [reels](https://scrapernode.com/instagram/scrapers/reels), and [comments](https://scrapernode.com/instagram/scrapers/comments) without any HTML parsing.

## Description

# What's up Guys. I'm Luís 🙋🏻‍♂️
### If you need to analyze dozens of Instagram profiles every week, this isn't just another automation. It’s your new secret weapon.

It’s a fully structured workflow for anyone who needs to analyze Instagram profiles at scale, with AI, and keep everything tracked and organized — no manual effort, no copy-paste, and total control over the process.

## What this workflow does:
- Detects when a new or updated Instagram profile appears in Google Sheets
- Checks if the profile still needs analysis
- **Creates a account in Airtop and after create a session and new window in Airtop** for Instagram scraping (Airtop offers 5,000 free credits/month!)
- Automatically accesses the Instagram profile and scrapes public data
- Cleans and refines the data with OpenAI (AI) for maximum accuracy
- Performs a second layer of AI analysis for deep, actionable insights
- Updates all results and insights directly back into Google Sheets

### 🧩 How the flow is structured

This workflow is strategically divided into two independent parts to ensure clarity, organization, and easy scalability:

#### Part 1 – Profile Capture and Data Extraction

- Triggered by a new/updated row in Google Sheets - **Take here your Template of Google Sheets** &lt;&gt; [[TEMPLATE] - Instagram Profiles](https://docs.google.com/spreadsheets/d/1rXvJuMg1LHsF5dHZobFmfZ3wk60jjp-bC-WkmIH8Jqc/edit?usp=sharing)
- Checks if the profile needs analysis
- Starts a session and new window on Airtop
- Scrapes the public Instagram data

#### Part 2 – AI Analysis and Results Delivery

- Cleans and structures Airtop’s output for AI analysis
- Uses OpenAI to process and refine the data
- Applies a second AI prompt for actionable insights
- Updates Google Sheets with all processed results

This structure makes the flow easier to manage, customize, and scale — plug in other tools without breaking the logic.

## Tools used:
✅ **Airtop** (*Instagram scraping & session management*)  
✅ **Google Sheets** (*database & dashboard*)  
✅ **OpenAI** (*data parsing, refinement & analysis*)

## How to set it up:

- Connect your Google Sheet to the workflow  
- Register on Airtop, get your free credits, and set up your session: [https://portal.airtop.ai/](https://portal.airtop.ai/)  
- Add your Airtop credentials in n8n  
- Add your OpenAI API key  
- (Optional) Customize the AI prompts and sheet logic

## Why this workflow stands out:
📊 ***Fully automated**: analyze dozens or hundreds of profiles without manual work*  
🤖 **Double-layer AI analysis** for maximum insights  
🚀 Built to scale — ideal for **agencies, marketing teams, communities, and creators**  
📝 Everything tracked and accessible in Google Sheets  
🔗 **Airtop integration**: scrape Instagram with zero headache

---

✅ Works on both n8n Cloud and Self-hosted  
🔐 100% secure. No hacks. No shortcuts.

Want to adapt this flow for your business, team, or community?

📩 Custom requests: WhatsApp me at +5534992569346

---- 

## Português &lt;&gt; PT-BR

# Fala, galera! Eu sou o Luís 🙋🏻‍♂️  
### Se você precisa analisar vários perfis do Instagram por semana, esse **não é só mais um fluxo**, é uma verdadeira mão na roda.

É uma automação ponta a ponta, feita pra quem analisa perfis do Instagram em escala, com IA, tudo organizado direto na planilha, e sem trabalho manual ou copiar e colar.

## O que esse fluxo faz:
- Detecta quando um novo perfil é cadastrado ou atualizado no Google Sheets  
- Confere se o perfil ainda precisa ser analisado  
- **Cria uma nova conta no Airtop e depois Cria uma sessão e uma nova janela no Airtop** para buscar dados do Instagram (Airtop libera 5.000 créditos grátis todo mês!)  
- Acessa automaticamente o perfil do Instagram e coleta os dados públicos  
- Limpa e ajusta os dados com a OpenAI para garantir máxima precisão  
- Realiza uma segunda análise com IA para entregar insights profundos  
- Atualiza todos os resultados direto na sua planilha do Google Sheets

### 🧩 Como o fluxo está estruturado

Esse fluxo foi estrategicamente dividido em **duas partes independentes**, garantindo clareza, organização e escalabilidade:

#### Parte 1 – Captura do Perfil e Extração dos Dados

- Dispara quando um perfil novo ou atualizado aparece na planilha. **Pegue aqui o Template da sua planilha.** &lt;&gt; [[TEMPLATE] - Instagram Profiles](https://docs.google.com/spreadsheets/d/1rXvJuMg1LHsF5dHZobFmfZ3wk60jjp-bC-WkmIH8Jqc/edit?usp=sharing)
- Verifica se precisa de análise  
- Inicia sessão e janela nova no Airtop  
- Faz o scraping dos dados públicos do Instagram

#### Parte 2 – Análise com IA e Entrega dos Resultados

- Limpa e estrutura a saída do Airtop para análise por IA  
- Usa a OpenAI para processar e refinar os dados  
- Aplica um segundo prompt de IA para gerar diagnósticos e recomendações  
- Atualiza todos os resultados prontos na planilha

Essa estrutura torna o fluxo muito mais fácil de manter, adaptar e escalar — pode integrar novas ferramentas sem bagunçar nada.

## Ferramentas utilizadas:
✅ **Airtop** (*raspagem e gerenciamento de sessão do Instagram*)  
✅ **Google Sheets** (*base e painel de acompanhamento*)  
✅ **OpenAI** (*tratamento, ajuste e análise via IA*)

## Como configurar:

- Conecte sua planilha Google Sheets ao fluxo  
- Cadastre-se no Airtop e ative seus créditos gratuitos: [https://portal.airtop.ai/](https://portal.airtop.ai/)  
- Adicione suas credenciais do Airtop no n8n  
- Coloque sua chave da OpenAI  
- (Opcional) Personalize os prompts da IA e a lógica da planilha

## Por que esse fluxo se destaca:
📊 ***Automação completa**: analise dezenas ou centenas de perfis sem esforço manual*  
🤖 **Dupla análise IA** para insights de verdade  
🚀 Pronto pra escalar — ideal para **agências, times de marketing, comunidades e criadores**  
📝 Tudo rastreado e acessível no Google Sheets  
🔗 **Integração Airtop**: scraping do Instagram sem dor de cabeça

---

✅ Compatível com n8n Cloud e Self-hosted  
🔐 100% seguro. Sem gambiarra. Sem atalhos.

Quer adaptar esse fluxo pro seu negócio, time ou comunidade?

📩 Solicitação personalizada: me chama no WhatsApp +5534992569346

---

## 🔗 Nodes Used

Google Sheets, Google Sheets Trigger, Filter, AI Agent, OpenAI Chat Model, Auto-fixing Output Parser

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
