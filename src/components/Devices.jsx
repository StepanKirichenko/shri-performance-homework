import { useState, useEffect, useRef } from "react";
import Event from "./Event";
import { TABS } from "../lib/tabs";
const TABS_KEYS = Object.keys(TABS);

export default function Devices() {
  const ref = useRef();
  const initedRef = useRef(false);
  const currentTabRef = useRef(false);
  const [activeTab, setActiveTab] = useState("");
  const [hasRightScroll, setHasRightScroll] = useState(false);

  useEffect(() => {
    if (!activeTab && !initedRef.current) {
      initedRef.current = true;
      setActiveTab(new URLSearchParams(location.search).get("tab") || "all");
    }
  }, [activeTab, setActiveTab]);

  const onSelectInput = (event) => {
    setActiveTab(event.target.value);
  };

  useEffect(() => {
    const scroller = currentTabRef.current;
    const scrollerWidth = scroller ? scroller.scrollWidth : 0;

    const newHasRightScroll = scrollerWidth > ref.current.offsetWidth;
    if (newHasRightScroll !== hasRightScroll) {
      setHasRightScroll(newHasRightScroll);
    }
  });

  const onArrowCLick = () => {
    const scroller = currentTabRef.current;
    if (scroller) {
      scroller.scrollTo({
        left: scroller.scrollLeft + 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section main__devices">
      <div className="section__title">
        <h2 className="section__title-header">Избранные устройства</h2>

        <select
          className="section__select"
          defaultValue="all"
          onInput={onSelectInput}
        >
          {TABS_KEYS.map((key) => (
            <option key={key} value={key}>
              {TABS[key].title}
            </option>
          ))}
        </select>

        <ul role="tablist" className="section__tabs">
          {TABS_KEYS.map((key) => (
            <li
              key={key}
              role="tab"
              aria-selected={key === activeTab ? "true" : "false"}
              tabIndex={key === activeTab ? "0" : undefined}
              className={
                "section__tab" +
                (key === activeTab ? " section__tab_active" : "")
              }
              id={`tab_${key}`}
              aria-controls={`panel_${key}`}
              onClick={() => setActiveTab(key)}
            >
              {TABS[key].title}
            </li>
          ))}
        </ul>
      </div>

      <div className="section__panel-wrapper" ref={ref}>
        {TABS_KEYS.map((key) => (
          <div
            key={key}
            ref={key === activeTab ? currentTabRef : null}
            role="tabpanel"
            className={
              "section__panel" +
              (key === activeTab ? "" : " section__panel_hidden")
            }
            aria-hidden={key === activeTab ? "false" : "true"}
            id={`panel_${key}`}
            aria-labelledby={`tab_${key}`}
          >
            <ul className="section__panel-list">
              {TABS[key].items.map((item, index) => (
                <Event key={index} {...item} />
              ))}
            </ul>
          </div>
        ))}
        {hasRightScroll && (
          <div className="section__arrow" onClick={onArrowCLick}></div>
        )}
      </div>
    </section>
  );
}
