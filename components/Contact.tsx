import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            label="// 04 contact"
            title="Let's work together"
            subtitle="Have a website, app, or system in mind? Tell me about it and I'll get back to you soon."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}