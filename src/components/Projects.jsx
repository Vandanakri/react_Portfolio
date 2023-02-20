// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Projects = () => {
  const { Project } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectProject, setSelectProject] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="project">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectProject?.logo} alt="..." />
          <h6>{selectProject?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <h6>{selectProject?.para1}</h6>
          <h6>{selectProject?.para2}</h6>
          <h6>{selectProject?.para3}</h6>
          <h6>{selectProject?.para4}</h6>
          <h6>{selectProject?.para5}</h6>
          <h6>{selectProject?.para6}</h6>
        </ul>
        <br />
        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="btn hover:bg-slate-800 hover:text-white"
          >
            Close
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {Project.title}
        </h2>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {Project.projects_content.map((project, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 300}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img
                  src={project.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{project.name}</h6>
                <p className="italic">{project.para}</p>
                <div className="flex space-x-3 m-1">
                  <a
                    className="cursor-pointer border-2 border-slate-400 rounded-xl text-center bg-slate-700 text-white  hover:bg-white hover:text-slate-800 p-1 flex-1"
                    href={project.github}
                  >
                    GITHUB
                  </a>
                  <a
                    className="cursor-pointer border-2 border-slate-400 rounded-xl text-center bg-slate-700 text-white hover:bg-white hover:text-slate-800 p-1 flex-1"
                    href={project.live}
                  >
                    LIVE
                  </a>
                </div>

                <div
                  onClick={() => {
                    setSelectProject(project);
                    openModal();
                  }}
                  className="text-xl absolute top-3 right-3"
                >
                  {createElement(Project.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
