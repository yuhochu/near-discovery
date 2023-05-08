import React, { useMemo } from "react";
import { Widget } from "near-social-vm";
import { Tab } from "../utils/const";

const TabMetadata = ({ tab, widgets, jpath, widgetPath, setMetadata }) => (
  <div
    className={`${
      tab === Tab.Metadata && widgets.widgetMetadataEditor
        ? ""
        : "visually-hidden"
    }`}
  >
    <div
      className="mb-3"
      style={{
        paddingTop: "20px",
        padding: "20px",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        appearance: "none",
        borderRadius: "0.375rem",
        height: "auto",
      }}
    >
      <Widget
        src={widgets.widgetMetadataEditor}
        key={`metadata-editor-${jpath}`}
        props={useMemo(
          () => ({
            widgetPath,
            onChange: setMetadata,
          }),
          [widgetPath]
        )}
      />
    </div>
  </div>
);

export default TabMetadata;
