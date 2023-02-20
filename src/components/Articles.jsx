import { content } from "../Content";

const Articles = () => {
  const { articles } = content;
  return (
    <section id="articles">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {articles.title}
        </h2>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {articles.article_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <img src={content.logo} alt="..." className="mx-auto w-12" />
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
              <div className="mt-5">
                <a
                  href={content.more}
                  className="cursor-pointer border-2 border-slate-400 rounded-xl text-center bg-slate-700 text-white hover:bg-white hover:text-slate-800 p-2 flex-1"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
