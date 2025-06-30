import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { setProjectName } from '../../store/slices/onboardingSlice';
import { Page, Navbar, List, ListInput, Button } from 'konsta/react';

const ProjectNameScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { projectName } = useSelector((state: RootState) => state.onboarding);

  const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setProjectName(e.target.value));
  };

  return (
    <Page>
      <Navbar title="Project Name" />
      <List strongIos insetIos>
        <ListInput
          label="Project Name"
          type="text"
          placeholder="e.g., My Awesome Project"
          value={projectName}
          onChange={handleProjectNameChange}
        />
      </List>
      <div className="p-4">
        <Button
          onClick={() => {}}
          className="k-color-primary"
        >
          Continue
        </Button>
      </div>
    </Page>
  );
};

export default ProjectNameScreen;