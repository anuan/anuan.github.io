<script lang="ts">
	import video from '$lib/assets/website_draft-small.mp4';
	import './global.css';
</script>

<main>
	<h1>Transforming Healthcare Decisions with Causal AI</h1>
	<p>
		<b
			>Moving beyond population averages to provide personalized, cause-and-effect insights for
			patients and clinicians.</b
		>
	</p>
	<p>Alternative: <b>Empowering Patients and Clinicians with Causal AI for Better Health Decisions</b></p>
	<p>Alternative: <b>Personalized Healthcare Requires Causal Thinking</b></p>
	<p>
		Today's healthcare decisions are often based on population averages, not individual causal
		factors. We are building a platform that uses causal inference and machine learning to create
		personalized treatment effect models, enabling truly shared and informed decision-making between
		patients and their care teams.
	</p>
	<video controls>
		<!--removed autoplay-->
		<source src={video} type="video/mp4" />
		From Correlations To Causal Understanding
		<track kind="captions" />
	</video>
	<p class="buttons"><a href="/phrt/vision" class="button">Explore the Vision</a></p>

	<h2>The Challenge with Today's Data-Driven Medicine</h2>
	<p><i>boxes with</i></p>
	<ul>
		<li>
			<b>Information Overload</b>Clinicians and patients are awash in data, but it often lacks
			clear, actionable meaning for the individual.
		</li>
		<li>
			<b>"Black Box" Predictions</b>Current AI models find correlations but can't explain the "why,"
			leading to a lack of trust and portability.
		</li>
		<li>
			<b>Impersonal Insights</b>Recommendations are based on averages, failing to answer a patient's
			key question: "What is the best path for me?"
		</li>
	</ul>

	<h2>Our Solution: A Platform Built on Causal Understanding</h2>
	<p>
		We're building a new class of clinical decision support tools. By starting with a causal
		"blueprint" of a disease—informed by clinical and biological knowledge—our platform provides <b
			>explainable AI with guardrails</b
		>. It allows clinicians and patients to simulate and compare the likely effects of different
		treatment options, enabling truly informed and shared decision-making.
	</p>

	<p class="buttons"><a href="/phrt/approach" class="button">Discover our Approach</a></p>

	<h2>Join Us in Shaping the Future of Personalized Health</h2>

	<p>
		Building this future requires a symphony of expertise. We believe the best solutions are built
		collaboratively. We are actively seeking partners and collaborators to join our mission.
	</p>
	<ul>
		<li>
			<b>Clinicians & Researchers:</b>Partner with us to build and validate causal models in your
			area of expertise.
		</li>
		<li>
			<b>Data Scientists & Engineers:</b>Lend your skills to a grand challenge in AI for health and
			help us build the core platform.
		</li>
		<li>
			<b>Patient Advocates:</b>Ensure our tools are designed to truly empower patients and meet
			their needs.
		</li>
		<li>
			<b>Healthcare Innovators:</b>Ensure our tools are designed to truly empower patients and meet
			their needs.
		</li>
	</ul>

	<h2>Ready to Learn More?</h2>

	<p>Explore our vision in detail, learn about our team, or get answers to common questions.</p>
	<p class="buttons">
		<a href="/phrt/about" class="button">About Us & Contact</a>
		<a href="/phrt/faq" class="button">Read the FAQ</a>
	</p>
</main>

<style>
	video {
		width: 90%;
		max-width: 640px;
		height: auto;
	}
</style>
