export default function Title({ children, level=2, style }) {
    return (
      <>
        {level === "h1" && <h1 className={style}>{children}</h1>}
        {level === "h2" && <h2 className={style}>{children}</h2>}
        {level === "h3" && <h3 className={style}>{children}</h3>}
        {level === "h4" && <h4 className={style}>{children}</h4>}
        {level === "h5" && <h5 className={style}>{children}</h5>}
        {level === "h6" && <h6 className={style}>{children}</h6>}
      </>
    );
  }
