import React from "react";
import { Nav } from "react-bootstrap";
import ForkButton from "../buttons/ForkButton";
import OnboardingPublishButton from "../buttons/OnboardingPublishButton";
import PublishButton from "../buttons/PublishButton";
import PublishDraftAsMainButton from "../buttons/PublishDraftAsMainButton";
import SaveDraftButton from "../buttons/SaveDraftButton";
import styled from "styled-components";
const Container = styled.div`
  .btn-outline-primary {
    background: rgba(26, 46, 51, 0.25);
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    color: rgb(255, 255, 255);
    &:hover {
      background: rgba(26, 46, 51, 0.5);
      border: 0.5px solid rgba(255, 255, 255, 0.3);
    }
  }
  .btn-primary {
    background: rgba(48, 67, 82, 0.9);
    border-radius: 10px;
    color: #fff;
    border: none;
    &:hover {
      background: rgba(48, 67, 82, 1);
    }
  }
`;
export default ({
  jpath,
  widgetName,
  setShowModal,
  codeVisible,
  forkFile,
  near,
  path,
  metadata,
  isDraft,
  refs,
  onboarding,
  currentStep,
  requestSignIn,
  disable,
  handleCommit,
  accountId,
}) => (
  <Container>
    <Nav variant="pills mb-2 mt-2 ms-auto" activeKey={jpath}>
      <Nav.Item className="d-flex">
        <div>
          <SaveDraftButton
            widgetName={widgetName}
            setShowModal={setShowModal}
            disable={disable}
          />
        </div>
        <div>
          <ForkButton forkFile={forkFile} refs={refs} disable={disable} />
        </div>

        {isDraft ? (
          <PublishDraftAsMainButton
            widgetName={widgetName}
            near={near}
            path={path}
            codeVisible={codeVisible}
            metadata={metadata}
            ref={refs}
            disable={disable}
            handleCommit={handleCommit}
          />
        ) : onboarding && !accountId ? (
          <OnboardingPublishButton
            currentStep={currentStep}
            refs={refs}
            requestSignIn={requestSignIn}
            disable={disable}
          />
        ) : (
          <PublishButton
            widgetName={widgetName}
            near={near}
            path={path}
            codeVisible={codeVisible}
            metadata={metadata}
            disable={disable}
            handleCommit={handleCommit}
            refs={refs}
          />
        )}
      </Nav.Item>
    </Nav>
  </Container>
);
