# GitHub Template And Migration Package Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a GitHub-importable Paperclip company template for the JARVIS city-run AI company and add a practical onboarding plus migration package for an external OpenClaw co-CEO.

**Architecture:** The deliverable is a repository-contained template folder centered on `paperclip.manifest.json`, `COMPANY.md`, and per-agent `AGENTS.md` files that can be imported from a GitHub tree URL. Because current Paperclip portability imports company and agents, but not existing projects, repos, files, or memory state, the package also includes explicit runbooks and prompts that tell the OpenClaw co-CEO how to migrate those assets into Paperclip after joining.

**Tech Stack:** Markdown, JSON, existing Paperclip company portability format, existing invite and join-request API flows.

---

### Task 1: Create the GitHub template skeleton

**Files:**
- Create: `doc/blueprints/jarvis-city-ai-company-template/paperclip.manifest.json`
- Create: `doc/blueprints/jarvis-city-ai-company-template/COMPANY.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/README.md`

**Step 1: Define the importable company manifest**

Write a manifest with company metadata and the agent list using current portability fields only.

**Step 2: Add company-level operating guidance**

Write `COMPANY.md` with mission, operating loop, org summary, and launch notes.

**Step 3: Add template usage notes**

Write `README.md` that explains GitHub import expectations, current limitations, and next steps after import.

### Task 2: Add all city agents with mandatory superpowers usage

**Files:**
- Create: `doc/blueprints/jarvis-city-ai-company-template/agents/jarvis/AGENTS.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/agents/berlin/AGENTS.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/agents/tokio/AGENTS.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/agents/rio/AGENTS.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/agents/helsinki/AGENTS.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/agents/moskau/AGENTS.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/agents/nairobi/AGENTS.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/agents/oslo/AGENTS.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/agents/denver/AGENTS.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/agents/lissabon/AGENTS.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/agents/stockholm/AGENTS.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/agents/palermo/AGENTS.md`

**Step 1: Reuse the approved org design**

Keep the previously approved role mapping and reporting tree.

**Step 2: Add a universal superpowers requirement**

Each agent prompt must explicitly require use of the `obra/superpowers` skillset, regardless of provider.

**Step 3: Keep prompts operational**

Prompts should guide Paperclip issue usage, delegation, escalation, and role-specific outcomes.

### Task 3: Add the OpenClaw co-CEO onboarding and migration package

**Files:**
- Create: `doc/blueprints/jarvis-city-ai-company-template/runbooks/openclaw-co-ceo-join.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/runbooks/openclaw-co-ceo-first-30-tasks.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/runbooks/migration-inventory-template.md`
- Create: `doc/blueprints/jarvis-city-ai-company-template/prompts/openclaw-co-ceo-system-prompt.md`

**Step 1: Document the join path**

Describe how to generate an agent invite, how the OpenClaw agent accepts it, how approval works, and how the API key is claimed.

**Step 2: Define join defaults guidance**

Document the OpenClaw gateway config fields that should be included so the agent can join smoothly.

**Step 3: Write the first migration prompt and tasks**

Give the co-CEO a precise first mission to inventory and migrate knowledge, repos, projects, planned ideas, and important files into Paperclip issues, comments, attachments, and tracked work.

### Task 4: Verify the structure

**Files:**
- Verify: `doc/blueprints/jarvis-city-ai-company-template/paperclip.manifest.json`

**Step 1: Check manifest parseability**

Use `jq` to confirm the manifest is valid JSON.

**Step 2: Check agent references**

Use `jq` to verify all referenced agent files exist and all reporting slugs resolve.

**Step 3: Check coverage**

Confirm the template contains 12 imported agents plus the external OpenClaw co-CEO runbooks.
