export default function ContactRow({ icon, label, value, type = "text" }) {
  let href = null;

  if (type === "phone") {
    href = `tel:${value.replace(/\s/g, "")}`;
  }

  if (type === "email") {
    href = `mailto:${value}`;
  }

  const Wrapper = href ? "a" : "div";

  return (
    <>
      <Wrapper
        href={href}
        className="d-flex align-items-center gap-3  py-3 text-decoration-none text-dark"
        style={{ cursor: href ? "pointer" : "default" }}
      >
        {/* Icon */}
        <div
          className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
          style={{
            width: 44,
            height: 44,
            backgroundColor: "#f7f7f7"
          }}
        >
          {icon}
        </div>

        {/* Text */}
        <div className="d-flex flex-column align-items-start text-start">
          <span className="text-muted small">{label}</span>
          <span className="fw-medium">{value}</span>
        </div>
      </Wrapper>

      <div className="border-bottom mx-4" />
    </>
  );
}
