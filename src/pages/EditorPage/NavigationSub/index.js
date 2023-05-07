import React from "react";
import ls from "local-storage";
import { EditorLayoutKey, Layout, Tab } from "../utils/const";
import OpenInNewTabButton from "../buttons/OpenInNewTabButton";
import RenderPreviewButton from "../buttons/RenderPreviewButton";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  height: "38px";
  display: "flex";
  margin-bottom: "12px";
  justify-content: "end";
  .btn-outline-secondary {
    background: rgba(26, 46, 51, 0.25);
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    color: rgb(255, 255, 255);
    &:hover {
      background: rgba(26, 46, 51, 0.5);
      border: 0.5px solid rgba(255, 255, 255, 0.3);
    }
  }
  .btn-outline-success {
    background: rgba(48, 67, 82, 0.9);
    border-radius: 10px;
    color: #fff;
    border: none;
    &:hover {
      background: rgba(48, 67, 82, 1);
    }
  }
`;
const NavigationSub = ({
  layout,
  path,
  accountId,
  tab,
  widgetPath,
  setTab,
  setLayoutState,
  refs,
  handleRender,
  disable,
}) => {
  const onLayoutChange = (e) => {
    const layout = e.target.value;
    if (layout === Layout.Split && tab === Tab.Widget) {
      setTab(Tab.Editor);
    }
    setLayout(layout);
  };

  const setLayout = (layout) => {
    ls.set(EditorLayoutKey, layout);
    setLayoutState(layout);
  };

  return (
    <div
      className="ms-auto"
      style={{
        height: "38px",
        display: "flex",
        marginBottom: "12px",
        justifyContent: "end",
      }}
    >
      <Container>
        {(Tab.Widget === tab || layout === Layout.Split) && (
          <div className="d-flex justify-content-end me-2">
            <RenderPreviewButton
              refs={refs}
              handleRender={handleRender}
              disable={disable}
            />
          </div>
        )}
        {path?.type === "widget" && accountId && (
          <OpenInNewTabButton widgetPath={widgetPath} disable={disable} />
        )}

        <div className="btn-group" role="group" aria-label="Layout selection">
          <input
            disabled={disable.changeViewButton}
            type="radio"
            className="btn-check"
            name="layout-radio"
            id="layout-tabs"
            autoComplete="off"
            checked={layout === Layout.Tabs}
            onChange={onLayoutChange}
            value={Layout.Tabs}
            title={"Set layout to Tabs mode"}
          />
          <label className="btn btn-outline-secondary" htmlFor="layout-tabs">
            <i className="bi bi-square" />
          </label>

          <input
            disabled={disable.changeViewButton}
            type="radio"
            className="btn-check"
            name="layout-radio"
            id="layout-split"
            autoComplete="off"
            checked={layout === Layout.Split}
            value={Layout.Split}
            title={"Set layout to Split mode"}
            onChange={onLayoutChange}
          />
          <label className="btn btn-outline-secondary" htmlFor="layout-split">
            <i className="bi bi-layout-split" />
          </label>
        </div>
      </Container>
    </div>
  );
};

export default NavigationSub;
