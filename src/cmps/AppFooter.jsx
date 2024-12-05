// import { useSelector } from "react-redux";
// import { UserMsg } from "./UserMsg.jsx";

// export function AppFooter() {
//   const count = useSelector((storeState) => storeState.userModule.count);

//   return (
//     <footer className="app-footer">
//       <p>coffeerights - count: {count}</p>
//       <UserMsg />
//     </footer>
//   );
// }

import { useSelector } from "react-redux";
import { UserMsg } from "./UserMsg.jsx";

export function AppFooter() {
  const count = useSelector((storeState) => storeState.userModule.count);

  return (
    <footer className="app-footer">
      <div className="footer-top">
        <p>© 2024 Airbnb, Inc.</p>
        <div className="footer-links">
          <a href="/terms">Terms</a>
          <a href="/sitemap">Sitemap</a>
          <a href="/privacy">Privacy</a>
          <a href="/privacy-choices">Your Privacy Choices</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-language-currency">
          <span>
            Llanguage: <strong>English (US)</strong>
          </span>
          <span>
            Currency: <strong>$ Dollar</strong>
          </span>
        </div>
        <div className="footer-support">
          <a href="/support">Support & resources</a>
        </div>
      </div>

      <UserMsg />
    </footer>
  );
}
