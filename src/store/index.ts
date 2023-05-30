import { create, StateCreator as ZStateCreator } from "zustand";
import { persist, subscribeWithSelector, devtools } from "zustand/middleware";
import createLayoutSlice, { LayoutSlice } from "./slices/layoutSlice";
import createThemeSlice, { ThemeSlice } from "./slices/themeSlice";
import createImageSlice, { ImageSlice } from "./slices/imageSlice";
import createTodoSlice, { TodoSlice } from "./slices/todoSlice";
import createQuotesSlice, { QuotesSlice } from "./slices/QuotesSlice";
import createSearchSlice, { SearchSlice } from "./slices/searchSlice";
import createToastSlice, { ToastSlice } from "./slices/ToastSlice";
import createWeatherSlice, { WeatherSlice } from "./slices/weatherSlice";
import createTimeSlice, { TimeSlice } from "./slices/TimeSlice";
import createPinnedSitesSlice, {
  PinnedSitesSlice,
} from "./slices/PinnedSitesSlice";
import { preloadImage, handleImages, handleGoals } from "@utils";
import { imageQuality, isRunningInExtension } from "@constants";

interface GeneralSlice {
  name?: string;
  setName: (name: string) => void;
}

export type Slices = LayoutSlice &
  ThemeSlice &
  ImageSlice &
  TodoSlice &
  QuotesSlice &
  SearchSlice &
  ToastSlice &
  WeatherSlice &
  TimeSlice &
  PinnedSitesSlice &
  GeneralSlice;
export type StateCreator<T> = ZStateCreator<Slices, [], [], T>;

const useStore = create<Slices>()(
  subscribeWithSelector(
    persist(
      devtools((...a) => ({
        setName: (name) => {
          a[0]({ name });
        },
        ...createLayoutSlice(...a),
        ...createThemeSlice(...a),
        ...createImageSlice(...a),
        ...createTodoSlice(...a),
        ...createQuotesSlice(...a),
        ...createSearchSlice(...a),
        ...createToastSlice(...a),
        ...createWeatherSlice(...a),
        ...createTimeSlice(...a),
        ...createPinnedSitesSlice(...a),
      })),
      {
        name: "store",
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(
              ([key]) =>
                !["searchOpen", "time", "sideBarOpen", "activeToasts"].includes(
                  key
                )
            )
          ),
      }
    )
  )
);
export default useStore;

export const api = useStore.getState();

// regular updates the time
setInterval(() => api.setTime(), 1000);
// Actions

useStore.subscribe(
  (state) => state.todayPhoto,
  (photo) => {
    preloadImage(photo.urls.raw + imageQuality);
    api.setTheme();
  }
);

// add image to link tag in head
preloadImage(api.todayPhoto.urls.raw + imageQuality, true);
preloadImage(api.nextPhoto.urls.raw + imageQuality);
// fetches images when stale
handleImages();
// fetches goals when stale
handleGoals();
if (api.cloudPhotos.length === 0) {
  api.getCloudPhotos();
} else if (api.lastFetchCloudPhotos !== undefined) {
  if (
    new Date().getTime() - new Date(api.lastFetchCloudPhotos || "").getTime() >
    1000 * 60 * 60 * 24
  ) {
    api.getCloudPhotos();
  }
}

api.setTheme();

if (isRunningInExtension && api.pinnedSites.length === 0) {
  chrome.topSites.get((data) => {
    data.slice(0, 4).map((d) => {
      api.addPinnedSite(d);
    });
  });
}
if (Notification.permission === "default") {
  Notification.requestPermission().then((res) => console.log(res));
}
