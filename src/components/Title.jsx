const Title = ({ title, subTitle }) => {
  return (
    <div className="section-title">
      <h1>
        {title} <span>{subTitle}</span>
      </h1>
    </div>
  );
};
export default Title;
