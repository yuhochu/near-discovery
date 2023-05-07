import React, { useMemo } from "react";
import { Widget } from "near-social-vm";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Search = ({
  widgets,
  tos,
  logOut,
  loadAndOpenFile,
  refs,
  refSearch,
  disable,
}) => {
  const OpenButtonIcon = (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.09411 0.4668C3.48623 2.66122 1.87845 4.85542 0.270465 7.04958C-0.301894 7.83094 0.233009 8.95701 1.17669 8.95701H10.8236C11.7672 8.95701 12.3022 7.83094 11.7295 7.04958C10.1219 4.85542 8.51384 2.66126 6.90606 0.4668C6.44999 -0.1556 5.55032 -0.1556 5.09411 0.4668ZM0.751334 11.9861H10.3913C10.7746 11.9861 11.5722 12.1064 11.8719 11.6394C12.2055 11.12 11.8486 10.4239 11.2489 10.4239H1.60899C1.22547 10.4239 0.428086 10.3038 0.127975 10.7709C-0.205466 11.29 0.151429 11.9861 0.751334 11.9861Z"
        fill="white"
      />
    </svg>
  );
  return (
    <>
      {widgets.editorComponentSearch && (
        <div ref={refSearch} style={{ position: "relative" }}>
          <div className={disable.search ? "onboardingDisable" : ""}>
            <div style={{ width: "100%", minHeight: "48px" }}>
              <div ref={refs.step5}>
                <div ref={refs.step6}>
                  <div
                    ref={refs.step7}
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    {/* We use the component search widget as a VM entry point to add a TOS check wrapper.
                It does not need to be this component, just some <Widget /> on the page */}
                    <Widget
                      src={tos.checkComponentPath}
                      props={{
                        logOut: logOut,
                        tosName: tos.contentComponentPath,
                        targetComponent: widgets.editorComponentSearch,
                        targetProps: useMemo(
                          () => ({
                            extraButtons: ({
                              widgetName,
                              widgetPath,
                              onHide,
                            }) => (
                              <OverlayTrigger
                                placement="auto"
                                overlay={
                                  <Tooltip>
                                    Open "{widgetName}" component in the editor
                                  </Tooltip>
                                }
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    cursor: "pointer",
                                  }}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    loadAndOpenFile(widgetPath);
                                    onHide && onHide();
                                  }}
                                >
                                  {OpenButtonIcon}
                                  <button className="btn text-white">
                                    Open
                                  </button>
                                </div>
                              </OverlayTrigger>
                            ),
                          }),
                          [loadAndOpenFile]
                        ),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
