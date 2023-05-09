import React from "react";
import Editor from "@monaco-editor/react";
import { Tab } from "../utils/const";
import styled from "styled-components";
const Container = styled.div`
  .form-control {
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.3);
    overflow: hidden;
  }
`;
const TabEditor = ({
  tab,
  codeVisible,
  widgetPath,
  changeCode,
  path,
  reformat,
  refs,
  refEditor,
}) => {
  return (
    <div
      className={`${tab === Tab.Editor ? "" : "visually-hidden"}`}
      ref={refEditor}
    >
      <Container>
        <div ref={refs.step3}>
          <div ref={refs.step2}>
            <div ref={refs.step8}>
              <div
                className="form-control mb-3"
                style={{ height: "70vh", borderTopLeftRadius: "0px", backgroundColor: 'transparent', color:'#ccc' }}
              >
                <Editor
                  value={codeVisible}
                  path={widgetPath}
                  defaultLanguage="javascript"
                  onChange={(code) => changeCode(path, code)}
                  theme="vs-dark"
                  wrapperProps={{
                    onBlur: () => reformat(path, codeVisible),
                  }}
                />
              </div>
              <div className="mb-3 d-flex gap-2 flex-wrap"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TabEditor;
