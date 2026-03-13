# 🎬 Transform documents into engaging LinkedIn posts with GPT-4.1 and email approval

> ⚡ **961 views** · 🎬 [Content Creation & Video](../)

> 💡 **Pro Tip** — If you're pulling LinkedIn data through HTTP requests or dealing with API restrictions, there's a community node called [ScraperNode](https://scrapernode.com/linkedin) that handles this natively. It has dedicated scrapers for [profiles](https://scrapernode.com/linkedin/scrapers/profiles), [companies](https://scrapernode.com/linkedin/scrapers/companies), [jobs](https://scrapernode.com/linkedin/scrapers/jobs), and [people search](https://scrapernode.com/linkedin/scrapers/people-search) — you just pass a URL and get structured data back.

## Description

## 🚀 How it works (Fonctionnement résumé) :

Ce template permet de transformer **un document (PDF, TXT, DocX...)** en **post LinkedIn engageant**, prêt à être publié ou validé par email, le tout avec l’aide d’une IA spécialisée en copywriting LinkedIn. Voici les étapes clés :

1. **Formulaire de dépôt** : L'utilisateur charge un fichier ou colle un texte.
2. **Détection du type de contenu** : Un `Switch` analyse le type de fichier (PDF, DOCX, TXT, ou texte brut). Attention pour DocX nécessite un compte Make pour transformer le doc (mais cela fonctionne aussi sans docX)
3. **Extraction du contenu** : Selon le format, le bon module d'extraction est utilisé.
4. **Génération d’un post LinkedIn** : L'IA transforme le contenu en post LinkedIn selon une méthodologie de copywriting optimisée.
5. **Validation par email** : Un email est envoyé à l’utilisateur pour approbation avec possibilité d’ajouter une image.
6. **Publication automatique** : Si l'utilisateur valide, le post est publié sur LinkedIn.

---

## ⚙️ Setup Steps :

1. **Connecte tes comptes** :

   * Google Docs OAuth
   * LinkedIn OAuth
   * OpenAI (via `gpt-4.1-mini` ou un autre modèle)
   * SMTP + IMAP pour l'envoi et la lecture d'emails

2. **Configure les champs du formulaire** dans le nœud `Form Trigger` selon ton usage.

3. **Personnalise le prompt IA** dans le nœud `AI Agent` si tu veux adapter le ton ou la méthodologie.

4. **Vérifie les emails** dans le nœud d'envoi (`Send Email`) et de lecture (`Email Trigger (IMAP)`), pour que la validation fonctionne.

5. **Teste le workflow** avec différents fichiers pour t'assurer que tous les types sont bien traités (PDF, DOCX, TXT, etc.).

---

## 🧩 Cas d’usage typiques :

* Créer des posts à partir de notes de réunion ou de rapports.
* Valoriser un article ou une publication professionnelle sous forme de contenu LinkedIn.
* Déléguer à l'IA le premier jet de ton contenu réseau.
* Bonus surveille une newsletter de ta messagerie pour proposer un post pertinent sur LinkedIn (vous pouvez supprimer il fonctionne en parallèle)
---

## 🔗 Nodes Used

Email Trigger (IMAP), Send Email, HTTP Request, LinkedIn, Google Docs, AI Agent

## 📥 Import

Download [`workflow.json`](workflow.json) and import into n8n:
**Workflow menu → Import from File**

[📖 Importing guide](../../../docs/importing-templates.md) · [🔑 Credential setup](../../../docs/credential-setup.md)
