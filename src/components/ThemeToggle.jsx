import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { BrightnessHighFill, GearWide, MoonFill } from "react-bootstrap-icons";

function ThemeToggle() {
  const [theme, setTheme] = useState("auto");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <DropdownButton
      id="dropdown-theme-toggle"
      title="Theme"
      variant="dark"
      className="z-3 position-fixed bottom-0 end-0 mb-3 me-3"
    >
      <Dropdown.Item onClick={() => setTheme("light")}><BrightnessHighFill /> Light</Dropdown.Item>
      <Dropdown.Item onClick={() => setTheme("dark")}><MoonFill /> Dark</Dropdown.Item>
      <Dropdown.Item onClick={() => setTheme("auto")}><GearWide /> Auto</Dropdown.Item>
    </DropdownButton>
  );
}

export default ThemeToggle;
