import { Accordion, AccordionSection } from "../../components/Accordion";

const TestPage = () => {
	return (
		<Accordion openItem={0}>
			<AccordionSection title="Section 1" index={0}>
				<p>Content for section 1</p>
			</AccordionSection>
			<AccordionSection title="Section 2" index={1}>
				<p>Content for section 2</p>
			</AccordionSection>
			<AccordionSection title="Section 3" index={2}>
				<p>Content for section 3</p>
			</AccordionSection>
		</Accordion>
	);
};

export default TestPage;