import { AppHeader } from "./cmps/AppHeader";
import { AppFilterNav } from "./cmps/AppFilterNav";
import { AppGallery } from "./cmps/AppGallery";
import { AppFooter } from "./cmps/AppFooter";

export function AppIndex() {
  //TODO:  state of the redux
  return (
    <div className="app-continer">
      <div className="app-header">
        <AppHeader />
      </div>

      <div className="app-filter-nav">
        <AppFilterNav />
      </div>

      <div className="app-gallery">
        <AppGallery />
      </div>

      <div className="app-footer">
        <AppFooter />
      </div>
    </div>
  );
}
