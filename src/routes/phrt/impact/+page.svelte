<script lang="ts">
	import '../global.css';
</script>

<main>

	<h2>Potential Scientific and Clinical Impact</h2>
	<p>
		The implementation of a causal inference framework for clinical decision-making offers
		a substantial advance over traditional predictive modeling. The potential impact spans
		patient care, clinical practice, and the research enterprise.
	</p>

	<h3>Enhancing Patient-Centered Care and Health Literacy</h3>
	<ul>
		<li>
			<b>Individualized Treatment Effect (ITE) Estimation:</b> The platform moves beyond population-level
			averages derived from clinical trials to estimate individualized treatment effects. This provides
			a patient-specific probabilistic forecast of outcomes under different therapeutic interventions,
			which is crucial for preference-sensitive decisions.
		</li>
		<li>
			<b>Facilitating Informed Consent:</b> By making the complex, multi-dimensional trade-offs between
			treatments transparent and quantifiable, the system serves as a powerful tool for enhancing health
			literacy. It provides a robust foundation for the shared decision-making process, ensuring a higher
			standard of informed consent.
		</li>
		<li>
			<b>Translating Data into Actionable Insight:</b> The platform acts as a translational layer, converting
			heterogeneous data sources (genomic, clinical, patient-reported) into clear, causal insights about
			a patient's potential health trajectory, empowering them with a more objective understanding of
			their condition.
		</li>
	</ul>

	<h3>Advancing Clinical Decision Support</h3>
	<ul>
		<li>
			<b>Robust Counterfactual Reasoning:</b> This platform is fundamentally a counterfactual engine.
			It enables clinicians to formally ask and answer "what if" questions that are core to clinical
			deliberation but are poorly handled by correlation-based predictive models.
		</li>
		<li>
			<b>Inherent Explainability (XAI):</b> Unlike "black-box" models, the explicit causal graph provides
			built-in interpretability. Model outputs can be traced back to the underlying causal assumptions
			derived from established clinical and biological knowledge, fostering trust and facilitating critical
			appraisal by clinicians.
		</li>
		<li>
			<b>Mitigating Confounding and Bias:</b> By explicitly modeling the data-generating process, the
			framework provides a principled methodology for identifying and adjusting for confounding variables
			that are pervasive in observational clinical data, leading to more robust and less biased effect
			estimates.
		</li>
	</ul>

	<h3>Accelerating Translational Research and Health Economics</h3>
	<ul>
		<li>
			<b>A Framework for <i>In Silico</i> Trials:</b> The causal models serve as a platform for conducting <i>in
			silico</i> trials. This allows researchers to test novel therapeutic hypotheses and prioritize candidates
			for formal RCTs, potentially reducing the time and cost of the translational pipeline.
		</li>
		<li>
			<b>Improving Model Transportability:</b> Causal models, by virtue of encoding invariant mechanisms,
			are more likely to be transportable across different populations and clinical settings. This directly
			addresses the critical generalizability and replication challenges in modern medical research.
		</li>
		<li>
			<b>Enhancing Health Economics and Outcomes Research (HEOR):</b> The ability to model long-term
			outcomes under various intervention strategies provides a more sophisticated data source for health
			economic models, enabling more accurate cost-effectiveness and budget impact analyses for new and
			existing therapies.
		</li>
	</ul>
</main>