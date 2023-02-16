import aboutImg from "../images/hero.jpg";
import Title from "./Title";

const About = () => {
  return (
    <>
      <section className="section" id="about">
        <Title title="about" subTitle="us" />

        <div className="section-center about-center">
          <div className="about-img">
            <img src={aboutImg} className="about-photo" alt="bird" />
          </div>
          <article className="about-info">
            <h3>our mission</h3>
            <p>
              Your donation will not only help us protect and restore the
              habitats birds rely on to thrive and survive, it will also allow
              us to help priority bird species in decline by broadening and
              deepening our education and conservation programs.
            </p>
            <p>
              <strong>
                Together we can be the voice of birds and we thank you for your
                support.
              </strong>
            </p>
            <a href="#form" className="btn">
              contact us
            </a>
          </article>
        </div>
      </section>
    </>
  );
};
export default About;
