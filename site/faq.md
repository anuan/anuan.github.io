---
layout: faq
title:  "Frequently asked questions"
---
# Frequently asked questions

Q: What’s wrong with traditional AI/ML in oncology?

A: Traditional AI/ML systems are fantastic at spotting patterns, but they usually work with associations rather than true cause-and-effect relationships. In oncology, that’s risky: a model might predict a patient’s survival time based on a lab result that’s actually just a side effect of another hidden factor, like access to a specific treatment. Such models can be:

**Biased**: They can pick up on confounding factors and dataset quirks.

**Non-transferable**: They may fail in new hospitals, regions, or patient subgroups.

**Non-actionable**: They can’t reliably tell us what would happen if we changed a treatment.

The result is that predictions may look accurate in a test set but lead to poor real-world decisions.

Q: What exactly is a ‘causal model’?

A: A causal model is a framework that starts with an explicit causal story ( often represented as a directed acyclic graph (DAG)) which shows how variables influence each other.

Nodes represent variables (e.g., gene mutations, treatments, outcomes).

Arrows represent direct causal influences (e.g., treatment → biomarker change).

Structure encodes which factors are causes, which are effects, and which are unrelated.

Using this map to start with, we can identify which variables to measure, which to adjust for, and which relationships are most relevant for answering the clinical question. 

Q: How is this different from regular data science?

A: Regular data science often follows this path:

Data → Model → Prediction

Our approach is:

Causal story (DAG) → Targeted data → Model with guardrails

The key difference is that we don’t let the data alone decide the story. We bring in clinical knowledge, biology, and theory first, then collect or select the right data to populate that structure. This makes the model more trustworthy, explainable, and adaptable to new scenarios.

Q: Why does the order ‘DAG → data → model’ matter?

A: If you start with data and skip the causal story, you risk:

* Including bias: confounders can create misleading associations.
* Missing variables: you may not measure key drivers at all.
* Overfitting: the model learns patterns that won’t hold outside your dataset.

When you start with a DAG, you:

* Decide in advance which variables are essential.
* Know exactly how to block backdoor paths that introduce bias.
* Build models that can be interpreted and stress-tested.

It’s like building a house with a blueprint instead of randomly stacking bricks.

Q: What kinds of data do you use?
A: We use observational data from:

* Clinical records (e.g., diagnoses, treatments, outcomes).
* Genomics (e.g., mutations, expression profiles).
* Imaging (e.g., MRI, histopathology scans).
* Laboratory tests (e.g., biomarkers, blood panels).

The crucial point is that we don’t just take ‘everything available’. We deliberately select variables based on the causal story, so each one has a role in estimating the effect we care about and controlling bias.

Q: Can causal models really work in real-world clinical settings?
A: Yes, in fact they are built for that. Since they explicitly account for confounding and bias, causal models can generalize better across populations and hospitals. They can be updated when new evidence emerges, and because they’re interpretable, clinicians can see why a recommendation is made. This transparency is critical for safety, trust and regulatory approval.

Q: How does this help patients and clinicians?
A: Causal models can answer questions like:

“If we start this chemotherapy earlier, how much longer will the patient live?”

“Will this targeted therapy benefit this specific molecular profile?”

“What are the likely side effects if we change the dose?”

This means decision-making is informed by predicted outcomes of interventions, not just statistical patterns. It allows doctors to compare treatment options, simulate ‘what-if’ scenarios, and choose the one most likely to improve outcomes for an individual patient.

Q: Who’s involved in building these models?
A: It’s a multidisciplinary team effort:

* Clinicians bring medical expertise and ensure clinical relevance.
* Data scientists handle the technical modeling and statistical validation.
* Biologists provide mechanistic insights into disease pathways.
* Patients and advocates guide the questions we prioritize and help interpret what results mean in real life.


Q: How can I get involved?
A: There are many ways:

**Clinicians and researchers**: help refine causal diagrams, provide domain insights, or contribute data.

**Data scientists**: develop and test causal algorithms on real-world oncology datasets.

**Patients and advocates**: Share experiences, suggest meaningful outcomes to study, and help ensure the work addresses real needs.

Even **if you’re just curious**, you can stay connected and give feedback. Every voice helps shape better models!
