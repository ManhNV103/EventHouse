import React from "react";
import { Tab } from "semantic-ui-react";
import ProfilePhoto from "./ProfilePhoto";

const panes = [
  { menuItem: "About", render: () => <Tab.Pane>About content</Tab.Pane> },
  { menuItem: "Photos", render: () => <ProfilePhoto /> },
  { menuItem: "Activities", render: () => <Tab.Pane>acitivity content</Tab.Pane> },
  { menuItem: "Followers", render: () => <Tab.Pane>follwer content</Tab.Pane> },
  { menuItem: "Following", render: () => <Tab.Pane>following content</Tab.Pane> },
];

const ProfileContent = () => {
  return (
    <Tab menu={{ fluid: true, vertical: true }} menuPosition="right" panes={panes} activeIndex={1}/>
  );
};

export default ProfileContent;
