<main>
	<h1>Frequently asked questions</h1>

	<h2>Clinicians and Scientists</h2>

	<div class="q_and_a">
		<question>How does this integrate with existing Electronic Health Record (EHR) systems?</question>
		<answer></answer>

		<question>What is the evidence base for the causal models you're using?</question>
		<answer></answer>

		<question>How do you ensure the model's recommendations are explainable and not a &lsquo;black box&rsquo;?</question>
		<answer></answer>
	</div>
	<h2>Data Scientists</h2>
	<div class="q_and_a">
		<question>What kind of data are you planning to use (e.g., genomics, clinical notes, wearable data)?</question>
		<answer></answer>
		<question>How do you handle data privacy and security (e.g., federated learning, GDPR/HIPAA
			compliance)?</question>
		<answer></answer>

		<question>What is the proposed technology stack?</question>
		<answer></answer>
	</div>
	<h2>Patient Advocates, Patients and General Audience</h2>
	<div class="q_and_a">
		<question>How is patient data protected and used?</question>

		<question>How does this platform give patients a stronger voice in their care?</question>

		<question>Is this technology meant to replace a doctor's judgment?</question>
		<answer> <p>No, it's a decision support tool.</p></answer>
	</div>
	<div class="q_and_a">
		<question>What's wrong with traditional AI/ML in oncology?</question>
		<answer>
			<p>
				Traditional AI/ML systems are fantastic at spotting patterns, but they usually work with
				associations rather than true cause-and-effect relationships. In oncology, that's risky: a
				model might predict a patient's survival time based on a lab result that's actually just a
				side effect of another hidden factor, like access to a specific treatment. Such models can
				be:
			</p>
			<ul>
				<li><b>Biased</b>: They can pick up on confounding factors and dataset quirks.</li>
				<li>
					<b>Non-transferable</b>: They may fail in new hospitals, regions, or patient subgroups.
				</li>
				<li>
					<b>Non-actionable</b>: They can't reliably tell us what would happen if we changed a
					treatment.
				</li>
			</ul>
			<p>
				The result is that predictions may look accurate in a test set but lead to poor real-world
				decisions.
			</p>
		</answer>
	</div>

	<div class="q_and_a">
		<question>What exactly is a &lsquo;causal model&rsquo;?</question>
		<answer>
			<p>
				A causal model is a framework that starts with an explicit causal story ( often represented
				as a directed acyclic graph (DAG)) which shows how variables influence each other.
			</p>
			<p class="inset">Nodes represent variables (e.g., gene mutations, treatments, outcomes).</p>
			<p class="inset">
				Arrows represent direct causal influences (e.g., treatment → biomarker change).
			</p>
			<p class="inset">
				Structure encodes which factors are causes, which are effects, and which are unrelated.
			</p>
			<p>
				Using this map to start with, we can identify which variables to measure, which to adjust
				for, and which relationships are most relevant for answering the clinical question.
			</p>
		</answer>
	</div>

	<div class="q_and_a">
		<question>How is this different from regular data science?</question>
		<answer>
			<p>Regular data science often follows this path:</p>
			<p class="inset">Data → Model → Prediction</p>
			<p>Our approach is:</p>
			<p class="inset">Causal story (DAG) → Targeted data → Model with guardrails</p>
			<p>
				The key difference is that we don't let the data alone decide the story. We bring in
				clinical knowledge, biology, and theory first, then collect or select the right data to
				populate that structure. This makes the model more trustworthy, explainable, and adaptable
				to new scenarios.
			</p>
		</answer>
	</div>

	<div class="q_and_a">
		<question>Why does the order ‘DAG → data → model' matter?</question>
		<answer>
			<p>If you start with data and skip the causal story, you risk:</p>
			<ul>
				<li>Including bias: confounders can create misleading associations.</li>
				<li>Missing variables: you may not measure key drivers at all.</li>
				<li>Overfitting: the model learns patterns that won't hold outside your dataset.</li>
			</ul>
			<p>When you start with a DAG, you:</p>
			<ul>
				<li>Decide in advance which variables are essential.</li>
				<li>Know exactly how to block backdoor paths that introduce bias.</li>
				<li>Build models that can be interpreted and stress-tested.</li>
			</ul>
			<p>It's like building a house with a blueprint instead of randomly stacking bricks.</p>
		</answer>
	</div>

	<div class="q_and_a">
		<question>What kinds of data do you use?</question>
		<answer>
			<p>We use observational data from:</p>
			<ul>
				<li>Clinical records (e.g., diagnoses, treatments, outcomes).</li>
				<li>Genomics (e.g., mutations, expression profiles).</li>
				<li>Imaging (e.g., MRI, histopathology scans).</li>
				<li>Laboratory tests (e.g., biomarkers, blood panels).</li>
			</ul>
			<p>
				The crucial point is that we don't just take ‘everything available'. We deliberately select
				variables based on the causal story, so each one has a role in estimating the effect we care
				about and controlling bias.
			</p>
		</answer>
	</div>

	<div class="q_and_a">
		<question>Can causal models really work in real-world clinical settings?</question>
		<answer>
			<p>
				Yes, in fact they are built for that. Since they explicitly account for confounding and
				bias, causal models can generalize better across populations and hospitals. They can be
				updated when new evidence emerges, and because they're interpretable, clinicians can see why
				a recommendation is made. This transparency is critical for safety, trust and regulatory
				approval.
			</p>
		</answer>
	</div>

	<div class="q_and_a">
		<question>How does this help patients and clinicians?</question>
		<answer>
			<p>Causal models can answer questions like:</p>
			<p class="inset">
				“If we start this chemotherapy earlier, how much longer will the patient live?”
			</p>
			<p class="inset">“Will this targeted therapy benefit this specific molecular profile?”</p>
			<p class="inset">“What are the likely side effects if we change the dose?”</p>
			<p>
				This means decision-making is informed by predicted outcomes of interventions, not just
				statistical patterns. It allows doctors to compare treatment options, simulate ‘what-if'
				scenarios, and choose the one most likely to improve outcomes for an individual patient.
			</p>
		</answer>
	</div>

	<div class="q_and_a">
		<question>Who's involved in building these models?</question>
		<answer>
			<p>It's a multidisciplinary team effort:</p>
			<ul>
				<li>Clinicians bring medical expertise and ensure clinical relevance.</li>
				<li>Data scientists handle the technical modeling and statistical validation.</li>
				<li>Biologists provide mechanistic insights into disease pathways.</li>
				<li>
					Patients and advocates guide the questions we prioritize and help interpret what results
					mean in real life.
				</li>
			</ul>
		</answer>
	</div>

	<div class="q_and_a">
		<question>How can I get involved?</question>
		<answer>
			<p>There are many ways:</p>
			<ul>
				<li>
					<b>Clinicians and researchers</b>: help refine causal diagrams, provide domain insights,
					or contribute data.
				</li>
				<li>
					<b>Data scientists</b>: develop and test causal algorithms on real-world oncology
					datasets.
				</li>
				<li>
					<b>Patients and advocates</b>: Share experiences, suggest meaningful outcomes to study,
					and help ensure the work addresses real needs.
				</li>
			</ul>
			<p>
				Even <b>if you're just curious</b>, you can stay connected and give feedback. Every voice
				helps shape better models!
			</p>
		</answer>
	</div>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Overlock:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Ovo&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Zain:ital,wght@0,200;0,300;0,400;0,700;0,800;0,900;1,300;1,400&display=swap');

	main {
		position: relative;
		top: 80px;
		width: 90%;
		max-width: 800px;
		background: white;
		margin: auto;
		padding: 10px;
		color: rgb(50, 50, 50);
	}

	h1, h2, h3 {
		font-family: 'Overlock', sans-serif;
		font-size: 60px;
		color: teal;
	}

	h1 {
		margin-bottom: 90px;
	}

	h2 {
		font-size: 36px;
	}

	h3 {
		font-size: 28px;
	}

	.q_and_a {
		font-family: 'Newsreader', serif;
		margin-bottom: 60px;
		line-height: 1.6;
	}

	question {
		font-size: 28px;
		color: teal;
	}

	answer {
		font-size: 21px;
		margin-bottom: 20px;
	}

	.inset {
		margin-left: 50px;
	}
</style>
