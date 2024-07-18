import PropType from "prop-types";
import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={theme}>
      <div>{children}</div>
    </div>
  );
}

ThemeProvider.propType = {
  children: PropType.node.isRequired,
};
