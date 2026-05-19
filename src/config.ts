export const config = {
  "number": 16,
  "slug": "impact-metrics-ledger",
  "title": "Impact Metrics Ledger",
  "category": "Finance & Grants",
  "tagline": "A lightweight ledger for tracking client outcomes after Volta projects ship.",
  "persona": "Volta leadership, chapter leads, and enterprise partners.",
  "gap": "Nonprofits struggle to convert project activity into credible, funder-ready impact evidence.",
  "niche": "Student-powered service nonprofits reporting community impact.",
  "metric": "verified outcomes collected after project handoff",
  "modules": [
    "Outcome definitions",
    "90-day follow-up tracker",
    "Evidence attachments",
    "CSR summary export"
  ],
  "theme": {
    "accent": "#16a34a",
    "accent2": "#86efac",
    "emoji": "\ud83d\udcb8",
    "metricLabel": "Funding readiness",
    "workflow": [
      "Collect verified facts",
      "Map requirements to evidence",
      "Score readiness",
      "Export funder-ready packet"
    ],
    "privacy": "Financial and grant materials can be sensitive. Keep exports local and label confidential notes."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "outcome-definitions",
      "label": "Outcome definitions",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify outcome definitions with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "90-day-follow-up-tracker",
      "label": "90-day follow-up tracker",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify 90-day follow-up tracker with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-attachments",
      "label": "Evidence attachments",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify evidence attachments with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "csr-summary-export",
      "label": "CSR summary export",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify csr summary export with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Impact Metrics Ledger and capture baseline evidence.",
      "Complete the outcome definitions workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Eastside Youth Arts Collective",
    "chapter": "NYC",
    "studentLead": "Volta Student Lead",
    "notes": "Grant and finance readiness project for a small community nonprofit. Impact Metrics Ledger sample.",
    "evidencePrefix": "Impact Metrics Ledger",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
