export const saas = {
    "productName": "Impact Metrics Ledger",
    "category": "Finance & Grants",
    "northStar": "verified outcomes collected after project handoff",
    "segments": [
        "Volta leadership",
        "Chapter leads",
        "CSR partners",
        "Program evaluators"
    ],
    "jobs": [
        "Track baseline, handoff, and 30/60/90-day outcomes",
        "Separate client-identifying evidence from sponsor summaries",
        "Aggregate impact by chapter, service line, and cohort",
        "Produce CSR-ready dashboards and exports"
    ],
    "plans": [
        {
            "name": "Community",
            "price": "Free",
            "promise": "Single-project impact ledger"
        },
        {
            "name": "Chapter",
            "price": "79/mo",
            "promise": "Multi-project follow-up tracker and dashboards"
        },
        {
            "name": "Network",
            "price": "249/mo",
            "promise": "Cross-chapter metrics, partner reporting, anonymization"
        },
        {
            "name": "Enterprise",
            "price": "Custom",
            "promise": "CSR dashboards and impact data governance"
        }
    ],
    "metrics": [
        {
            "label": "Verified outcomes",
            "current": 31,
            "target": 40,
            "note": "Outcomes with approved evidence"
        },
        {
            "label": "Follow-up coverage",
            "current": 67,
            "target": 90,
            "note": "Projects with 30/60/90-day check-ins"
        },
        {
            "label": "Anonymization readiness",
            "current": 82,
            "target": 100,
            "note": "Records safe for sponsor reporting"
        },
        {
            "label": "CSR story completeness",
            "current": 74,
            "target": 90,
            "note": "Projects with narrative and metrics"
        }
    ],
    "playbooks": [
        "Baseline capture",
        "Handoff outcome definition",
        "30/60/90-day follow-up",
        "Evidence approval review",
        "CSR summary export"
    ],
    "integrations": [
        "CRM/client roster import",
        "Google Forms follow-up survey",
        "Data studio dashboard export",
        "Sponsor report CSV",
        "Slack reminder workflow"
    ],
    "controls": [
        "No outcome counted without baseline and evidence",
        "Anonymized exports remove sensitive fields",
        "Follow-up dates must be after handoff",
        "Sponsor summaries require governance approval"
    ],
    "roadmap": [
        "Longitudinal project ledger",
        "Anonymized aggregation engine",
        "CSR dashboard templates",
        "Outcome taxonomy manager",
        "Partner impact API"
    ],
    "personas": [
        {
            "name": "Impact analyst",
            "role": "Tracks outcomes after project handoff",
            "pain": "Follow-up data is inconsistent and hard to verify",
            "success": "Every outcome has baseline, follow-up, and evidence",
            "activation": "Create first outcome record"
        },
        {
            "name": "Chapter lead",
            "role": "Aggregates impact across student projects",
            "pain": "Sponsor reporting takes manual spreadsheet work",
            "success": "Chapter dashboard is anonymized and export-ready",
            "activation": "Review chapter impact board"
        },
        {
            "name": "CSR partner",
            "role": "Needs credible, privacy-safe impact stories",
            "pain": "Raw client data cannot be shared externally",
            "success": "Receives anonymized metrics and story summaries",
            "activation": "Export CSR summary"
        }
    ],
    "journeys": [
        {
            "stage": "Baseline capture",
            "moment": "Record starting state, metric definition, and owner consent",
            "success": "Baseline is documented before intervention",
            "automation": "Baseline checklist"
        },
        {
            "stage": "Handoff definition",
            "moment": "Define expected 30/60/90-day outcomes and evidence",
            "success": "Outcome taxonomy and follow-up dates set",
            "automation": "Outcome template generator"
        },
        {
            "stage": "Follow-up collection",
            "moment": "Gather client updates, proof, and qualitative story",
            "success": "Coverage reaches target without PII leaks",
            "automation": "Survey/reminder workflow"
        },
        {
            "stage": "Evidence approval",
            "moment": "Review evidence quality and anonymization readiness",
            "success": "Only verified outcomes count",
            "automation": "Governance approval queue"
        },
        {
            "stage": "Sponsor reporting",
            "moment": "Aggregate chapter/network metrics and stories",
            "success": "CSR-ready export excludes sensitive fields",
            "automation": "Anonymized dashboard and CSV export"
        }
    ],
    "features": [
        {
            "name": "Baseline and outcome ledger",
            "tier": "Community",
            "description": "Project-level baseline, handoff, and follow-up metric records",
            "evidence": "Outcome cannot count without baseline and evidence"
        },
        {
            "name": "30/60/90 follow-up scheduler",
            "tier": "Chapter",
            "description": "Reminder cadence and coverage tracking after handoff",
            "evidence": "Follow-up dates must be after handoff and owner-assigned"
        },
        {
            "name": "Evidence approval workflow",
            "tier": "Chapter",
            "description": "Quality review for proof, story consent, and metric validity",
            "evidence": "Verified status requires reviewer and source note"
        },
        {
            "name": "Anonymization engine",
            "tier": "Network",
            "description": "Sponsor-safe aggregation and sensitive field removal",
            "evidence": "Exports document removed fields and grouping level"
        },
        {
            "name": "CSR story builder",
            "tier": "Network",
            "description": "Outcome stories linked to quantitative metrics and consent",
            "evidence": "Story completeness includes metric, narrative, and approval"
        },
        {
            "name": "Partner impact API plan",
            "tier": "Enterprise",
            "description": "Structured export contracts for funders and CSR dashboards",
            "evidence": "API fields map to approved, anonymized outcome taxonomy"
        }
    ],
    "experiments": [
        {
            "hypothesis": "Follow-up reminders increase outcome coverage",
            "measure": "Follow-up coverage",
            "target": "90% coverage",
            "cadence": "weekly"
        },
        {
            "hypothesis": "Evidence approval improves sponsor trust",
            "measure": "Verified outcomes",
            "target": "40 verified outcomes",
            "cadence": "monthly"
        },
        {
            "hypothesis": "Anonymized templates reduce reporting risk",
            "measure": "Anonymization readiness",
            "target": "100% ready",
            "cadence": "per export"
        },
        {
            "hypothesis": "Story guidance improves CSR narrative quality",
            "measure": "CSR story completeness",
            "target": "90% complete",
            "cadence": "monthly"
        }
    ],
    "risks": [
        {
            "risk": "Outcomes counted without baseline proof",
            "mitigation": "Baseline and evidence required before verified status",
            "owner": "Impact analyst",
            "severity": "high"
        },
        {
            "risk": "Sponsor exports reveal client identity",
            "mitigation": "Anonymization controls and aggregation thresholds",
            "owner": "Chapter lead",
            "severity": "high"
        },
        {
            "risk": "Follow-up dates are missed after project handoff",
            "mitigation": "30/60/90 scheduler and reminder escalation",
            "owner": "Project owner",
            "severity": "medium"
        },
        {
            "risk": "Qualitative stories overstate causality",
            "mitigation": "Story builder separates observed outcome from attribution",
            "owner": "CSR reviewer",
            "severity": "medium"
        }
    ],
    "automations": [
        {
            "name": "Follow-up scheduler",
            "trigger": "Project handoff marked complete",
            "action": "Create 30/60/90 check-in tasks",
            "owner": "Impact analyst"
        },
        {
            "name": "Evidence approval queue",
            "trigger": "Outcome evidence submitted",
            "action": "Route proof and consent to reviewer",
            "owner": "Chapter lead"
        },
        {
            "name": "Anonymized sponsor export",
            "trigger": "CSR report requested",
            "action": "Remove sensitive fields and aggregate metrics",
            "owner": "CSR reviewer"
        },
        {
            "name": "Impact digest",
            "trigger": "Monthly partner report cycle",
            "action": "Generate metrics, stories, and readiness warnings",
            "owner": "Chapter director"
        }
    ],
    "dashboards": [
        {
            "name": "Impact ledger",
            "audience": "Impact analysts",
            "widgets": [
                "Verified outcomes",
                "Follow-up due",
                "Evidence gaps",
                "Story completeness"
            ]
        },
        {
            "name": "Chapter outcomes",
            "audience": "Chapter leads",
            "widgets": [
                "Coverage by cohort",
                "Service-line outcomes",
                "Anonymization readiness",
                "Approval queue"
            ]
        },
        {
            "name": "CSR partner board",
            "audience": "Sponsors",
            "widgets": [
                "Anonymized outcomes",
                "Impact stories",
                "Trendline",
                "Export readiness"
            ]
        }
    ],
    "templates": [
        {
            "name": "CSR impact summary",
            "format": "Markdown",
            "sections": [
                "Outcomes",
                "Stories",
                "Evidence method",
                "Anonymization notes",
                "Next follow-ups"
            ]
        },
        {
            "name": "Outcome ledger CSV",
            "format": "CSV",
            "sections": [
                "Project",
                "Metric",
                "Baseline",
                "Follow-up",
                "Evidence",
                "Approval"
            ]
        },
        {
            "name": "Follow-up survey script",
            "format": "Markdown",
            "sections": [
                "Client check-in",
                "Metric guidance",
                "Story consent",
                "Next contact"
            ]
        }
    ]
};
//# sourceMappingURL=saas.js.map