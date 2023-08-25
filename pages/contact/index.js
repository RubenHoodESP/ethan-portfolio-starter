
// icons
import { useTranslations } from "next-intl";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {

  const t = useTranslations();

  return (
    <div className="h-full bg-primary/60">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center
      justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <h2 className="h2 text-center mb-12">
            { t('contact.title') } <span className="text-accent">.</span>
          </h2>
          {/* form */}
          <form className="flex-1 flex flex-col gap-6 w-full mx-auto" action="">
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder={t('contact.form.name')} className="input" />
              <input type="text" placeholder={t('contact.form.email')} className="input" />
            </div>
            <input type="text" placeholder={t('contact.form.subject')} className="input" />
            <textarea placeholder={t('contact.form.message')} className="textarea" />
            <button className="btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center overflow-hidden
            hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500">{ t('contact.send') }</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all
              duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../../messages/${context.locale}.json`)).default
    }
  };
}

export default Contact;
