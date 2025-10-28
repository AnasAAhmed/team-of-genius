import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqsColumn } from "@/lib/constants"
const Faqs = () => {
    return (
        <section className="mx-4 sm:mx-24">
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
            >
                {faqsColumn.map((faq, i) => (

                    <AccordionItem key={i} value={"item-" + faq.id}>
                        <AccordionTrigger className="cursor-pointer">{faq.que}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p dangerouslySetInnerHTML={{ __html: faq.answer }} />

                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

export default Faqs
