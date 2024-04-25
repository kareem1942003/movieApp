import { useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: theme.palette.info.dark,
        minHeight: "50px",
        padding: "10px 60px",
      }}
      className="footerNav"
    >
      <div className="text">
        <h2
          style={{
            color: theme.palette.background.default,
          }}
        >
          Kareem
        </h2>
      </div>
      <div className="gmail">
        <h2>
          <a
            style={{ color: theme.palette.background.default }}
            href="mailto:karem1941999@gmail.com"
          >
            karem1941999@gmail.com
          </a>
        </h2>
      </div>
      <div className="links">
        <ul
          style={{
            display: "flex",
            gap: "15px",

            listStyle: "none",
          }}
        >
          <li>
            <a
              style={{ color: theme.palette.background.default }}
              href="https://www.linkedin.com/in/kareem-mahmoud-644078228/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              style={{ color: theme.palette.background.default }}
              href="https://github.com/kareem1942003"
              target="_blank"
            >
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a
              style={{ color: theme.palette.background.default }}
              href="https://www.facebook.com/profile.php?id=100022210742047"
              target="_blank"
            >
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
