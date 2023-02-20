import { content } from "../Content";

const Skills = () => {
  const { Skill } = content;
  return (
    <section className="bg-bg_light_primary" id="skill">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Skill.title}
          </h2>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-2 mx-20">
          <img
            src={Skill.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[40vw] min-w-[32rem] md:w-7"
          />

          <div className="flex flex-wrap gap-4 justify-center">
            {Skill.skill_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 300}
                className="bg-white sm:cursor-pointer 
               relative group flex items-center
                gap-8 p-7 rounded-md border-2 border-slate-200"
              >
                <div>
                  <img
                    src={content.image1}
                    alt="..."
                    className="w-10 group-hover:scale-125 duration-200"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
