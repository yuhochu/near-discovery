import React, { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import "./styles.css";
import CurrentComponent from "../../../CurrentComponent";
import { navLinkData } from "../../../orgLinks";
import { NavLink, useHistory } from "react-router-dom";
import { recordMouseEnter } from "../../../../../../utils/analytics";
import { DiscoverDropdownMenu } from "../../../../alpha/desktop/nav_dropdown/NavDropdownMenu";

const MainNavigationMenu = (props) => {
  const [discoverDropdown, setDiscoverDropdown] = useState(false);

  const history = useHistory();
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="NavigationMenuLink"
            onClick={() => history.push("/")}
          >
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item
          style={{
            position: "relative",
          }}
          onMouseEnter={() => {
            setDiscoverDropdown(true);
          }}
          onMouseLeave={() => {
            setDiscoverDropdown(false);
          }}
        >
          <NavigationMenu.Trigger
            style={{
              color: location.pathname.includes("components") ? "white" : "",
            }}
            className="NavigationMenuTrigger"
          >
            Discover
          </NavigationMenu.Trigger>

          <DiscoverDropdownMenu
            {...props}
            menuDropdown={discoverDropdown}
            onClickLink={() => setDiscoverDropdown(false)}
          ></DiscoverDropdownMenu>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className="NavigationMenuTrigger"
            onMouseEnter={recordMouseEnter}
          >
            Develop
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent develop">
            <CurrentComponent {...props} />
            <ul className="List one">
              <ListItem
                route={navLinkData.sandbox.link}
                title={navLinkData.sandbox.title}
              >
                <i className="ph-duotone ph-code-block"></i>
                {navLinkData.sandbox.description}
              </ListItem>
              <ListItem
                href={navLinkData.documentation.link}
                title={navLinkData.documentation.title}
              >
                <i className="ph-duotone ph-book-open-text"></i>
                {navLinkData.documentation.description}
              </ListItem>
              <ListItem
                route={navLinkData.tutorials.link}
                title={navLinkData.tutorials.title}
              >
                <i className="ph-duotone ph-video"></i>
                {navLinkData.tutorials.description}
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => {
    if (props.route) {
      return (
        <li onMouseEnter={recordMouseEnter}>
          <NavigationMenu.Link asChild>
            <NavLink
              to={props.route}
              className={classNames("ListItemLink", className)}
            >
              <div className="ListItemHeading">{title}</div>
              <p className="ListItemText">{children}</p>
            </NavLink>
          </NavigationMenu.Link>
        </li>
      );
    } else {
      return (
        <li onMouseEnter={recordMouseEnter}>
          <NavigationMenu.Link asChild>
            <a
              className={classNames("ListItemLink", className)}
              {...props}
              ref={forwardedRef}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ListItemHeading">{title}</div>
              <p className="ListItemText">{children}</p>
            </a>
          </NavigationMenu.Link>
        </li>
      );
    }
  }
);

export default MainNavigationMenu;
