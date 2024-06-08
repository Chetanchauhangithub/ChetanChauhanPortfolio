/* eslint-disable react/prop-types */

const ClickIcon = ({ src, href, name, onClick }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      role="button">
      <img name={name} src={src} alt="imageIcon" />
    </a>
  );
};

export default ClickIcon;
